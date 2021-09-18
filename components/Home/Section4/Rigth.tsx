// ---Dependencys
import { ReactElement } from 'react';
import Image from 'next/image';
// ---Others
import { genericAlt } from 'Others/globalData';

// ----------------------------------------COMPONENT----------------------------------------
export default function Rigth({ isMovil } : { isMovil: boolean }): ReactElement {
  return (
    <div className="section-3-2">
      <Image
        priority
        src="/images/home/sec4.jpg" // Route of the image file
        height={isMovil ? 354 * 0.75 : 354}
        width={isMovil ? 500 * 0.75 : 500}
        alt={genericAlt}
      />
    </div>
  );
}
