import { FaHouse } from 'react-icons/fa6';
import s from './Home.module.css';

const Home = () => {
  return (
    <div className={s.div}>
      <FaHouse className={s.icon} />
      <h3 className={s.title}>Welcome to Phone book</h3>
    </div>
  );
};

export default Home;