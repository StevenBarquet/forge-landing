// ---Dependencys
import { ReactElement } from 'react';
// ---Components
import ContactUs from 'Comp/Home/Contact/ContactUS';

// ----------------------------------------COMPONENT----------------------------------------
export default function Section2Contact(): ReactElement {
  return (
    <>
      <section className="section-2-1">
        <h1>
          ¡Agenda tu cita!
        </h1>
        <ContactUs />
      </section>
    </>
  );
}
