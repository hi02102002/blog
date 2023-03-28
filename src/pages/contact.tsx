import { Layout } from '@/layout';
import { NextPageWithLayout } from '@/types';

type Props = {
  hi?: string;
};

const Contact: NextPageWithLayout<Props> = () => {
  return <div>Contact</div>;
};

Contact.getLayout = (page) => <Layout>{page}</Layout>;

export default Contact;
