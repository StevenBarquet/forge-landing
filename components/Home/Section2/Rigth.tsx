// ---Dependencys
import { ReactElement } from 'react';
// ---Others
import { genericAlt } from 'Others/globalData';

// ----------------------------------------COMPONENT----------------------------------------
export default function Rigth(): ReactElement {
  return (
    <section className="section-2-2">
      <h1>Crea un sitio web fácil y rápido.</h1>
      <div className="image-back">
        <img
          src="/images/home/sec2.png" // Route of the image file
          height={401 * 0.7}
          width={364 * 0.7}
          alt={genericAlt}
        />
      </div>
      <p>
        <b>Crearemos para ti</b>
        {' '}
        un sitio web o un E-Commerce con todo lo que necesitas
        para comenzar, gestionar o hacer crecer tu negocio.
      </p>
    </section>
  );
}
