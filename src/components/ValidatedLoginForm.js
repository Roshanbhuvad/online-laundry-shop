import React from "react";
import { Formik } from "formik";
//import * as EmailValidator from "email-validator";
import * as Yup from "yup";
const ValidatedLoginForm = () => (
  <Formik
    initialValues={{ phoneNumber: "", password: "" }}
    onSubmit={(values, { setSubmitting }) => {
      setTimeout(() => {
        console.log("Logging in", values);
        setSubmitting(false);
      }, 500);
    }
  }

    validationSchema={Yup.object().shape({
      phoneNumber: Yup.number()
        .phoneNumber()
        .required("Required"),
      password: Yup.string()
        .required("No password provided.")
        .min(8, "Password is too short - should be 8 chars minimum.")
        .matches(/(?=.*[0-9])/, "Password must contain a number.")
    })}
  >
    {props => {
      const {
        values,
        touched,
        errors,
        isSubmitting,
        handleChange,
        handleBlur,
        handleSubmit
      } = props;
      return (
        <form onSubmit={handleSubmit}>
          <label htmlFor="phoneNumber">Phone Number </label>
          <input
            name="phoneNumber"
            type="number"
            placeholder="Enter your registered Mobile Number"
            value={values.phoneNumber}
            onChange={handleChange}
            onBlur={handleBlur}
            className={errors.phoneNumber && touched.phoneNumber && "error"}
          />
          {errors.phoneNumber && touched.phoneNumber && (
            <div className="input-feedback">{errors.email}</div>
          )}
          <label htmlFor=password">Password</label>
          <input
            name="password"
            type="password"
            placeholder="Enter your password"
            value={values.password}
            onChange={handleChange}
            onBlur={handleBlur}
            className={errors.password && touched.password && "error"}
          />
          {errors.password && touched.password && (
            <div className="input-feedback">{errors.password}</div>
          )}
          <button type="submit" disabled={isSubmitting}>
            Sign in
          </button>
        </form>
      );
    }}
  </Formik>
);

export default ValidatedLoginForm;
