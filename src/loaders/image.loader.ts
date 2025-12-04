interface ImageLoaderProps {
  src: any;
  width: any;
}

export const imageLoader = ({ src, width }: ImageLoaderProps) => {
  return `${src}?w=${width}`;
};
