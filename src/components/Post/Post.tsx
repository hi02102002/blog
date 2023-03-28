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
      <div className="flex md:items-center gap-4 p-4 rounded hover:bg-neutral-100 dark:hover:bg-[#3f3f3f] transition-[background-color] duration-300 cursor-pointer group md:flex-row flex-col border-2 border-transparent border-dashed hover:border-neutral-400">
        {post.thumbnails && post.thumbnails[0] && (
          <div className="md:w-44 w-full shadow-sm  rounded shrink-0 overflow-hidden">
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
          <h4 className="text-lg font-semibold group-hover:underline transition mb-3">
            {post.title}
          </h4>
          <div className='text-neutral-600 dark:text-neutral-400'>
          {post.description && (
            <p className=" line-clamp-3 mb-2">
              {post.description}
            </p>
          )}
          <div className="flex items-center gap-4 text-sm ">
            <div className="flex items-center gap-1 leading-none">
              <IconCalendar className="w-4 h-4 flex items-center justify-center text-inherit" />
              <span className="leading-none text-inherit">
                {convertDate(post.date)}
              </span>
            </div>
            <div className="flex items-center gap-1 leading-none">
              <IconClock className="w-4 h-4 flex items-center justify-center text-inherit" />
              <span className="leading-none text-inherit">
                {post.read_time}
              </span>
            </div>
          </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Post;
