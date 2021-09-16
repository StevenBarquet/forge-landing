// ---Dependencys
import { ReactElement } from 'react';
import Image from 'next/image';
// ---Others
import { genericAlt } from 'Others/globalData';

// ----------------------------------------COMPONENT----------------------------------------
export default function Section1Images(): ReactElement {
  return (
    <div>
      <div className="image-front">
        <Image
          priority
          src="/images/home/home-sec1-front.svg" // Route of the image file
          height={437}
          width={413}
          alt={genericAlt}
        />
      </div>
      <div className="image-back-top">
        <img
          src="/images/home/home-sec1-top.svg" // Route of the image file
          height={382}
          width={405}
          alt={genericAlt}
        />
      </div>
      <div className="image-back-bottom">
        <img
          src="/images/home/home-sec1-bottom.svg" // Route of the image file
          height={190}
          width={325}
          alt={genericAlt}
        />
      </div>
    </div>
  );
}
