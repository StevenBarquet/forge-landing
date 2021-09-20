// ---Dependencys
import { ReactElement } from 'react';
import Head from 'next/head';
// ---Components
import InDevPage from 'CComps/InDevPage';

// ------------------------------------------ COMPONENT-----------------------------------------
export default function HelpPage(): ReactElement {
  const finishDate = new Date('October 9, 2021 03:24:00');
  return (
    <>
      <Head>
        <title>Forge | Iniciar Sesión</title>
      </Head>
      <InDevPage compName="Portal de cliente" finishDate={finishDate as unknown as number} />
    </>
  );
}
