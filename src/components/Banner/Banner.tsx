import Image from 'next/image';

import { Button, Container } from '@/components';

const Banner = () => {
  return (
    <section className="min-h-[calc(100vh_-_60px)] bg-neutral-100 py-5 flex items-center justify-center">
      <Container>
        <div className="flex flex-col items-center gap-4">
          <Image
            src="/me.png"
            alt="me"
            className="object-contain"
            width={100}
            height={100}
          />
          <h2 className="text-4xl font-black text-center">
            Hi, I&apos;m{' '}
            <span className="text-sky-500 inline-block "> Hoang Huy </span>
          </h2>
          <p className="text-neutral-400 text-center">
            Passionate and creative front-end software engineer.
          </p>
          <Button className="mt-3">More about me.</Button>
        </div>
      </Container>
    </section>
  );
};

export default Banner;
