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
    actions.resetForm();
  };
  const validationSchema = Yup.object().shape({
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
          email: "",
          password: "",
        }}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        <Form className={css.form}>
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
          <Button buttonName="login" buttonType="submit" buttonValue="Log in" />
        </Form>
      </Formik>
    </div>
  );
}
