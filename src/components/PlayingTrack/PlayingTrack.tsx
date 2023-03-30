import Image from 'next/image';

import { IconBrandSpotify } from '@tabler/icons-react';
import useSwr from 'swr';

import { getNowPlaying } from '@/libs/spotify';

const PlayingTrack = () => {
  const { data, isLoading } = useSwr('/current-playing', getNowPlaying);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex w-full items-center gap-2">
      {data ? (
        <>
          <div className="relative flex w-max animate-spin items-center justify-center rounded-full shadow">
            <Image
              src={data?.item?.album.images[0].url as string}
              width={36}
              height={36}
              alt={data?.item?.name as string}
              className="rounded-full border"
            />
            <div className="h-3 w-3 rounded-full border bg-bg abs-center "></div>
          </div>
          <div className="relative h-9 w-full overflow-hidden">
            <div className="absolute flex h-full w-[200%]  items-center  overflow-hidden whitespace-nowrap font-medium">
              <span className="inline-block w-[30%] animate-marquee text-sm">
                {data?.item?.name}
              </span>
              <span className="inline-block w-[30%] animate-marquee text-sm">
                {data?.item?.name}
              </span>
            </div>
            <div className="absolute left-0 h-full w-6 bg-gradient-to-r from-bg"></div>
            <div className="absolute right-0 h-full w-6 bg-gradient-to-l from-bg"></div>
          </div>
        </>
      ) : (
        <>
          <IconBrandSpotify />
          <span className="text-sm">Not playing</span>
        </>
      )}
    </div>
  );
};

export default PlayingTrack;
