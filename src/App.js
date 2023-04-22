





import { useForm } from "react-hook-form";
import React from "react";
import './App.css';

function App() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  
  const onSubmit = (data) => {
   
    // Handle form submission
    console.log(data); // Example: Log form data to console
  };
  return (
    <div className="container row-cols-2 row-cols-md-2 row-cols-lg-2">
      <div className="text-center container  row-cols-2 row-cols-md-2 row-cols-lg-2">
        <img src="facebook.svg" alt="" className="" width="250" height="250" />
      </div>
      <div className="shadow-lg rounded-3 bg-light-subtle position-absolute top-50 start-50 translate-middle px-2" style={{ width: "400px" }}>
        <form className="px-2"onSubmit={handleSubmit(onSubmit)} >
          <p className="fs-4 text-center mt-3 main">Log in to Facebook</p>
          <input className="form-control rounded-2 mt-1" type="text" placeholder="Email or phone number" aria-label=".form-control-sm example"  style={{ padding: "11px" }}  {...register("email", { required: "Email is required", pattern: { value: /^\S+@\S+$/i, message: "Invalid email address" } })}/>
          {errors.email && <p>{errors.email.message}</p>}
          <input className="form-control rounded-2 mt-2" type="password" placeholder="Password" aria-label=".form-control-sm example"  style={{ padding: "11px" }} {...register("password", { required: "Password is required", minLength: { value: 6, message: "Password must be at least 6 characters" } })} />
          {errors.password && <p>{errors.password.message}</p>}
          <button   className="bg-primary rounded-2 mt-2 form-control rounded-1 text-light fw-semibold" style={{ padding: "11px" }}>Log in</button>
          <h6 className="text-primary mb-4 mt-2 ps-4">
            <a href="111" className="pe-3 text-decoration-none">Forgotten account?</a>
            <a href="11" className="text-decoration-none">Sign up for Facebook</a>
          </h6>
        </form>
      </div>
    </div>
  );
}

export default App;


  