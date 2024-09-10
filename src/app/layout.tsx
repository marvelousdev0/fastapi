import { geistMono, spaceGrotesk } from '@/app/ui/fonts';
import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'FastAPI',
  description:
    'Blazing fast, modern API search with Next.js, Hono, Cloudflare Workers, and Vercel.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${spaceGrotesk.className} ${geistMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
