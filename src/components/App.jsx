import { Route, Routes } from 'react-router-dom';
import { Layout } from './Layout/Layout';
import { useDispatch, useSelector } from 'react-redux';
import { selectIsRefreshing } from '../redux/auth/selectors';
import { lazy, useEffect } from 'react';
import { refreshUserThunk } from '../redux/auth/operations';
import { Toaster } from 'react-hot-toast';
import { Loading } from './Loading/Loading';
import { selectCurrentContact } from '../redux/contacts/selectors';
import { EditForm } from './EditForm/EditForm';
import { PrivateRoute } from './PrivateRoute/PrivateRoute';
import { PublicRoute } from './PublicRoute/PublicRoute';

const Home = lazy(() => import('../pages/Home/Home'));
const RegisterPage = lazy(() => import('../pages/Register/RegisterPage'));
const LoginPage = lazy(() => import('../pages/LoginPage/LoginPage'));
const Contacts = lazy(() => import('../pages/Contacts/Contacts'));

export const App = () => {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing);
  const currentContact = useSelector(selectCurrentContact);
  useEffect(() => {
    dispatch(refreshUserThunk());
  }, [dispatch]);
  return isRefreshing ? (
    <Loading />
  ) : (
    <>
      {currentContact && <EditForm />}
      <Layout>
        <Toaster />
        <Routes>
          <Route
            path="/"
            element={<Home />}
          />
          <Route
            path="/register"
            element={
              <PublicRoute
                component={<RegisterPage />}
                redirectTo="/contacts"
              />
            }
          />
          <Route
            path="/login"
            element={
              <PublicRoute
                component={<LoginPage />}
                redirectTo="/contacts"
              />
            }
          />
          <Route
            path="/contacts"
            element={<PrivateRoute component={<Contacts />} />}
          />
        </Routes>
      </Layout>
    </>
  );
};