import { Form, Formik, Field, ErrorMessage } from 'formik';
import { useId } from 'react';
import * as Yup from 'yup';
import s from './EditForm.module.css';
import { useDispatch, useSelector } from 'react-redux';
import toast from 'react-hot-toast';

import { selectCurrentContact } from '../../redux/contacts/selectors';

import { RxCross2 } from 'react-icons/rx';
import { editContactThunk } from '../../redux/contacts/operations';
import { addCurrentContact } from '../../redux/contacts/slice';

const initialValues = { name: '', number: '' };

const validationSchema = Yup.object().shape({
  name: Yup.string()
    .required("Ім'я є обов'язковим!")
    .min(3, 'Має бути не менше 3-х символів')
    .max(20, 'Має бути не більше 20-ти символів')
    .trim('Не має містити пробілів'),
  number: Yup.string()
    .required('Номер телефону є обов’язковим')
    .matches(/^[0-9]+$/, 'Має містити лише цифри')
    .min(10, 'Має бути не менше 10-ти символів')
    .max(15, 'Має бути не більше 15-ти символів'),
});

export const EditForm = () => {
  const contact = useSelector(selectCurrentContact);
  const dispatch = useDispatch();
  const nameId = useId();
  const numberId = useId();
  const handleSubmit = (values, actions) => {
    dispatch(editContactThunk({ ...values, id: contact.id }));
    actions.resetForm();
    toast.success('Successfully edited');
  };

  return (
    <>
      <div className={s.formWrapper}>
        <button
          className={s.closeBtn}
          onClick={() => {
            dispatch(addCurrentContact(null));
          }}
        >
          <RxCross2 />
        </button>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          <Form className={s.form}>
            <label htmlFor={nameId} className={s.label}>
              Name:
              <Field
                type="text"
                name="name"
                id={nameId}
                className={s.input}
                placeholder="Tony Stark"
              ></Field>
              <ErrorMessage name="name" component="span" className={s.error} />
            </label>
            <label htmlFor={numberId} className={s.label}>
              Number:
              <Field
                type="tel"
                name="number"
                id={numberId}
                className={s.input}
                placeholder="0999421705"
              ></Field>
              <ErrorMessage
                name="number"
                component="span"
                className={s.error}
              />
            </label>
            <button type="submit" className={s.button}>
              Save
            </button>
          </Form>
        </Formik>
      </div>
      <div className={s.backdrop}></div>
    </>
  );
};