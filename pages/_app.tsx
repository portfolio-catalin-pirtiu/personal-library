import '../styles/globals.css';
import { AppProps } from 'next/app';
import Layout from '../components/Layout';
import { Toaster } from 'react-hot-toast';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
      <Toaster />
    </Layout>
  );
}
