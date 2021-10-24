// ---Dependencys
import { ReactElement } from 'react';
// ---Others
import { genericAlt } from 'Others/globalData';

// ----------------------------------------COMPONENT----------------------------------------
export default function Rigth(): ReactElement {
  return (
    <div className="img-section-1">
      <div>
        <img
          className="imagen"
          src="/images/Courses/Courses1.jpeg" // Route of the image file
          alt={genericAlt}
        />
      </div>
    </div>
  );
}
