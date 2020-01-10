import React from "react";
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";
import axios from "axios";
import "./css/index.css"; {/* ~~~~~ Styles for this component are located in 'auth.less' ~~~~~ */}

const LoginForm = ({ values, errors, touched }) => {
  return (
    <div className="auth-form">
      <Form>
        <label>
          Email
          <Field type="email" name="email" placeholder="john.doe@funnymail.com" />
          {touched.email && errors.email && (
            <p className="errors">{errors.email}</p>
          )}
        </label>

        <label>
          Password
          <Field type="password" name="password" placeholder="Password" />
          {touched.password && errors.password && (
            <p className="errors">{errors.password}</p>
          )}
        </label>

        <button type="submit">Register</button>
      </Form>
    </div>
  );
};

const FormikLoginForm = withFormik({
  mapPropsToValues(props) {
    return {
      email: props.email || "",
      password: props.password || ""
    };
  },
  validationSchema: Yup.object().shape({
    email: Yup.string().required("Please Enter Your Email Address").email(),
    password: Yup.string().required("Please Enter Your Password")
    
    // for password thing .matches(/^(?=.*[A-Za-z])(?=.*d)(?=.*[@$!%*#?&])[A-Za-zd@$!%*#?&]{8,}$/, "Password Must Be 8 Or More Characters Long And Contain At Least One Uppercase Letter, One Lowercase Letter, One Number, And One Special Character")
  }),
  handleSubmit(values, formikBag) {
    console.log("submitting", values);
    axios.post("https://reqres.in/api/users/", values).then(res => {
      console.log("Success", res);
    });
  }
})(LoginForm);
export default FormikLoginForm;
