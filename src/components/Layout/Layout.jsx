import { AppBar } from '../AppBar/AppBar';
import { Suspense } from 'react';
import { Loading } from '../Loading/Loading';
import s from './Layout.module.css';
export const Layout = ({ children }) => {
  return (
    <>
      <AppBar />
      <div className={s.wrapper}>
        <Suspense fallback={<Loading />}>{children}</Suspense>
      </div>
    </>
  );
};