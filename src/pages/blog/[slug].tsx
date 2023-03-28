import { NotionRenderer } from 'react-notion-x';

import { GetStaticPaths, GetStaticProps } from 'next';
import { useTheme } from 'next-themes';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';

import { NotionAPI } from 'notion-client';
import slugify from 'slugify';

import { Container, Tag } from '@/components';
import { Layout } from '@/layout';
import { getAllPost } from '@/libs/notion';
import { NextPageWithLayout, Post } from '@/types';
import { convertDate } from '@/utils/convertDate';

const Code = dynamic(() =>
  import('react-notion-x/build/third-party/code').then((m) => m.Code)
);

const Equation = dynamic(() =>
  import('react-notion-x/build/third-party/equation').then((m) => m.Equation)
);
const Pdf = dynamic(
  () => import('react-notion-x/build/third-party/pdf').then((m) => m.Pdf),
  {
    ssr: false,
  }
);
const Modal = dynamic(
  () => import('react-notion-x/build/third-party/modal').then((m) => m.Modal),
  {
    ssr: false,
  }
);

type Props = {
  blocks: any;
  post: Post;
};

const BlogDetail: NextPageWithLayout<Props> = ({ blocks, post }) => {
  const router = useRouter();
  const { theme } = useTheme();

  // If the page is not yet generated, this will be displayed
  // initially until getStaticProps() finishes running
  if (router.isFallback) {
    return <div>Loading...</div>;
  }
  return (
    <>
      <div className="py-8">
        <div>
          <NotionRenderer
            recordMap={blocks}
            components={{
              Code,
              Equation,
              nextLink: Link,
              nextImage: Image,
              Modal,
              Pdf,
            }}
            fullPage
            pageAside={false}
            darkMode={theme === 'dark'}
            previewImages
            pageTitle={
              <div>
                <h1 className="text-4xl">{post.title}</h1>
                <div className="space-y-2">
                  <div className="text-base flex items-center gap-4">
                    {post.author && (
                      <span className="font-bold">Author: {post.author}</span>
                    )}
                    <span className="text-sm">{convertDate(post.date)}</span>
                  </div>
                  <div className="flex items-center gap-4 ">
                    {post.tags?.map((tag) => (
                      <Tag className="text-base" key={tag}>
                        {tag}
                      </Tag>
                    ))}
                  </div>
                </div>
              </div>
            }
            pageCover={
              <Container>
                <div className="w-full mb-5">
                  {post.thumbnails && post.thumbnails[0] && (
                    <div className="  rounded shrink-0 overflow-hidden w-full">
                      <div className="aspect-w-16 aspect-h-9 w-full">
                        <Image
                          src={post.thumbnails[0].url}
                          alt={post.title}
                          fill
                          placeholder="blur"
                          blurDataURL={post.thumbnails[0].url}
                          className="object-cover"
                          draggable={false}
                        />
                      </div>
                    </div>
                  )}
                </div>
              </Container>
            }
          />
        </div>
      </div>
    </>
  );
};

BlogDetail.getLayout = (page) => <Layout>{page}</Layout>;

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const slug = params?.slug as string;
  const posts = await getAllPost();

  const post = posts.find((t) => slugify(t.title.toLowerCase()) === slug);

  if (!post?.id) {
    return {
      notFound: true,
    };
  }

  const notion = new NotionAPI();

  const blocks = await notion.getPage(post.id);
  return {
    props: {
      blocks,
      post,
    },
    revalidate: 10,
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const posts = await getAllPost();
  return {
    paths: posts.map((post) => `/blog/${slugify(post.title.toLowerCase())}`),
    fallback: true,
  };
};

export default BlogDetail;
