import { useFormik } from "formik";
import TextField from "@mui/material/TextField";
import { useId } from "react";
import { useDispatch } from "react-redux";
import * as Yup from "yup";
import { login } from "../../redux/auth/authOps";
import css from "./LoginForm.module.css";
import { Button } from "@mui/material";
import LoginOutlinedIcon from "@mui/icons-material/LoginOutlined";
export default function LoginForm() {
  const validationSchema = Yup.object().shape({
    email: Yup.string().email().required("Please enter your email"),
    password: Yup.string()
      .min(8, "Password should be longer than seven signs")
      .max(29, "Password  should be shorter than thirty signs")
      .required("Please enter your password"),
  });

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values, actions) => {
      dispatch(login(values));
      actions.resetForm();
    },
  });
  const emailFieldId = useId();
  const passwordFieldId = useId();
  const dispatch = useDispatch();
  return (
    <div>
      <form onSubmit={formik.handleSubmit} className={css.form}>
        <TextField
          id={emailFieldId}
          // autoFocus={true}
          name="email"
          label="Email"
          type="email"
          value={formik.values.email}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.email && Boolean(formik.errors.email)}
          margin="normal"
          helperText={formik.touched.email && formik.errors.email}
        />
        <TextField
          id={passwordFieldId}
          name="password"
          label="Password"
          type="password"
          autoComplete= 'new-password'
          value={formik.values.password}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          margin="normal"
          error={formik.touched.password && Boolean(formik.errors.password)}
          helperText={formik.touched.password && formik.errors.password}
        />
        <Button
          variant="contained"
          type="submit"
          startIcon={<LoginOutlinedIcon />}
        >
          Log in
        </Button>
      </form>
    </div>
  );
}
