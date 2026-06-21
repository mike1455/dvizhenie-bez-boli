import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Движение без боли',
  description: 'Простые объяснения, упражнения и современные подходы к лечению боли.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ru">
      <body>{children}</body>
    </html>
  );
}
