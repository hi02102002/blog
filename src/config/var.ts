import * as env from 'env-var';

export const API_TOKEN = env.get('NEXT_PUBLIC_NOTION_TOKEN').asString();

export const BLOG_ID = env.get('NEXT_PUBLIC_NOTION_BLOG_ID').asString();
