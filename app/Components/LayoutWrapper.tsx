'use client';

import { usePathname } from 'next/navigation';
/*import Navbar from './Navbar';*/

export default function LayoutWrapper({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  const showNavBarPages = ['/', '/About', '/Contacts', '/Products','/Solutions', '/services'].includes(pathname);

  return (
    <>
      {showNavBarPages}
      {children}
    </>
  );
}
