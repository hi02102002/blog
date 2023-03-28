import { GetStaticProps } from 'next';



import { Container, TextShadow } from '@/components';
import Post from '@/components/Post';
import { Layout } from '@/layout';
import { getPublishPost } from '@/libs/notion';
import { NextPageWithLayout, Post as TPost } from '@/types';

type Props = {
  posts: TPost[];
};

const Blog: NextPageWithLayout<Props> = ({ posts }) => {
  return (
    <div className="py-8">
      <Container>
        <h2 className="text-2xl font-bold ">
          <TextShadow right={3}>Blog</TextShadow>
        </h2>
        <ul className="space-y-4 mt-6">
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