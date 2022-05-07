/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import '../src/globals.scss';
import '../src/app.scss';

import 'ag-grid-community/dist/styles/ag-grid.css'; // Core grid CSS, always needed
import 'ag-grid-community/dist/styles/ag-theme-material.css'; // Optional theme CSS
import type { AppProps } from 'next/app';

export default function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
