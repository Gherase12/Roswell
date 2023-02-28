

import { createClient, configureChains, goerli, WagmiConfig } from "wagmi";
import Nav from "./../components/Nav";




import { publicProvider } from "wagmi/providers/public";
import { SessionProvider } from "next-auth/react";

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



export default function App({ Component, pageProps }) {
  return (
    <WagmiConfig client={client}>
    <SessionProvider session={pageProps.session} refetchInterval={0}>
        <div className='pt-[70px] bg-black'>
          <Nav />
          <Component {...pageProps} />
        </div>

        </SessionProvider>
    </WagmiConfig>
    
    
  );
}
