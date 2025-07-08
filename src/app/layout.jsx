// src/app/layout.jsx
import './globals.css';
import 'locomotive-scroll/dist/locomotive-scroll.css';
import { Inter } from 'next/font/google'; // Example font import

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' }); // Example font usage




export const metadata = {
  title: 'Your Company - Cybersecurity Services',
  description: 'Comprehensive cybersecurity services for your business.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable}`}>
      <body>
 
        {children}
      </body>
    </html>
  );
}