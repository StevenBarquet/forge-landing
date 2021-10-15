// ---Dependencys
import { ReactElement } from 'react';
import Head from 'next/head';
// ---Components
import Saldo from 'containers/Saldo';

// ------------------------------------------ COMPONENT-----------------------------------------
export default function HelpPage(): ReactElement {
  // const finishDate = new Date('December 29, 2021 03:24:00');
  return (
    <>
      <Head>
        <title>Forge | Ayuda</title>
      </Head>
      <Saldo />
    </>
  );
}
