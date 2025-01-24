import { ErrorMessage, Field, Form, Formik } from "formik";
import css from "./ContactForm.module.css";
import { useId } from "react";
import * as Yup from "yup";

const FeedbackSchema = Yup.object().shape({
  username: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  phone: Yup.string()
    .matches(/^\d{3}-\d{2}-\d{2}$/, "Phone number must be in format 333-22-22")
    .required("Required"),
});

const initialValues = {
  username: "",
  phone: "",
};

const ContactForm = ({ onAddContact }) => {
  const nameField = useId();
  const phoneField = useId();

  const handleSubmit = (values, actions) => {
    const newContact = {
      id: Date.now().toString(),
      name: values.username,
      number: values.phone,
    };
    onAddContact(newContact);
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={FeedbackSchema}
    >
      <Form className={css.form}>
        <div className={css.container}>
          <label htmlFor={nameField}>Name</label>
          <Field
            className={css.field}
            type="text"
            name="username"
            id={nameField}
          />
          <ErrorMessage
            className={css.error}
            name="username"
            component="span"
          />
        </div>

        <div className={css.container}>
          <label htmlFor={phoneField}>Number</label>
          <Field
            className={css.field}
            type="text"
            name="phone"
            id={phoneField}
          />
          <ErrorMessage className={css.error} name="phone" component="span" />
        </div>

        <button className={css.btn} type="submit">
          Add contact
        </button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
