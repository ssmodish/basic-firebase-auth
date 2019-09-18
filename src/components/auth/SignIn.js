import React from "react";
import useSignInForm from "./useSignInForm";

const SignIn = () => {
  const { inputs, handleInputChange, handleSubmit } = useSignInForm();

  return (
    <div className="container">
      <h5>Sign In</h5>

      <form onSubmit={handleSubmit}>
        <div>
          <label>Email Address</label>
          <input
            type="email"
            name="email"
            onChange={handleInputChange}
            value={inputs.email}
            required
          />
        </div>
        <div>
          <label>Password</label>
          <input
            type="password"
            name="password1"
            onChange={handleInputChange}
            value={inputs.password1}
            required
          />
        </div>
        <button type="submit">Sign In</button>
      </form>
    </div>
  );
};

export default SignIn;
