import 'react-notion-x/src/styles.css';

import { ThemeProvider } from 'next-themes';
import type { AppProps } from 'next/app';
import NextNProgress from 'nextjs-progressbar';

import { Roboto } from '@next/font/google';
import colors from 'tailwindcss/colors';

import { NextPageWithLayout } from '@/types';

import '../styles/globals.css';
import '../styles/notion.css';
import '../styles/prism.css';

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

const roboto = Roboto({ weight: ['100', '300', '400', '500', '700', '900'] });

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page);

  return (
    <>
      <style jsx global>{`
        :root {
          --font: ${roboto.style.fontFamily};
          --notion-font: ${roboto.style.fontFamily};
          --notion-header-height: 60px;
        }
      `}</style>
      <NextNProgress
        color={colors.stone[800]}
        height={2}
        options={{ showSpinner: false }}
      />
      <ThemeProvider attribute="class">
        {getLayout(<Component {...pageProps} />)}
      </ThemeProvider>
    </>
  );
}
