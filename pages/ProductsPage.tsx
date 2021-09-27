// ---Dependencys
import { ReactElement } from 'react';
import Head from 'next/head';
// ---Components
import InDevPage from 'CComps/InDevPage';

// ------------------------------------------ COMPONENT-----------------------------------------
export default function ProductsPage(): ReactElement {
  const finishDate = new Date('October 22, 2021 03:24:00');
  return (
    <>
      <Head>
        <title>Forge | Productos</title>
      </Head>
      <InDevPage compName="Productos" finishDate={finishDate as unknown as number} />
    </>
  );
}
