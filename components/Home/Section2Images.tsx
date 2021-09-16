// ---Dependencys
import { ReactElement } from 'react';
// ---Others
import { genericAlt } from 'Others/globalData';

// ----------------------------------------COMPONENT----------------------------------------
export default function Section2Images(): ReactElement {
  return (
    <section className="section-2-2">
      <h1>Crea un sitio web fácil y rápido.</h1>
      <div className="image-back">
        <img
          src="/images/home/sec2.svg" // Route of the image file
          height={401 * 0.7}
          width={364 * 0.7}
          alt={genericAlt}
        />
      </div>
      <p>
        Creemos juntos una sitio web o una plataforma con todas las funciones de
        un E-Commerce con todo lo que necesitas para comenzar, gestionar y hacer
        crecer tu negocio.
      </p>
    </section>
  );
}
