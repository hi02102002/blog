import client from '@/apis/client';
import { BLOG_ID } from '@/config/var';
import { Post } from '@/types';

export const getAllPost = async (): Promise<Post[]> => {
  return await client.get(`/v1/table/${BLOG_ID}`);
};

export const getBlocks = async (pageId: string) => {
  return await client.get(`/v1/page/${pageId}`);
};
