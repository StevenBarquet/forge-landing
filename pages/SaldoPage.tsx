// ---Dependencys
import { ReactElement } from 'react';
import Head from 'next/head';
// ---Components
import Saldo from 'Cont/Saldo';

// ------------------------------------------ COMPONENTE ---------------------------------------
export default function HelpPage(): ReactElement {
  return (
    <>
      <Head>
        <title>Forge | Saldos</title>
      </Head>
      <Saldo />
    </>
  );
}
