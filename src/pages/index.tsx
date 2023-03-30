import { Banner } from '@/components';
import { Layout } from '@/layout';
import { NextPageWithLayout } from '@/types';

const Home: NextPageWithLayout = () => {
  return (
    <div className="flex flex-1 flex-col">
      <Banner />
    </div>
  );
};

Home.getLayout = (page) => {
  return <Layout wrapperClassName="flex flex-col">{page}</Layout>;
};

export default Home;
