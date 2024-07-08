import { Field, Form, Formik } from 'formik';
import s from './RegForm.module.css';
import { Link } from 'react-router-dom';
import { registerThunk } from '../../redux/auth/operations';
import { useDispatch } from 'react-redux';
export const RegForm = () => {
  const dispatch = useDispatch();
  const initialValues = {
    name: '',
    email: '',
    password: '',
  };
  const handleSubmit = ({ name, email, password }, actions) => {
    dispatch(registerThunk({ name, email, password }));
    actions.resetForm(initialValues);
  };
  return (
    <>
      <h3 className={s.title}>Registration Form</h3>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
      >
        <Form className={s.form}>
          <label htmlFor="name">Name:</label>
          <Field
            name="name"
            className={s.input}
            required
            id="outlined-basic"
          />
          <label htmlFor="email">Email:</label>
          <Field
            name="email"
            type="email"
            className={s.input}
            required
          />
          <label htmlFor="password">Password:</label>
          <Field
            name="password"
            type="password"
            className={s.input}
            required
          />
          <Link to="/login">Already have account?</Link>
          <button
            type="submit"
            className={s.button}
          >
            Register!
          </button>
        </Form>
      </Formik>
    </>
  );
};