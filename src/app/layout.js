import { Inter } from 'next/font/google';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v14-appRouter';

import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'FrozenTrader',
  description:
    'A privacy-focused, easy-to-use quantitative research and trading platform. Medium to low frequency trading. Event-driven backtests on any historical data. Live trading with no code changes.', // 在这写你的网站简介，它不会被直接展示，但是会影响到搜索引擎爬虫排序，和搜索的结果里可能会展示
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <AppRouterCacheProvider>{children}</AppRouterCacheProvider>
        <SpeedInsights />
      </body>
    </html>
  );
}
