import 'react-notion-x/src/styles.css';

import { ThemeProvider } from 'next-themes';
import type { AppProps } from 'next/app';
import NextNProgress from 'nextjs-progressbar';

import { Josefin_Sans } from '@next/font/google';
import 'katex/dist/katex.min.css';
import 'prismjs/themes/prism-tomorrow.css';
import colors from 'tailwindcss/colors';

import { NextPageWithLayout } from '@/types';

import '../styles/globals.css';
import '../styles/notion.css';

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

const josefinSans = Josefin_Sans({ subsets: ['latin'] });

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page);

  return (
    <>
      <style jsx global>{`
        :root {
          --font: ${josefinSans.style.fontFamily};
          --notion-font: ${josefinSans.style.fontFamily};
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
