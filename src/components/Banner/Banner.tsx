import Image from 'next/image';
import { useRouter } from 'next/router';

import { Button, Container } from '@/components';

const Banner = () => {
  const router = useRouter();

  return (
    <section className="flex  grow items-center justify-center bg-neutral-100 py-5 dark:bg-[#282828]">
      <Container>
        <div className="flex flex-col items-center gap-4">
          <Image
            src="/me.png"
            alt="me"
            className="object-contain"
            width={100}
            height={100}
          />
          <h2 className="text-center text-4xl font-black">
            Hi, I&apos;m{' '}
            <span className="inline-block text-sky-500 "> Hoang Huy </span>
          </h2>
          <p className="text-center text-neutral-400">
            Passionate and creative front-end software engineer.
          </p>
          <Button
            onClick={() => {
              router.push('/about');
            }}
            className="mt-3"
            intents="primary"
          >
            More about me.
          </Button>
        </div>
      </Container>
    </section>
  );
};

export default Banner;
