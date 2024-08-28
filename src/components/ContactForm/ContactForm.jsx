import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import css from "./ContactForm.module.css";
import { useDispatch } from "react-redux";
import { addContact } from "../../redux/contactsOps";
import { nanoid } from "nanoid";

export default function ContactForm() {
  const dispatch = useDispatch();

  const initialValues = {
    name: "",
    number: "",
  };

  const handleSubmit = (data, actions) => {
    dispatch(addContact(data));
    actions.resetForm();
  };

  const userSchema = Yup.object().shape({
    name: Yup.string("Use 'ABC'")
      .matches(/^[a-zA-Z\s]+$/, "Use letters and spaces only")
      .min(3, "Too short")
      .max(15, "Too long")
      .required("This is required"),
    number: Yup.string()
      .matches(/^\d+$/, "Use numbers only")
      .min(9, "Too short")
      .max(12, "Too long")
      .required("This is required"),
  });

  return (
    <Formik
      validationSchema={userSchema}
      initialValues={initialValues}
      onSubmit={handleSubmit}
    >
      <Form className={css.form}>
        <div className={css.item}>
          <label htmlFor="nameId" className={css.label}>
            Name
          </label>
          <Field id="nameId" name="name" className={css.input} />
          <ErrorMessage
            name="name"
            component="span"
            className={css.attention}
          />
        </div>
        <div className={css.item}>
          <label htmlFor="numberId" className={css.label}>
            Number
          </label>
          <Field id="numberId" name="number" className={css.input} />
          <ErrorMessage
            name="number"
            component="span"
            className={css.attention}
          />
        </div>
        <button type="submit" className={css.submit}>
          Add contact
        </button>
      </Form>
    </Formik>
  );
}
