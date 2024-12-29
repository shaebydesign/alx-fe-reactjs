// @jsxImportSource react
import { Field, Form, Formik, ErrorMessage } from 'formik';

const FormikForm = () => {
  return (
    <Formik
      initialValues={{
        username: '',
        email: '',
      }}
      validate={(values) => {
        const errors = {};
        if (!values.username) errors.username = 'Required';
        if (!values.email) errors.email = 'Required';
        return errors;
      }}
      onSubmit={(values) => {
        console.log('Form submitted:', values);
      }}
    >
      <Form>
        <div>
          <label htmlFor="username">Username</label>
          <Field id="username" name="username" type="text" />
          <ErrorMessage name="username" component="div" />
        </div>

        <div>
          <label htmlFor="email">Email</label>
          <Field id="email" name="email" type="email" />
          <ErrorMessage name="email" component="div" />
        </div>

        <button type="submit">Submit</button>
      </Form>
    </Formik>
  );
};

export { FormikForm };
