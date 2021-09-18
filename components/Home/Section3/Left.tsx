// ---Dependencys
import { ReactElement } from 'react';
import Image from 'next/image';
// ---Others
import { genericAlt } from 'Others/globalData';

// ----------------------------------------COMPONENT----------------------------------------
export default function Left({ isMovil } : { isMovil: boolean }): ReactElement {
  return (
    <div className="section-3-2">
      <Image
        priority
        src="/images/home/sec4.svg" // Route of the image file
        height={isMovil ? 461 * 0.5 : 461 * 0.7}
        width={isMovil ? 657 * 0.5 : 657 * 0.7}
        alt={genericAlt}
      />
    </div>
  );
}
