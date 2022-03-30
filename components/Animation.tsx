import React from 'react';
import Lottie from 'react-lottie';

type Props = {
  json: any,
  height: number | string,
  width: number | string,
};

export const Animation = function Animation({ json, height, width }: Props) {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: json,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };
  return (
    <div>
      <Lottie isClickToPauseDisabled options={defaultOptions} height={height} width={width} />
    </div>
  );
};
