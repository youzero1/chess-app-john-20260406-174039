import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Chess App',
  description: 'A beautiful chess game interface',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-wooden-bg flex items-center justify-center p-4">
        {children}
      </body>
    </html>
  );
}