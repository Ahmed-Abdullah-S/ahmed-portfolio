import { Inter } from 'next/font/google';
import { Providers } from '../providers';
import { Layout } from '@/components/Layout';

const inter = Inter({ subsets: ['latin'] });

export default function AppLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={inter.className}>
      <Providers>
        <Layout>{children}</Layout>
      </Providers>
    </div>
  );
}
