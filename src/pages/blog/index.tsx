import { GetStaticProps } from 'next';

import { SectionPage } from '@/components';
import Post from '@/components/Post';
import { Layout } from '@/layout';
import { getPublishPost } from '@/libs/notion';
import { NextPageWithLayout, Post as TPost } from '@/types';

type Props = {
  posts: TPost[];
};

const Blog: NextPageWithLayout<Props> = ({ posts }) => {
  return (
    <SectionPage title="Blog">
      <ul className="space-y-4">
        {posts.map((post) => {
          return (
            <li key={post.id}>
              <Post post={post} />
            </li>
          );
        })}
      </ul>
    </SectionPage>
  );
};

Blog.getLayout = (page) => {
  return <Layout>{page}</Layout>;
};

export const getStaticProps: GetStaticProps = async () => {
  const posts = await getPublishPost();

  return {
    props: {
      posts,
    },
    revalidate: 10,
  };
};

export default Blog;
