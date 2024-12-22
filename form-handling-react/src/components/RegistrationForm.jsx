import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

// Validation schema using Yup
const validationSchema = Yup.object({
  username: Yup.string()
    .min(4, 'Username must be at least 4 characters')
    .required('Username is required'),
  email: Yup.string().email('Invalid email address').required('Email is required'),
  password: Yup.string()
    .min(6, 'Password must be at least 6 characters')
    .required('Password is required')
});

const RegistrationForm = () => {
  return (
    <Formik
      initialValues={{ username: '', email: '', password: '' }}
      validationSchema={validationSchema}
      onSubmit={(values) => {
        // Here you can handle the form submission, for example by calling an API
        console.log(values);
      }}
    >
      {({ touched, errors }) => (
        <Form>
          <div>
            <label htmlFor="username">Username</label>
            <Field
              type="text"
              id="username"
              name="username"
              placeholder="Enter your username"
            />
            <ErrorMessage name="username" component="div" className="error" />
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <Field
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
            />
            <ErrorMessage name="email" component="div" className="error" />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <Field
              type="password"
              id="password"
              name="password"
              placeholder="Enter your password"
            />
            <ErrorMessage name="password" component="div" className="error" />
          </div>
          <div>
            <button type="submit">Submit</button>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default RegistrationForm;
