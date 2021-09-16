// ---Dependencys
import { ReactElement } from 'react';
import Image from 'next/image';
// ---Others
import { genericAlt } from 'Others/globalData';

// ----------------------------------------COMPONENT----------------------------------------
export default function Section1Images({ isMovil } : { isMovil: boolean }): ReactElement {
  return (
    <div>
      <div className="image-front">
        <Image
          priority
          src="/images/home/home-sec1-front.svg" // Route of the image file
          height={isMovil ? 437 * 0.7 : 437}
          width={isMovil ? 413 * 0.7 : 413}
          alt={genericAlt}
        />
      </div>
      <div className="image-back-top">
        <img
          src="/images/home/home-sec1-top.svg" // Route of the image file
          height={isMovil ? 382 * 0.7 : 382}
          width={isMovil ? 405 * 0.7 : 405}
          alt={genericAlt}
        />
      </div>
      <div className="image-back-bottom">
        <img
          src="/images/home/home-sec1-bottom.svg" // Route of the image file
          height={isMovil ? 190 * 0.6 : 190}
          width={isMovil ? 325 * 0.6 : 325}
          alt={genericAlt}
        />
      </div>
    </div>
  );
}
