// ---Dependencys
import { ReactElement } from 'react';
import { Button } from 'antd';

// ----------------------------------------COMPONENT----------------------------------------
export default function Botoncitos(props:{namebutton:string}): ReactElement {
  const { namebutton } = props;
  return (
    <div className="content-boton-services">
      <Button type="link">{namebutton}</Button>
    </div>
  );
}
