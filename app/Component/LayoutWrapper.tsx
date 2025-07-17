'use client';

import { usePathname } from 'next/navigation';
import NavBarPages from './NavBarPages';

export default function LayoutWrapper({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const showNavBarPages = ['/About', '/Contacts', '/Products'].includes(pathname);

  return (
    <>
      {showNavBarPages && <NavBarPages />}
      {children}
    </>
  );
}
