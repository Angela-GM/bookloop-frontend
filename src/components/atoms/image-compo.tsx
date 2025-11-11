"use client";

import { imageLoader } from "@/src/loaders/image.loader";
import Image from "next/image";

interface Props {
  routeImage: string;
  altText?: string;
  width: number;
  height: number;
  classAlternative?: string;
  unoptimized?: boolean;
}

export const ImageCompo = ({
  routeImage,
  altText,
  width,
  height,
  classAlternative,
  unoptimized,
}: Props) => {
  // ✅ Si es URL blob, no usar loader
  const isBlob = routeImage.startsWith("blob:");

  return (
    <Image
      loader={isBlob ? undefined : imageLoader}
      className={`${classAlternative}`}
      src={`${routeImage}`}
      alt={altText || ""}
      width={width}
      height={height}
      priority
      unoptimized={unoptimized || isBlob}
    />
  );
};
