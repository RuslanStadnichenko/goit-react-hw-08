import { MdError } from 'react-icons/md';
import s from './Error.module.css';
export const Error = () => {
  return (
    <div className={s.div}>
      <MdError color="red" />
      <h2 className={s.text}>{'Something went wrong :('}</h2>
    </div>
  );
};