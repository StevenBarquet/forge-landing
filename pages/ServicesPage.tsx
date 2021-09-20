// ---Dependencys
import { ReactElement } from 'react';
import Head from 'next/head';
// ---Components
import InDevPage from 'CComps/InDevPage';

// ------------------------------------------ COMPONENT-----------------------------------------
export default function ServicesPage(): ReactElement {
  const finishDate = new Date('September 29, 2021 03:24:00');
  return (
    <>
      <Head>
        <title>Forge | Servicios</title>
      </Head>
      <InDevPage compName="Servicios" finishDate={finishDate as unknown as number} />
    </>
  );
}
