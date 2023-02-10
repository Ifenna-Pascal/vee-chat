import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { useRouter } from 'next/router'
import MainLayout from '../layout/mainLayout';
import { Provider } from 'react-redux';
import { store } from '../store';
import { ThemeProvider } from 'next-themes';

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  return router.pathname === '/' ? <Component {...pageProps} /> : 
  <ThemeProvider attribute='class'>
    <Provider store={store}><MainLayout><Component {...pageProps} /></MainLayout></Provider>
  </ThemeProvider>
}
