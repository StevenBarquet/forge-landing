// ---Dependencys
import { ReactElement } from 'react';
import { Col, ColProps } from 'antd';
// ---Comps
import SectionGridBoton from 'Comp/Services/SectionGrid/SectionGridBoton';
// ---Others
import { genericAlt } from 'Others/globalData';

// ----------------------------------------PROPS--------------------------------------
interface Props{
  imgRoute: string;
  label: string;
  grid: ColProps
}
// ----------------------------------------COMPONENT--------------------------------------
export default function Cards(props: Props): ReactElement {
  const { imgRoute, label, grid } = props;
  return (
    <Col {...grid}>
      <div className="card">
        <img src={imgRoute} alt={genericAlt} />
        <h3>{label}</h3>
      </div>
      <SectionGridBoton />
    </Col>
  );
}
