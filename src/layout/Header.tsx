import { useEffect, useRef, useState } from 'react';

import { useTheme } from 'next-themes';
import Link from 'next/link';
import { useRouter } from 'next/router';

import { IconMenu2, IconMoon, IconSun, IconX } from '@tabler/icons-react';
import colors from 'tailwindcss/colors';

import { ButtonIcon, Container, TextShadow } from '@/components';
import { NAVBAR } from '@/constants';
import useClickOutside from '@/hooks/useClickOutSize';
import { useSize } from '@/hooks/useSize';
import { clsxm } from '@/utils/clsxm';

const Header = () => {
  const { theme, setTheme } = useTheme();

  const headerRef = useRef<HTMLElement | null>(null);

  const [isOpen, setIsOpen] = useState(false);

  const router = useRouter();

  const size = useSize();

  useClickOutside(headerRef, (e) => {
    e.stopPropagation();
    setIsOpen(false);
  });

  useEffect(() => {
    const handelScroll = () => {
      if (!isOpen) {
        if (window.scrollY > 100) {
          headerRef.current?.classList.add(
            'border-neutral-50',
            'dark:border-neutral-600'
          );
        } else {
          headerRef.current?.classList.remove(
            'border-neutral-50',
            'dark:border-neutral-600'
          );
        }
      } else {
        headerRef.current?.classList.remove(
          'border-neutral-50',
          'dark:border-neutral-600'
        );
      }
    };

    handelScroll();

    window.addEventListener('scroll', handelScroll);

    return () => window.removeEventListener('scroll', handelScroll);
  }, [isOpen]);

  useEffect(() => {
    if (size.width >= 768 && isOpen) {
      console.log('call');
      setIsOpen(false);
    }
  }, [isOpen, size.width]);

  useEffect(() => {
    setIsOpen(false);
  }, [router]);

  return (
    <header
      ref={headerRef}
      className="fixed inset-x-0 top-0 z-50 flex  h-header select-none items-center border-b border-transparent bg-bg  text-text backdrop-blur-sm"
    >
      <Container className="relative z-[1] flex items-center justify-between ">
        <Link href="/">
          <TextShadow
            className="text-4xl font-bold"
            colorShadow={colors.blue[500]}
          >
            Hi.
          </TextShadow>
        </Link>
        <div className="flex items-center gap-4">
          <nav
            className={clsxm(
              'md:relative fixed top-header w-full md:w-[unset] left-0 right-0 md:top-[unset] md:left-[unset] md:right-[unset] bg-bg md:p-0 p-0 md:h-[unset] overflow-hidden transition-[height] h-0 flex items-center justify-center md:border-0 border-b border-transparent',
              {
                'h-[176px] border-neutral-50 dark:border-neutral-600 ': isOpen,
              }
            )}
          >
            <ul className="flex flex-col items-center gap-4 md:flex-row">
              {NAVBAR.map((el) => {
                return (
                  <li key={el.href}>
                    <Link
                      href={el.href}
                      className={clsxm(
                        'font-medium hover:opacity-80 transition-all'
                      )}
                      onClick={() => {
                        setIsOpen(false);
                      }}
                    >
                      {el.title}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>
          <ButtonIcon
            onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
            Icon={theme === 'light' ? IconSun : IconMoon}
            className="text-yellow-600"
          />
          <div
            className="relative flex h-8 w-8 cursor-pointer items-center justify-center md:hidden"
            onClick={() => {
              setIsOpen(!isOpen);
            }}
          >
            <IconMenu2
              className={clsxm(
                'text-inherit w-7 h-7 flex-shrink-0 absolute  transition-all',
                {
                  'opacity-0': isOpen,
                }
              )}
            />
            <IconX
              className={clsxm(
                'text-inherit w-7 h-7 flex-shrink-0 absolute opacity-0 transition-all ',
                {
                  'opacity-100 rotate-90': isOpen,
                }
              )}
            />
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;
