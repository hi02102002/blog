import { Layout } from '@/layout';
import { NextPageWithLayout } from '@/types';

type Props = {
  hi?: string;
};

const About: NextPageWithLayout<Props> = () => {
  return <div>About</div>;
};

About.getLayout = (page) => <Layout>{page}</Layout>;

export default About;
