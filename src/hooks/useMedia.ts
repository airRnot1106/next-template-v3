import { useMedia as useMediaLib } from 'use-media';

import { MD_WIDTH } from '@/constants/media';

export const useMedia = () => {
  const isDesktop = useMediaLib({ minWidth: `${MD_WIDTH}px` });
  return { isDesktop };
};
