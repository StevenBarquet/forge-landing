// ---Dependencys
import { ReactElement } from 'react';
import Head from 'next/head';
// ---Components
import Design from 'Cont/Design';
// ------------------------------------------ COMPONENT-----------------------------------------
export default function DesignPage(): ReactElement {
  return (
    <>
      <Head>
        <title>Forge | Diseño</title>
      </Head>
      <Design />
    </>
  );
}
