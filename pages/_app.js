import '../styles/globals.scss';
import '../styles/pages.scss';
import { wrapper } from '../redux/store';
import Head from 'next/head';
import NavTop from '../components/NavTop';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Ergast - Maxis</title>
        <meta name="description" content="Ergast - Maxis" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavTop />
      <div className="main">
        <Component {...pageProps} />
      </div>
    </>
  );
}

export default wrapper.withRedux(MyApp);
