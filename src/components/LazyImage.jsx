import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';

import 'react-lazy-load-image-component/src/effects/blur.css';

export default function LazyImage({ src, alt, className }) {
  return (
    <LazyLoadImage
      src={src}
      alt={alt}
      // effect="blur" // Enable the blur effect
      className={` ${className}`}
    />
  );
}
