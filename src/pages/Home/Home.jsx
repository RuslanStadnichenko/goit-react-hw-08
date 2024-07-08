import { FcContacts } from 'react-icons/fc';
import s from './Home.module.css';

const Home = () => {
  return (
    <div className={s.div}>
      <FcContacts className={s.icon} />
      <h3 className={s.title}>Welcome to Phone book</h3>
    </div>
  );
};

export default Home;