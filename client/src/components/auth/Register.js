import React, { Fragment, useState } from "react";

const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    password2: ""
  });

  //destructuring
  const { name, email, password, password2 } = formData;

  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = e => {
    e.preventDefault();
    if (password !== password2) {
      console.log("Passwords do not match");
    } else {
      console.log(formData);
    }
  };

  return (
    <Fragment>
      <div className="container">
        <div className="row">
          <div className="col-md-8 m-auto">
            <h1 className="display-4 text-center">Register for an Account</h1>
            <p className="lead text-center">Create your account</p>
            <form className="form" onSubmit={e => onSubmit(e)}>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control form-control-lg"
                  placeholder="Name"
                  name="name"
                  value={name}
                  onChange={e => onChange(e)}
                  required
                />
              </div>
              <div className="form-group">
                <input
                  type="email"
                  className="form-control form-control-lg"
                  placeholder="Email Address"
                  autoComplete="email-address"
                  name="email"
                  value={email}
                  onChange={e => onChange(e)}
                  required
                />
              </div>
              <div className="form-group">
                <input
                  type="password"
                  className="form-control form-control-lg"
                  placeholder="Password"
                  autoComplete="current-password"
                  name="password"
                  value={password}
                  onChange={e => onChange(e)}
                  minLength="6"
                />
              </div>
              <div className="form-group">
                <input
                  type="password"
                  className="form-control form-control-lg"
                  placeholder="Confirm Password"
                  autoComplete="confirm-password"
                  name="password2"
                  value={password2}
                  onChange={e => onChange(e)}
                  minLength="6"
                />
              </div>
              <input
                type="submit"
                className="btn btn-info btn-block mt-4"
                value="Register"
              />
            </form>
          </div>
        </div>
      </div>

    </Fragment>
  );
};

export default Register;

/**
 * NOTES:
 * https://reactjs.org/docs/hooks-state.html
 * 
 * 
 */