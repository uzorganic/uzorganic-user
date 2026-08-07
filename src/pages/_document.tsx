import Document, {
  DocumentContext,
  DocumentProps,
  Head,
  Html,
  Main,
  NextScript,
} from 'next/document';

import { createCache, extractStyle, StyleProvider } from '@ant-design/cssinjs';
import { ServerStyleSheet } from 'styled-components';

export default function MyDocument({ __NEXT_DATA__ }: DocumentProps) {
  return (
    <Html lang={__NEXT_DATA__.locale ?? 'ko'}>
      <Head>
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

MyDocument.getInitialProps = async (ctx: DocumentContext) => {
  const cache = createCache();
  const originalRenderPage = ctx.renderPage;

  const sheet = new ServerStyleSheet();

  ctx.renderPage = () =>
    originalRenderPage({
      enhanceApp: App => props =>
        sheet.collectStyles(
          <StyleProvider cache={cache}>
            <App {...props} />
          </StyleProvider>,
        ),
    });

  const initialProps = await Document.getInitialProps(ctx);
  const style = extractStyle(cache, true);

  return {
    ...initialProps,
    styles: (
      <>
        {initialProps.styles}
        {sheet.getStyleElement()}
        <style dangerouslySetInnerHTML={{ __html: style }} />
      </>
    ),
  };
};
