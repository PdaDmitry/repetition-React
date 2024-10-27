import { useId } from 'react';
import * as Yup from 'yup';

import css from './FeedbackForm.module.css';
import { Formik, Form, Field, ErrorMessage } from 'formik';

const FeedbackSchema = Yup.object().shape({
  username: Yup.string().min(2, 'Too short!').max(50, 'Too long!').required('Required!'),
  email: Yup.string().email('Must be a valid email!').required('Required!'),
  message: Yup.string().min(3, 'Too short').max(50, 'Too long').required('Required'),
  level: Yup.string().oneOf(['good', 'neutral', 'bad']).required('Required'),
});

const initialValues = {
  username: '',
  email: '',
  message: '',
  level: '',
};

export function FeedbackForm() {
  const usernameId = useId();
  const emailId = useId();
  const messageId = useId();
  const levelId = useId();

  const handleSubmit = (value, action) => {
    console.log(value);
    action.resetForm();
  };

  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit} validationSchema={FeedbackSchema}>
      <Form className={css.form}>
        <label htmlFor={usernameId}>Username</label>
        <Field type="text" name="username" id={usernameId} className={css.field} />
        <ErrorMessage name="username" component="span" className={css.error} />

        <label htmlFor={emailId}>Email</label>
        <Field type="email" name="email" id={emailId} className={css.field} />
        <ErrorMessage name="email" component="span" className={css.error} />

        <label htmlFor={messageId}>Message</label>
        <Field as="textarea" name="message" id={messageId} rows="5" />
        <ErrorMessage name="message" component="span" className={css.error} />

        <label htmlFor={levelId}>Service satisfaction level</label>
        <Field as="select" name="level" id={levelId} className={css.field}>
          <option value="" label="Select a level" />
          <option value="good">Good</option>
          <option value="neutral">Neutral</option>
          <option value="bad">Bad</option>
        </Field>
        <ErrorMessage name="level" component="span" className={css.error} />

        <button type="submit" className={css.Btn}>
          Submit
        </button>
      </Form>
    </Formik>
  );
}
