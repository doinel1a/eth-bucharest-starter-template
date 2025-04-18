import '../styles/globals.css';
import '../styles/globals.scss';
import '@coinbase/onchainkit/styles.css';

import React from 'react';

import type { Metadata, Viewport } from 'next';

import config from '_config';
import { Analytics } from '@vercel/analytics/react';

import Footer from '@/components/footer';
import GithubCorner from '@/components/github-corner';
import Navbar from '@/components/navbar';
import RootProvider from '@/components/providers/root';
import { Toaster } from '@/components/ui/sonner';

export const metadata: Metadata = {
  title: config.metadata.title,
  description: config.metadata.description,
  keywords: config.metadata.keywords,
  icons: '/favicon.svg',
  manifest: '/app.webmanifest'
};

export const viewport: Viewport = {
  themeColor: '#000'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en' suppressHydrationWarning>
      <body>
        <RootProvider>
          <div className='grid min-h-[100dvh] grid-rows-[auto_1fr_auto]'>
            <Navbar />
            {children}
            <Footer />

            <GithubCorner
              title='Get started on GitHub'
              url='https://github.com/doinel1a/next-ts-web3-evm'
            />
          </div>

          <Analytics />
          <Toaster richColors closeButton />
        </RootProvider>
      </body>
    </html>
  );
}
