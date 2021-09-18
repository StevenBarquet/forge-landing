// ---Dependencys
import { ReactElement } from 'react';
import Image from 'next/image';
// ---Others
import { genericAlt } from 'Others/globalData';
// ----------------------------------------COMPONENT----------------------------------------
export default function Rigth(): ReactElement {
  return (
    <>
      <section className="section-5">
        <Image
          priority
          src="/images/home/sec5-2.svg" // Route of the image file
          height={55}
          width={70}
          alt={genericAlt}
        />
        <h1>Al alcance de Todos</h1>
        <p>
          No importa si trabajas como indepeniente, tienes un negocio minorista
          o una empresa grande. ¡Te ayudamos!
        </p>
        <hr />
      </section>
    </>
  );
}
