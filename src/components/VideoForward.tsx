import { Ref, forwardRef } from 'react';

type Props = {
  src: string;
  type: string;
  width: string;
};

const VideoForward = forwardRef(function VideoForward(
  { src, type, width }: Props,
  ref: Ref<HTMLVideoElement>
) {
  return (
    <video width={width} ref={ref}>
      <source src={src} type={type} />
      <track kind='captions' />
    </video>
  );
});

export default VideoForward;
