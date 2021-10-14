// ---Dependencys
import { ReactElement } from 'react';
import Head from 'next/head';
// ---Components
import Login from 'Cont/Login';

// ------------------------------------------ COMPONENTE ---------------------------------------
export default function HelpPage(): ReactElement {
  return (
    <>
      <Head>
        <title>Forge | Iniciar Sesión</title>
      </Head>
      <Login />
    </>
  );
}
