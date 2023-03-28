import { Layout } from '@/layout';
import { NextPageWithLayout } from '@/types';

type Props = {
  hi?: string;
};

const Projects: NextPageWithLayout<Props> = () => {
  return <div>Projects</div>;
};

Projects.getLayout = (page) => <Layout>{page}</Layout>;

export default Projects;
