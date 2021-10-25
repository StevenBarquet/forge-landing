// ---Dependencys
import { ReactElement } from 'react';
// ---Others
import { genericAlt } from 'Others/globalData';
// ---types
interface Props {
  imgRoute: string;
  text1:string;
  text2:string;
  isMovil: boolean
}

// ----------------------------------------COMPONENT----------------------------------------
export default function CoursesCard(props:Props): ReactElement {
  const {
    imgRoute, text1, text2, isMovil
  } = props;
  return (
    <div className="card">
      <img
        className={isMovil ? 'imagenmov' : 'imagen'}
        src={imgRoute}// Route of the image file
        alt={genericAlt}
      />
      <h2>{text1}</h2>
      <p>{text2}</p>
    </div>
  );
}
