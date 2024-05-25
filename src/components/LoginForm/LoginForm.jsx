import { Formik, Field, Form, ErrorMessage } from "formik";
import { useId } from "react";
import { useDispatch } from "react-redux";
import * as Yup from "yup";
import css from "./LoginForm.module.css";
import Button from "../Button/Button";
import { login } from "../../redux/auth/authOps";

export default function LoginForm() {
  // const userNameFieldId = useId();
  const emailFieldId = useId();
  const passwordFieldId = useId();
  const dispatch = useDispatch();
  const handleSubmit = (values, actions) => {
    dispatch(login(values));
    console.log(values);
    // actions.resetForm();
  };
  const validationSchema = Yup.object().shape({
    // name: Yup.string()
    //   .min(3, "Username should be longer than two signs")
    //   .max(18, "Username should be shorter  than nineteen  signs")
    //   .required("Please enter your username"),
    email: Yup.string().email().required("Please enter your email"),
    password: Yup.string()
      .min(8, "Password should be longer than seven signs")
      .max(29, "Password  should be shorter than thirty signs")
      .required("Please enter your password"),
  });
  return (
    <div>
    <Formik
      initialValues={{
        // name: "",
        email: "",
        password: "",
      }}
      onSubmit={handleSubmit}
      validationSchema={validationSchema}
    >
      <Form className={css.form}>
        {/* <div className={css.flex}>
          <label htmlFor={userNameFieldId}>Username</label>
          <Field id={userNameFieldId} name="name" />
          <ErrorMessage className={css.color} name="name" component="span" />
        </div> */}
        <div className={css.flex}>
          <label htmlFor={emailFieldId}>Email</label>
          <Field id={emailFieldId} name="email" type="email" />
          <ErrorMessage className={css.color} name="email" component="span" />
        </div>
        <div className={css.flex}>
          <label htmlFor={passwordFieldId}>Password</label>
          <Field
            id={passwordFieldId}
            name="password"
            type="password"
            autoComplete="new-password"
          />
          <ErrorMessage
            className={css.color}
            name="password"
            component="span"
          />
        </div>
        <Button
          buttonName="login"
          buttonType="submit"
          buttonValue="Log in"
        />
      </Form>
    </Formik>
  </div>
  );
}
