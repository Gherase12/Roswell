import '@/styles/globals.css'
import Nav from './../components/Nav';

export default function App({ Component, pageProps }) {
  return (
    <div className='pt-[70px] bg-black'>
        <Nav />
      <Component {...pageProps} />
    </div>
  )
}
