import { useFormik } from "formik";
import TextField from "@mui/material/TextField";
import { useId } from "react";
import { useDispatch } from "react-redux";
import { Button } from "@mui/material";
import { addContact, updateContact } from "../../redux/contacts/contactsOps";
import * as Yup from "yup";
import css from "./ContactForm.module.css";
import PersonAddAltOutlinedIcon from "@mui/icons-material/PersonAddAltOutlined";
import ChangeCircleOutlinedIcon from "@mui/icons-material/ChangeCircleOutlined";

export default function ContactForm({ isUpdate }) {
  const Icon = isUpdate ? (
    <ChangeCircleOutlinedIcon />
  ) : (
    <PersonAddAltOutlinedIcon />
  );
  const nameFieldId = useId();
  const numberFieldId = useId();
  const validationSchema = Yup.object().shape({
    name: Yup.string()
      .min(3, "Too Short!")
      .max(18, "Too Long!")
      .required("Name is required to add new contact"),
    number: Yup.string()
      .matches(/^[1-9]\d{1,14}$/, "Enter valid phone number!")
      .required("Phone number is required!"),
  });
  const handleSubmit = (values, actions) => {
    isUpdate ? dispatch(updateContact(values)) : dispatch(addContact(values));
    actions.resetForm();
  };
  const formik = useFormik({
    initialValues: {
      name: "",
      number: "",
    },
    onSubmit: handleSubmit,
    validationSchema: validationSchema,
  });
  const dispatch = useDispatch();

  return (
    <form onSubmit={formik.handleSubmit} className={css.form}>
      <TextField
        id={nameFieldId}
        // autoFocus={true}
        name="name"
        label="name"
        type="text"
        value={formik.values.name}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.touched.name && Boolean(formik.errors.name)}
        margin="normal"
        helperText={formik.touched.name && formik.errors.name}
      />
      <TextField
        id={numberFieldId}
        // autoFocus={true}
        name="number"
        label="number"
        type="text"
        value={formik.values.number}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.touched.number && Boolean(formik.errors.number)}
        margin="normal"
        helperText={formik.touched.number && formik.errors.number}
      />
      <Button variant="outlined" type="submit" startIcon={Icon}>
        {isUpdate ? "Update contact" : "Add contact"}
      </Button>
    </form>
  );
}
