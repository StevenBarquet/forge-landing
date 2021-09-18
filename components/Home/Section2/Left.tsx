// ---Dependencys
import { ReactElement } from 'react';
// ---Components
import ContactUs from 'Comp/Home/Section2/Contact/ContactUS';

// ----------------------------------------COMPONENT----------------------------------------
export default function Left(): ReactElement {
  return (
    <>
      <section className="section-2-1">
        {/* <h1>
          ¡Agenda tu cita!
        </h1> */}
        <ContactUs />
      </section>
    </>
  );
}
