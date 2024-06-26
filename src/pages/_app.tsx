import { ProgressBar } from '@/components/ProgressBar/ProgressBar'
import { DefaultLayout } from '@/layouts/DefaultLayout'
import { css, Global } from '@emotion/react'
import { NextComponentType, NextPageContext } from 'next'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import { ReactNode } from 'react'
import '../styles/globals.css'

type NextLayoutComponentType<P = {}> = NextComponentType<
  NextPageContext,
  any,
  P
> & {
  getLayout?: (page: ReactNode) => ReactNode
}

type AppLayoutProps<P = {}> = AppProps & {
  Component: NextLayoutComponentType
}

export default function App({ Component, pageProps }: AppLayoutProps) {
  const getLayout =
    Component.getLayout ||
    ((page: ReactNode) => <DefaultLayout>{page}</DefaultLayout>)

  return (
    <>
      <Head>
        <title>PSC</title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@100;200;300;400;500;600;700&family=Inter:wght@100..900&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Global
        styles={css`
          #__next {
            margin-left: auto;
            margin-right: auto;
          }

          @font-face {
            font-family: 'Georgia';
            font-weight: 300 900;
            font-style: normal;
            font-display: swap;
            src: url('/fonts/georgia.ttf');
          }

          @font-face {
            font-family: 'Space Mono';
            font-weight: 300 900;
            font-style: normal;
            font-display: swap;
            src: url('/fonts/SpaceMono-Regular.ttf');
          }

          @font-face {
            font-family: 'Andale Mono';
            font-weight: 300 900;
            font-style: normal;
            font-display: swap;
            src: url('/fonts/AndaleMono.ttf');
          }

          body {
            margin: 0;
            background-color: black;
            color: white;

            font-family: 'Space Mono', monospace;
          }

          h1 {
            font-family: 'Georgia', sans-serif;
          }

          h1,
          h2,
          h3,
          h4,
          h5,
          h6,
          p {
            margin: 0;
            padding: 0;
            word-break: keep-all;
          }
        `}
      />
      <ProgressBar />
      {getLayout(<Component {...pageProps} />)}
    </>
  )
}
