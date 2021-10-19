import {
  faGoogle,
  faGooglePlusSquare,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useHistory } from "react-router";
import useAuth from "../../hooks/useAuth";
import "./Login.css";
const Login = () => {
  let history = useHistory();
  const {
    handleGoogleSignIn,
    handleRegistration,
    isLogin,
    handleEmailChange,
    handlePasswordChange,
    toggleLogin,
    user,
    error,
    handleResetPassword,
  } = useAuth();
  // console.log(user);
  return (
    <div className="form-container d-flex justify-content-center align-items-center">
      <div className="mx-5 my-2">
        <form className="container" onSubmit={handleRegistration}>
          <h3 className="text-primary">
            Please {isLogin ? "Login" : "Register"}
          </h3>
          <div className="row mb-3">
            <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">
              Email
            </label>
            <div className="col-sm-10">
              <input
                onBlur={handleEmailChange}
                type="email"
                className="form-control"
                id="inputEmail3"
                required
              />
            </div>
          </div>
          <div className="row mb-3">
            <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">
              Password
            </label>
            <div className="col-sm-10">
              <input
                onBlur={handlePasswordChange}
                type="password"
                className="form-control"
                id="inputPassword3"
                required
              />
            </div>
          </div>
          <div className="row mb-3">
            <div className="col-sm-10 offset-sm-2">
              <div className="form-check">
                <input
                  onChange={toggleLogin}
                  className="form-check-input"
                  type="checkbox"
                  id="gridCheck1"
                />
                <label className="form-check-label" htmlFor="gridCheck1">
                  Already Registered?
                </label>
              </div>
            </div>
          </div>
          <div className="row mb-3 text-danger">{error}</div>
          <button type="submit" className="btn btn-primary me-2">
            {isLogin ? "Login" : "Register"}
          </button>
          <button
            onClick={handleResetPassword}
            type="button"
            className="btn btn-secondary btn-sm"
          >
            Reset Password
          </button>
        </form>
        <br />
        {/* <div>
          <hr className="w-100" />
        </div> */}
        <div>--------------------------------------------------------</div>
        <button
          className="btn btn-success p-2 fw-bold fs-5 text-white"
          onClick={handleGoogleSignIn}
        >
          <span className="pe-2 text-white">
            <FontAwesomeIcon icon={faGoogle} />
          </span>
          Google Sign In
        </button>
      </div>
    </div>
  );
};

export default Login;
