import { GetServerSideProps } from 'next';

import { Container } from '@/components';
import Post from '@/components/Post';
import { Layout } from '@/layout';
import { getAllPost } from '@/libs/notion';
import { NextPageWithLayout, Post as TPost } from '@/types';

type Props = {
  posts: TPost[];
};

const Blog: NextPageWithLayout<Props> = ({ posts }) => {
  return (
    <div className="py-8">
      <Container>
        <h2 className="text-2xl font-bold">Blog</h2>
        <ul className="space-y-4 mt-8">
          {posts.map((post) => {
            return (
              <li key={post.id}>
                <Post post={post} />
              </li>
            );
          })}
        </ul>
      </Container>
    </div>
  );
};

Blog.getLayout = (page) => {
  return <Layout>{page}</Layout>;
};

export const getServerSideProps: GetServerSideProps = async () => {
  const posts = await getAllPost();

  return {
    props: {
      posts,
    },
  };
};

export default Blog;
