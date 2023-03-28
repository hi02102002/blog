import Link from 'next/link';

import colors from 'tailwindcss/colors';

import { Container, TextShadow } from '@/components';

const Footer = () => {
  return (
    <footer className="h-header flex items-center justify-center">
      <Container className="">
        <Link href="/">
          <TextShadow
            className="text-4xl font-bold"
            colorShadow={colors.blue[500]}
          >
            Hi.
          </TextShadow>
        </Link>
        <ul></ul>
      </Container>
    </footer>
  );
};

export default Footer;
