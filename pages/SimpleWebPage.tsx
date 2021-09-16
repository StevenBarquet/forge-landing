// ---Dependencys
import { ReactElement } from 'react';
import Head from 'next/head';
// ---Components
import ReduxEx from 'Cont/ReduxEx';

// ------------------------------------------ COMPONENT-----------------------------------------
export default function SimpleWebPage(): ReactElement {
  return (
    <>
      <Head>
        <title>Forge | Crea tu sitio</title>
      </Head>
      <ReduxEx />
    </>
  );
}
