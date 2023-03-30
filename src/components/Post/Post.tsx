import Image from 'next/image';
import Link from 'next/link';

import { IconCalendar, IconClock } from '@tabler/icons-react';
import slugify from 'slugify';

import { Post as TPost } from '@/types';
import { convertDate } from '@/utils/convertDate';

type Props = {
  post: TPost;
};

const Post = ({ post }: Props) => {
  return (
    <Link href={`/blog/${slugify(post.title.toLowerCase())}`}>
      <article>
        <div className="group flex cursor-pointer flex-col gap-4 rounded border-2 border-dashed border-transparent p-4 transition-[background-color] duration-300 hover:border-neutral-400 hover:bg-neutral-100 dark:hover:bg-[#3f3f3f] md:flex-row md:items-center">
          {post.thumbnails && post.thumbnails[0] && (
            <div className="w-full shrink-0 overflow-hidden  rounded shadow-sm md:w-44">
              <div className="aspect-w-5 aspect-h-3">
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
          <div>
            <h4 className="mb-3 text-lg font-semibold transition group-hover:underline">
              {post.title}
            </h4>
            <div className="text-neutral-600 dark:text-neutral-400">
              {post.description && (
                <p className=" mb-2 line-clamp-3">{post.description}</p>
              )}
              <div className="flex items-center gap-4 text-sm ">
                <div className="flex items-center gap-1 leading-none">
                  <IconCalendar className="flex h-4 w-4 items-center justify-center text-inherit" />
                  <span className="leading-none text-inherit">
                    {convertDate(post.date)}
                  </span>
                </div>
                <div className="flex items-center gap-1 leading-none">
                  <IconClock className="flex h-4 w-4 items-center justify-center text-inherit" />
                  <span className="leading-none text-inherit">
                    {post.read_time}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </article>
    </Link>
  );
};

export default Post;
