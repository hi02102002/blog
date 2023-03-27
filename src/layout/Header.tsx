import Link from 'next/link';

import { IconMenu2 } from '@tabler/icons-react';

import { Container } from '@/components';
import { NAVBAR } from '@/constants';

const Header = () => {
  return (
    <div className="flex items-center h-header bg-white border-b fixed top-0 left-0 right-0 z-50">
      <Container className="flex items-center justify-between">
        <Link href="/">
          <span className="text-4xl font-bold">Hi.</span>
        </Link>
        <nav className="md:block hidden">
          <ul className="flex items-center gap-4">
            {NAVBAR.map((el) => {
              return (
                <li key={el.href}>
                  <Link
                    href={el.href}
                    className="font-medium hover:opacity-80 transition-all"
                  >
                    {el.title}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
        <div className="md:hidden flex items-center justify-center ">
          <IconMenu2 className="text-inherit w-7 h-7 flex-shrink-0" />
        </div>
      </Container>
    </div>
  );
};

export default Header;
