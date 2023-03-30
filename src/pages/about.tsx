import Image from 'next/image';

import colors from 'tailwindcss/colors';

import { SectionPage, SectionSkills, TextShadow } from '@/components';
import { Layout } from '@/layout';
import { NextPageWithLayout } from '@/types';

type Props = {
  hi?: string;
};

const About: NextPageWithLayout<Props> = () => {
  return (
    <SectionPage
      title="About me"
      textShadowProps={{ colorShadow: colors.indigo[600] }}
      className="select-none"
      wrapperClassName="flex-col gap-4 flex"
    >
      <div>
        <figure className="mb-4 flex flex-col items-center gap-2">
          <div className="aspect-w-[2.5] aspect-h-1 w-full overflow-hidden rounded">
            <Image
              src="/banner_about.jpg"
              alt="Hoang Huy"
              fill
              blurDataURL="/banner_about.jpg"
              placeholder="blur"
              style={{
                objectFit: 'cover',
                objectPosition: 'center',
              }}
              draggable={false}
            />
          </div>
          <figcaption className="text-sm italic">
            That&apos;s me. When I was 18 years old.
          </figcaption>
        </figure>
        <div>
          <p>
            Hi, I&#39;m{' '}
            <TextShadow className="font-semibold">Hoang Huy</TextShadow>. Now
            I&#39;m a third-year student of the{' '}
            <TextShadow
              className=" font-semibold"
              colorShadow={colors.sky[600]}
            >
              Ho Chi Minh City University of Transport
            </TextShadow>
            . My major is{' '}
            <TextShadow className="font-semibold">
              Information Technology.
            </TextShadow>
            <br />
            I&#39;m interested in build a awesome website. I have one year self
            taught about web development.I currently working on ReactJs. I also
            like Vue. So i&#39;m learning Vue to improve my skill about Front
            end tech.
          </p>
        </div>
      </div>
      <div>
        <SectionSkills />
      </div>
    </SectionPage>
  );
};

About.getLayout = (page) => <Layout>{page}</Layout>;

export default About;
