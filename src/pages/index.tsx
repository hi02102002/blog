import { Banner } from '@/components';
import { Layout } from '@/layout';
import { NextPageWithLayout } from '@/types';

const Home: NextPageWithLayout = () => {
  return (
    <div>
      <Banner />
    </div>
  );
};

Home.getLayout = (page) => {
  return <Layout>{page}</Layout>;
};

export default Home;
