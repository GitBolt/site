import React, { useMemo } from 'react';
import '@/styles/globals.scss';
import type { AppProps } from 'next/app';
import { Analytics } from '@vercel/analytics/react';
import { WalletProvider } from '@solana/wallet-adapter-react';
import { useWrappedReownAdapter } from '@jup-ag/jup-mobile-adapter';

const WalletConnectionProvider = function WalletConnectionProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  // Refer to https://reown.com/appkit
  const { reownAdapter, jupiterAdapter } = useWrappedReownAdapter({
    appKitOptions: {
      metadata: {
        name: '',
        description: '',
        url: '<YOUR_DOMAIN>', // origin must match your domain & subdomain
        icons: [
          // add icons here
        ],
      },
      projectId: '10e57e73a90e9d0da602a209e14b75f2',
      features: {
        analytics: false,
        socials: ['google', 'x', 'apple'],
        email: false,
      },
      enableWallets: false,
    },
  });

  const wallets = useMemo(
    () => [
      reownAdapter,
      jupiterAdapter,
      // add more wallets here
    ],
    [reownAdapter, jupiterAdapter],
  );

  return (
    <WalletProvider wallets={wallets} autoConnect>
      {children}
    </WalletProvider>
  );
};

const Site = function Site({ Component, pageProps }: AppProps) {
  return (
    <WalletConnectionProvider>
      <Analytics />
      <Component {...pageProps} />
    </WalletConnectionProvider>
  );
};

export default Site;
