import React, { Fragment, useState } from "react";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  //destructuring
  const { email, password } = formData;

  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = e => {
    e.preventDefault();
      console.log('Submit works ', formData);
  };

  return (
    <Fragment>
      <div className="container">
        <div className="row">
          <div className="col-md-8 m-auto">
            <h1 className="display-4 text-center">Log In</h1>
            <p className="lead text-center">Sign in to your account</p>
            <form className="form" onSubmit={e => onSubmit(e)}>
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
              <input
                type="submit"
                className="btn btn-info btn-block mt-4"
                value="Login"
              />
            </form>
          </div>
        </div>
      </div>

    </Fragment>
  );
};

export default Login;

/**
 * NOTES:
 * https://reactjs.org/docs/hooks-state.html
 * 
 * 
 */