import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { register } from "../../redux/auth/operations";
import css from "./RegistrationForm.module.css";

const schema = Yup.object({
  name: Yup.string().min(2, "En az 2 karakter").required("Zorunlu"),
  email: Yup.string().email("Geçerli email gir").required("Zorunlu"),
  password: Yup.string().min(7, "En az 7 karakter").required("Zorunlu"),
});

const RegistrationForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    const payload = {
      name: values.name.trim(),
      email: values.email.trim(),
      password: values.password.trim(),
    };
    dispatch(register(payload))
      .unwrap()
      .catch((err) => alert(String(err)))
      .finally(() => actions.setSubmitting(false));
  };

  return (
    <Formik
      initialValues={{ name: "", email: "", password: "" }}
      validationSchema={schema}
      onSubmit={handleSubmit}
    >
      {({ status, errors, touched, isSubmitting }) => (
        <Form className={css.form}>
          <Field className={css.input} name="name" placeholder="Name" />
          {touched.name && errors.name && <small>{errors.name}</small>}

          <Field
            className={css.input}
            name="email"
            type="email"
            placeholder="Email"
          />
          {touched.email && errors.email && <small>{errors.email}</small>}

          <Field
            className={css.input}
            name="password"
            type="password"
            placeholder="Password"
          />
          {touched.password && errors.password && (
            <small>{errors.password}</small>
          )}

          {status && (
            <small style={{ color: "crimson" }}>{String(status)}</small>
          )}
          <button className={css.btn} type="submit" disabled={isSubmitting}>
            Register
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default RegistrationForm;