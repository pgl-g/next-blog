import Router from "next/router";
import nProgress from "nprogress";
import { ThemeProvider } from "next-themes";

import "../styles/globals.css";
import "../styles/nprogress.css";
import "../styles/mdx.css";
import "../styles/dracula.css";

Router.events.on("routeChangeStart", nProgress.start);
Router.events.on("routeChangeError", nProgress.done);
Router.events.on("routeChangeComplete", nProgress.done);

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider attribute="class" enableSystem={false}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
