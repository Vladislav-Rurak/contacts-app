import { CONTACT_VALIDATION_SCHEMA } from '../../utils/validationSchemas';

const { Formik, Form, Field, ErrorMessage } = require('formik');

const initialValues = {
  name: '',
  telNumber: '',
  birthday: '',
};

const handleSubmit = (values, formikBak) => {
  formikBak.resetForm();
};

function ContactForm () {
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={CONTACT_VALIDATION_SCHEMA}
    >
      {formikProps => (
        <Form>
          <Field name='name' type='text' placeholder='name' autoFocus />
          <ErrorMessage name='name' />
          <br />
          <Field name='telNumber' type='tel' placeholder='+380123456789' />
          <ErrorMessage name='telNumber' />
          <br />
          <Field name='birthday' type='date' />
          <ErrorMessage name='birthday' />
          <br />
          <button type='submit'>Create</button>
        </Form>
      )}
    </Formik>
  );
}

export default ContactForm;
