import { useTheme } from 'next-themes';
import Link from 'next/link';
import { useRouter } from 'next/router';

import { IconMenu2, IconMoon, IconSun } from '@tabler/icons-react';

import { Container } from '@/components';
import { NAVBAR } from '@/constants';
import { clsxm } from '@/utils/clsxm';

const Header = () => {
  const { theme, setTheme } = useTheme();

  const router = useRouter();

  return (
    <div className="select-none flex items-center h-header text-text bg-white dark:bg-transparent dark:backdrop-blur-3xl fixed top-0 left-0 right-0 z-50 ">
      <Container className="flex items-center justify-between relative z-[1]">
        <Link href="/">
          <span className="text-4xl font-bold">Hi.</span>
        </Link>
        <div className="flex items-center gap-4">
          <nav className="md:block hidden">
            <ul className="flex items-center gap-4">
              {NAVBAR.map((el) => {
                return (
                  <li key={el.href}>
                    <Link
                      href={el.href}
                      className={clsxm(
                        'font-medium hover:opacity-80 transition-all',
                        {
                          'text-blue-500': el.href === router.pathname,
                        }
                      )}
                    >
                      {el.title}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>
          <div
            className="cursor-pointer"
            onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
          >
            {theme === 'light' ? <IconSun /> : <IconMoon />}
          </div>
          <div className="md:hidden flex items-center justify-center cursor-pointer ">
            <IconMenu2 className="text-inherit w-7 h-7 flex-shrink-0" />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Header;
