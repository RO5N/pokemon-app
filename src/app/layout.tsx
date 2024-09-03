import { Inter } from 'next/font/google';
import './globals.css';
import Appbar from './appbar';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <Appbar />
        <main>
        {children}
        </main>
      </body>
    </html>
  );
}
