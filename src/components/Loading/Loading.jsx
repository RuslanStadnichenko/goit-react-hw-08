import { Circles } from 'react-loader-spinner';
import s from './Loading.module.css';
export const Loading = () => {
  return (
    <div className={s.div}>
      <Circles
        height="80"
        width="80"
        color="#4fa94d"
        ariaLabel="circles-loading"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
    </div>
  );
};