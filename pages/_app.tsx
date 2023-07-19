import "../styles/globals.css";
import type { AppProps } from "next/app";
// import "../components/Constant/DCSLocalize";
import { useTranslation, I18nextProvider } from "react-i18next";
import i18n from "../components/Constant/DCSLocalize";
import { Provider } from 'react-redux';
import { wrapper } from '../redux/store';
function MyApp({ Component, pageProps }: AppProps) {
  return (
    // <Provider store={store} > 
    <div className="h-full">
    <I18nextProvider i18n={i18n}>
      <Component {...pageProps} />
    </I18nextProvider>
    </div>
    // </Provider>
  );
}

// export default MyApp;
export default wrapper.withRedux(MyApp);
