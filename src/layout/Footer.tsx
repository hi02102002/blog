import Link from 'next/link';

import {
  IconBrandFacebook,
  IconBrandGithub,
  IconBrandInstagram,
} from '@tabler/icons-react';
import colors from 'tailwindcss/colors';

import { ButtonIcon, Container, TextShadow } from '@/components';

const Footer = () => {
  return (
    <footer className="flex items-center justify-center py-4">
      <Container>
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <Link href="/">
            <TextShadow
              className="text-4xl font-bold"
              colorShadow={colors.blue[500]}
            >
              Hi.
            </TextShadow>
          </Link>
          <ul className="flex items-center gap-4">
            <li>
              <Link href="https://github.com/hi02102002" target="_blank">
                <ButtonIcon Icon={IconBrandGithub} />
              </Link>
            </li>
            <li>
              <Link
                href="https://www.instagram.com/hiiiii_02102002/"
                target="_blank"
              >
                <ButtonIcon
                  className="text-indigo-500"
                  Icon={IconBrandInstagram}
                />
              </Link>
            </li>
            <li>
              <Link
                href="https://www.facebook.com/hiiiii.2102002"
                target="_blank"
              >
                <ButtonIcon
                  Icon={IconBrandFacebook}
                  className="text-blue-500"
                />
              </Link>
            </li>
          </ul>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
