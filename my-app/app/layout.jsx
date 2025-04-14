// my-app/app/layout.jsx

import './globals.css';

export const metadata = {
  title: 'Dark Mode Demo',
  description: 'Conditionally render dark mode using pathname',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
