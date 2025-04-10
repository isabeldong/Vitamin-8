'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';
import './globals.css';

function Home() {
  const pathname = usePathname();

  const isDarkMode = pathname === '/dark-mode';
  const isLightMode = pathname === '/light-mode';

  return (
    <div
      className={clsx('container', {
        'dark-mode': isDarkMode,
        'light-mode': isLightMode,
      })}
    >
      <h1>
        {isDarkMode
          ? 'Dark Mode Page'
          : isLightMode
          ? 'Light Mode Page'
          : 'Home Page'}
      </h1>

      <Link href="/dark-mode">
        <button>Dark-Mode</button>
      </Link>
      <Link href="/light-mode">
        <button>Light-Mode</button>
      </Link>
    </div>
  );
}

export default Home;
