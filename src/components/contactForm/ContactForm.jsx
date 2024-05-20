import { Formik, Field, Form, ErrorMessage } from "formik";
import { useId } from "react";
import { useDispatch } from "react-redux";
import { addContact } from "../../redux/contactsOps";
import * as Yup from "yup";
import css from "./ContactForm.module.css";

export default function LoginForm() {
  const nameFieldId = useId();
  const numberFieldId = useId();
  const validationSchema = Yup.object().shape({
    name: Yup.string()
      .min(3, "Too Short!")
      .max(18, "Too Long!")
      .required("Name is required!"),
    phoneNumber: Yup.string()
      .matches(/^[1-9]\d{1,14}$/, "Invalid phone number!")
      .required("Phone number is required!"),
  });
  const dispatch = useDispatch();
  const handleSubmit = (newContact, actions) => {
    dispatch(addContact(newContact));
    actions.resetForm();
  };
  return (
    <div>
      <Formik
        initialValues={{
          name: "",
          phoneNumber: "",
        }}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        <Form className={css.form}>
          <div className={css.flex}>
            <label htmlFor={nameFieldId}>Name</label>
            <Field id={nameFieldId} name="name" />
            <ErrorMessage className={css.color} name="name" component="span" />
          </div>
          <div className={css.flex}>
            <label htmlFor={numberFieldId}>Phone number</label>
            <Field id={numberFieldId} name="phoneNumber" />
            <ErrorMessage
              className={css.color}
              name="phoneNumber"
              component="span"
            />
          </div>
          <button className={css.button} type="submit">
            Add contact
          </button>
        </Form>
      </Formik>
    </div>
  );
}
