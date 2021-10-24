// ---Dependencys
import { ReactElement } from 'react';
import Head from 'next/head';
// ---Components
import Courses from 'Cont/Courses';
// ------------------------------------------ COMPONENT-----------------------------------------
export default function CoursesPage(): ReactElement {
  return (
    <>
      <Head>
        <title>Forge | Cursos</title>
      </Head>
      <Courses />
    </>
  );
}
