import { Link } from "react-router-dom";
import "./LoginPage.css";
const LoginAsAdmin = () => {
  return (
    <>
      <div className="LoginPage">
        <div className="LoginPage_container_header">
          <Link to="/login">
            <span>login as user?</span>
          </Link>
        </div>
        <div className="LoginPage_container">
          <div className="LoginPage_credentials">
            <span className="foodapp">Login As Admin</span>
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
            <Link to="adminPannel">
              <button className="login_btn">Login</button>{" "}
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginAsAdmin;
