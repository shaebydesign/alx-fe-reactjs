import React from 'react';
import './App.css';
import FormikForm from './components/formikForm.js';  // Import your formikForm.js

function App() {
  return (
    <div className="App">
      <h1>Registration Form</h1>
      <FormikForm /> {/* This will render your Formik form */}
    </div>
  );
}

export default App;
