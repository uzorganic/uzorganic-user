import { client } from '@/api/reactQuery';
import { QueryClientProvider } from '@tanstack/react-query';

import { AppProps } from 'next/app';

import '@/styles/fonts.css';
import '@/styles/globals.css';
import '@/styles/value.css';

import { ContentLayout } from '@/layouts/ContentLayout';
import { antdThemeConfig } from '@/theme/config';
import { ConfigProvider } from 'antd';
import koKR from 'antd/locale/ko_KR';

type AppPropsWithLayout = AppProps & {
  Component: {
    layout: (page: React.ReactNode) => JSX.Element;
    layoutFillColor?: string;
  };
};

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  return (
    <>
      <ConfigProvider locale={koKR} theme={antdThemeConfig}>
        <QueryClientProvider client={client}>
          {Component.layout ? (
            Component.layout(<Component {...pageProps} />)
          ) : (
            <ContentLayout fillColor={Component.layoutFillColor}>
              {<Component {...pageProps} />}
            </ContentLayout>
          )}
        </QueryClientProvider>
      </ConfigProvider>
    </>
  );
}
