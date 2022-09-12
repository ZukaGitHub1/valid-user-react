import React from "react";
import "./Reg.css";
import { useFormik } from "formik";
import { Regschema } from "../../schema/valid.schema";
import { useNavigate } from "react-router-dom";



const Registration = () => { 
const navigate =  useNavigate();

const onSubmit = async (values, actions) => {
  await new Promise((val) => setTimeout(val, 1000));
  actions.resetForm();
  navigate('/main')
};
 
 
  const {
      values,
      errors,
      touched,
      isSubmitting,
      handleBlur,
      handleChange,
      handleSubmit  
    } = useFormik({
      initialValues: {
       username:"",
        email: "",
        age: "",
        password: "",
      },
      validationSchema: Regschema,
      onSubmit,
         
    });
    
     
   
    return (
      <div className='login-box'>
      <form onSubmit={handleSubmit} >
        <h1>Registration</h1>
         <div className="user-box">
        <label htmlFor="email">Email</label>
        <input
          value={values.email}
          onChange={handleChange}
          id="email"
          type="email"
          placeholder="Enter your email"
          onBlur={handleBlur}
          className={errors.email && touched.email ? "error" : "success"}
        />
      
         {errors.email && touched.email ? <div className="error">{errors.email}</div> : "" }
          </div>
          <div className="user-box">
        <label htmlFor="username">UserName</label>
        <input
          value={values.username}
          onChange={handleChange}
          id="username"
          type="username"
          placeholder="username"
          onBlur={handleBlur}
          className={errors.username && touched.username ? "error" : ""}
        />
       {errors.username && touched.username ? <div className="error">{errors.username}</div>: ""}
       </div>
       <div className="user-box">
        <label htmlFor="age">Age</label>
        <input
          id="age"
          type="number"
          placeholder="Enter your age"
          value={values.age}
          onChange={handleChange}
          onBlur={handleBlur}
          className={errors.age && touched.age ? "error" : ""}
        />
        {errors.age && touched.age ? <div className="error" >{errors.age}</div>: ""}
        </div>
         <div className="user-box">
        <label htmlFor="password">Password</label>
        <input
          id="password"
          type="password"
          placeholder="Enter your password"
          value={values.password}
          onChange={handleChange}
          onBlur={handleBlur}
          className={errors.password && touched.password ? "error" : ""}
        />
         
        {errors.password && touched.password ? <div className="error">{errors.password}</div> : ""}
        </div>
        <button disabled={isSubmitting} type="submit">
          Submit
        </button>
      </form>
      </div>
)
}
export default Registration;
