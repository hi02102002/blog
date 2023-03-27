import { NotionRenderer } from 'react-notion-x';

import { GetServerSideProps } from 'next';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';

import { NotionAPI } from 'notion-client';
import slugify from 'slugify';

import { Container } from '@/components';
import { Layout } from '@/layout';
import { getAllPost } from '@/libs/notion';
import { NextPageWithLayout, Post } from '@/types';

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

  // If the page is not yet generated, this will be displayed
  // initially until getStaticProps() finishes running
  if (router.isFallback) {
    return <div>Loading...</div>;
  }
  return (
    <>
      <style jsx global>{`
        .notion-header {
          display: none;
        }

        .notion-page {
          margin: 0;
        }

        .notion-page-no-cover {
          margin-top: 0 !important;
        }

        .notion-page-has-cover.notion-page-no-icon {
          padding-top: 0;
        }

        .notion-full-page {
          padding-bottom: 0;
        }

        .notion-code-copy {
          right: 2em;
        }

        .notion-code-copy-button {
          padding: 0;
          width: 32px;
          height: 32px;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .notion-code-copy-button svg {
          width: 1rem;
          height: 1rem;
        }

        pre[class*='language-'] {
          padding: 3em 2em;
        }
      `}</style>
      <div className="py-8">
        <div>
          <NotionRenderer
            recordMap={blocks}
            components={{
              Code,
              Equation,
              nextLink: Link,
              Modal,
              Pdf,
            }}
            fullPage
            pageTitle={
              <div>
                <h1 className="text-4xl">{post.title}</h1>
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

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
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
  };
};

export default BlogDetail;
