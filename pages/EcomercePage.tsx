// ---Dependencys
import { ReactElement } from 'react';
import Head from 'next/head';
// ---Components
import Ecomerce from 'Cont/Ecomerce';

// ------------------------------------------ COMPONENT-----------------------------------------
export default function EcomercePage(): ReactElement {
  return (
    <>
      <Head>
        <title>Forge | Crea tu comercio en linea</title>
      </Head>
      <Ecomerce />
    </>
  );
}
