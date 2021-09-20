// ---Dependencys
import { ReactElement } from 'react';
import Head from 'next/head';
// ---Components
import InDevPage from 'CComps/InDevPage';

// ------------------------------------------ COMPONENT-----------------------------------------
export default function SimpleWebPage(): ReactElement {
  const finishDate = new Date('October 28, 2021 03:24:00');
  return (
    <>
      <Head>
        <title>Forge | Crea tu página web</title>
      </Head>
      <InDevPage compName="Página web" finishDate={finishDate as unknown as number} />
    </>
  );
}
