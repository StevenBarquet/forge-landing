// ---Dependencys
import { ReactElement } from 'react';
import Link from 'next/link';
import { Col, ColProps } from 'antd';

// ------------------------------------TYPES---------------------------------------
interface Props {
  label: string;
  path: string;
  currentPath: string;
  grid: ColProps
}
// -----------------------------------COMPONENT------------------------------------
export default function NavButton(props: Props): ReactElement {
  const {
    label, path, currentPath, grid
  } = props;

  return (
    <Col className="nav-col" {...grid}>
      <Link href={path}>
        <div
          className={currentPath === path ? 'nav-btn nav-border' : 'nav-btn'}
        >
          {label}
        </div>
      </Link>
      <div className="slider" />
    </Col>
  );
}
