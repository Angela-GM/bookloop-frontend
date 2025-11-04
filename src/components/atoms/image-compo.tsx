"use client";

import { imageLoader } from "@/src/loaders/image.loader";
import Image from "next/image";

interface Props {
  routeImage: string;
  altText?: string;
  width: number;
  height: number;
  classAlternative?: string;
}

export const ImageCompo = ({
  routeImage,
  altText,
  width,
  height,
  classAlternative,
}: Props) => {
  return (
    <Image
      loader={imageLoader}
      className={`${classAlternative}`}
      src={`${routeImage}`}
      alt={altText || ""}
      width={width}
      height={height}
      priority
    />
  );
};
