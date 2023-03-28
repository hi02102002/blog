import { ReactElement, ReactNode } from 'react';

import { NextPage } from 'next';

export type NextPageWithLayout<P = Record<string, never>, IP = P> = NextPage<
  P,
  IP
> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

export type Post = {
  id: string;
  slug: string;
  title: string;
  date: string;
  tags?: string[];
  thumbnails?: Array<Thumbnail>;
  description?: string;
  read_time: string;
  author?: string;
};

type Thumbnail = {
  name: string;
  url: string;
  rawUrl: string;
};
