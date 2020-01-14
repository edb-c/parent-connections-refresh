import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

const Landing = () => {
    return (
      <Fragment>
        <div className="landing">
        <div className="dark-overlay landing-inner text-light">
          <div className="container">
            <div className="row">
              <div className="col-md-12 text-center">
                <h1 className="display-3 mb-4">Parent Connections</h1>
                <p className="lead">
                  {' '}
                  Create a Parent profile, share posts and network
                  with other Parents
                </p>
                <hr />
                <Link to="/register" className="btn btn-lg btn-info mr-2">
                  Register
                </Link>
                <Link to="/login" className="btn btn-lg btn-light">
                  Login
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>  
    );
};

export default Landing;