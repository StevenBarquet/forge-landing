// ---Dependencys
import { ReactElement } from 'react';
import Image from 'next/image';
// ---Others
import { genericAlt } from 'Others/globalData';
// ----------------------------------------COMPONENT----------------------------------------
export default function Section6(): ReactElement {
  return (
    <>
      <section className="section-5">
        <Image
          priority
          src="/images/home/sec5-1.svg" // Route of the image file
          height={55}
          width={70}
          alt={genericAlt}
        />
        <h1>Confianza y Transparencia</h1>
        <p>
          Sin letras chiquitas, sin ataduras o plazos forzosos,
          manten segura tu empresa con nosotros.
        </p>
        <hr />
      </section>
    </>
  );
}
