import { GlobalStyle } from '../components/styles/Global';
import { GlobalContextProvider } from '../context/GlobalContext';

function MyApp({ Component, pageProps }) {
  return (
    <GlobalContextProvider>
      <GlobalStyle></GlobalStyle>
      <Component {...pageProps} />
    </GlobalContextProvider>
  );
}

export default MyApp;
