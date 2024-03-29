import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Raleway&display=swap"
          rel="stylesheet"
        />
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1638977845750563"
          crossOrigin="anonymous"
        />

        {/* <link
          href="https://unpkg.com/aos@2.3.1/dist/aos.css"
          rel="stylesheet"
        /> */}
      </Head>

      <body>
        <Main />
        <NextScript />
        {/* <Script src="https://unpkg.com/aos@next/dist/aos.js"></Script>
        <script>AOS.init( ); AOS.refresh();</script> */}
      </body>
    </Html>
  );
}
