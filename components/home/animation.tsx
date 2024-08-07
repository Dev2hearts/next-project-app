import React from 'react';
import Lottie from 'react-lottie-player';

import lottieJson from '@/public/animation_lmka1e89.json';

import dynamic from 'next/dynamic';

export default function Animation() {
  const Lottie = dynamic(() => import('react-lottie-player'), {
    ssr: false,
  });
  return <Lottie loop animationData={lottieJson} play />;
}
