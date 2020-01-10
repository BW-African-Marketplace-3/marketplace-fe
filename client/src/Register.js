import React from "react";
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";
import axios from "axios";
import "./css/index.css"; {/* ~~~~~ Styles for this component are located in 'auth.less' ~~~~~ */}

const RegisterForm = ({ values, errors, touched }) => {
  return (
    <div className="auth-form">
      <Form>
        <label>
          First Name
          <Field type="text" name="fname" placeholder="John" />
          {touched.fname && errors.fname && (
            <p className="errors">{errors.fname}</p>
          )}
        </label>

        <label>
          Last Name
          <Field type="text" name="lname" placeholder="Doe" />
          {touched.lname && errors.lname && (
            <p className="errors">{errors.lname}</p>
          )}
        </label>
        
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

        <label>
          Region
          <Field as="select" name="region">
            <option value="#">Region 1</option>
            <option value="#">Region 2</option>
            <option value="#">Region 3</option>
            <option value="#">Region 4</option>
            <option value="#">Region 5</option>
          </Field>
          {touched.region && errors.region && (
            <p className="errors">{errors.region}</p>
          )}
        </label>

        <label>
          Profile Picture
          <Field type="file" name="pfp" />
        </label>


        <button type="submit">Register</button>
      </Form>
    </div>
  );
};

const FormikRegisterForm = withFormik({
  mapPropsToValues(props) {
    return {
      fname: props.fname || "",
      lname: props.lname || "",
      email: props.email || "",
      password: props.password || "",
      region: props.region || ""
    //   pfp: props.pfp || ""
    };
  },
  validationSchema: Yup.object().shape({
    fname: Yup.string().required("Please Enter Your First Name"),
    lname: Yup.string().required("Please Enter Your Last Name"),
    email: Yup.string().required("Please Enter Your Email Address").email(),
    password: Yup.string().required("Please Enter Your Password"),
    region: Yup.string().required("Please Select Your"),
    
    // for password thing .matches(/^(?=.*[A-Za-z])(?=.*d)(?=.*[@$!%*#?&])[A-Za-zd@$!%*#?&]{8,}$/, "Password Must Be 8 Or More Characters Long And Contain At Least One Uppercase Letter, One Lowercase Letter, One Number, And One Special Character")
  }),
  handleSubmit(values, formikBag) {
    console.log("submitting", values);
    axios.post("https://reqres.in/api/users/", values).then(res => {
      console.log("Success", res);
    });
  }
})(RegisterForm);
export default FormikRegisterForm;
