'use client';

import clsx from 'clsx';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export function NavItem({
  href,
  children
}) {
  const pathname = usePathname();

  return (
    <Link
      href={href}
      className={clsx(
        `flex justify-center lg:justify-start text-base items-center leading-6 gap-2 rounded-md mx-2 lg:mx-0 lg:px-3 py-2 text-${ pathname === href ? 'white' : '[#DFBDB6]'}  transition-all hover:text-white  dark:text-gray-50 dark:hover:text-gray-50`,
        {
          'bg-[#8B2613] dark:bg-gray-800': pathname === href
        }
      )}
    >
      {children}
    </Link>
  );
}