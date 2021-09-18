// ---Dependencys
import { ReactElement } from 'react';
// ---Types
import { AppProps } from 'next/app';
// ---Containers
import NavbarCont from 'Cont/NavbarCont';
import Footer from 'Cont/Footer';
// ---Others
import 'Styles/colors.less';
import 'Styles/index.less';
// ---Redux
import { wrapper } from '@Redux/store';

function App({ Component, pageProps }: AppProps): ReactElement {
  return (
    <>
      <NavbarCont />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default wrapper.withRedux(App);
