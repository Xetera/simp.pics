import React from "react";
import Link from "next/link";
import Masonry from "react-masonry-component";
import Image from "next/image";
import Skeleton from "react-loading-skeleton";
import { useBoolean, useWindowSize } from "react-use";

const THUMBNAIL_WIDTH = 300;

function LoadingImage({ image }) {
  const [loaded, setLoaded] = useBoolean(false);
  const { width } = useWindowSize();
  const imageWidth = width < 1000 ? width : THUMBNAIL_WIDTH;
  return (
    <Link href={`/image/${image.slug}`} key={image.slug}>
      <Image
        width={imageWidth}
        height={(imageWidth / image.width) * image.height}
        src={image.url}
        onLoad={() => setLoaded(true)}
      />
      {/* {!loaded && (
          <Skeleton
            width={THUMBNAIL_WIDTH}
            height={(THUMBNAIL_WIDTH / image.width) * image.height}
          />
        )} */}
    </Link>
  );
}

export function Gallery({ images }: any) {
  return (
    <Masonry
      className={"my-gallery-class"} // default ''
      elementType={"ul"} // default 'div'
      disableImagesLoaded={false} // default false
      updateOnEachImageLoad={false} // default false and works only if disableImagesLoaded is false
      // imagesLoadedOptions={imagesLoadedOptions} // default {}
    >
      {images.map((image) => (
        <LoadingImage image={image} key={image.slug} />
      ))}
    </Masonry>
  );
}
