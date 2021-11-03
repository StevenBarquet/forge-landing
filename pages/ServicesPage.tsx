// ---Dependencys
import { ReactElement } from 'react';
import Head from 'next/head';
// ---Components
import Services from 'Cont/Services';

// ------------------------------------------ COMPONENT-----------------------------------------
export default function ServicesPage(): ReactElement {
  return (
    <>
      <Head>
        <title>Forge | Servicios</title>
      </Head>
      <Services />
    </>
  );
}
