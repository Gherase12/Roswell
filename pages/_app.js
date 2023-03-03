

import { createClient, configureChains, goerli, WagmiConfig } from "wagmi";
import Nav from "./../components/Nav";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



import { publicProvider } from "wagmi/providers/public";
import { SessionProvider } from "next-auth/react";
import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from 'react-query'

import "../styles/globals.css";

const { provider, webSocketProvider } = configureChains(
  [goerli],
  [publicProvider()]
);

const client = createClient({
  provider,
  webSocketProvider,
  autoConnect: true,
});

const queryClient = new QueryClient()


export default function App({ Component, pageProps }) {
  return (
    <QueryClientProvider client={queryClient}>
    <WagmiConfig client={client}>
    <SessionProvider session={pageProps.session} refetchInterval={0}>
        <div className='pt-[70px] bg-black overflow-x-hidden'>
        <ToastContainer />
          <Nav />
          <Component {...pageProps} />
        </div>

        </SessionProvider>
    </WagmiConfig>
    </QueryClientProvider>
    
    
  );
}
