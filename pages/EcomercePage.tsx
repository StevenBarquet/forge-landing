// ---Dependencys
import { ReactElement } from 'react';
import Head from 'next/head';
// ---Components
import ReduxEx from 'Cont/ReduxEx';

// ------------------------------------------ COMPONENT-----------------------------------------
export default function EcomercePage(): ReactElement {
  return (
    <>
      <Head>
        <title>Forge | Crea tu comercio en linea</title>
      </Head>
      <ReduxEx />
    </>
  );
}
