/* BOOTSTRAP */
import 'bootstrap/dist/css/bootstrap.css'
import '../styles/globals.css'
import '../styles/globals.scss'

import Head from "next/head";
import {useRouter} from 'next/router';

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <script src="https://kit.fontawesome.com/ce02519927.js" crossorigin="anonymous"></script>
      </Head>
      <Component {...pageProps} key={router.route}/>
    </>
  );
}

export default MyApp
