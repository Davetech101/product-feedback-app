import "../styles/globals.css";
import { store } from "../redux/store";
import { Provider } from "react-redux";
import NoSsr from "../components/NoSsr";

function MyApp({ Component, pageProps }) {
  return (
    <NoSsr>
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </NoSsr>
  );
}

export default MyApp;
