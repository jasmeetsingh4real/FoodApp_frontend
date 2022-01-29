import { Link } from "react-router-dom";
import "./LoginPage.css";
const LoginPage = () => {
  return (
    <>
      <div className="LoginPage">
        <div className="LoginPage_container_header">
          <Link to="/createAccount">
            <span>don't have an account? /</span>
          </Link>
          <Link to="loginasadmin">
            <span>login as admin?</span>
          </Link>
        </div>
        <div className="LoginPage_container">
          <div className="LoginPage_credentials">
            <span className="loginto">Login to </span>
            <span className="foodapp">FOOD APP</span>
            <br />
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Enter Email"
              required
            />
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Enter Password"
              required
            />{" "}
            <br />
            <Link to="home">
              <button className="login_btn">Login</button>{" "}
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
