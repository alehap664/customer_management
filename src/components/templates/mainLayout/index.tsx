import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import { ReactNode } from 'react';

interface MainLayoutProps {
  children: ReactNode;
  title?: string;
}

const MainLayout: NextPage<MainLayoutProps> = ({ children, title }) => {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <header>
        <nav>
          <Link href="/">
            <a>Home</a>
          </Link>{' '}
          |{' '}
          <Link href="/createCustomer">
            <a>Thêm khách hàng</a>
          </Link>{' '}
          |{' '}
        </nav>
      </header>
      {children}
      <footer>
        <hr />
        <span>I'm here to stay (Footer)</span>
      </footer>
    </div>
  );
};

export default MainLayout;
