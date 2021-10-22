// ---Dependencys
import { ReactElement } from 'react';
import Head from 'next/head';
// ---Components
import Servicio from 'Cont/Services';

// ------------------------------------------ COMPONENT-----------------------------------------
export default function ServicesPage(): ReactElement {
  return (
    <>
      <Head>
        <title>Forge | Servicios</title>
      </Head>
      <Servicio />
    </>
  );
}
