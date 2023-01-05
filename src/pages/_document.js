import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* <link
          rel="preload"
          href="/fonts/inter-var-latin.woff2"
          as="font"
          crossOrigin="anonymous"
          type="font/woff2"
        /> */}
        {/* <meta charSet="utf-8" /> */}
        {/* <meta name="viewport" content="initial-scale=1.0, width=device-width" /> */}
        <link rel="icon" type="image/x-icon" href="/favicon/favicon.ico" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
