import { Link } from "react-router-dom";
import "./LoginPage.css";
const CreateAccount = () => {
  return (
    <>
      <div className="LoginPage">
        <div className="LoginPage_container_header">
          <Link to="/login">
            <span>login to Food App?</span>
          </Link>
        </div>
        <div className="LoginPage_container">
          <div className="LoginPage_credentials">
            <span className="foodapp">Create Account</span>
            <br />
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Enter Your Name"
              required
            />
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
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Re-Enter Password"
              required
            />{" "}
            <br />
            <button className="login_btn">Create Account</button>{" "}
          </div>
        </div>
      </div>
    </>
  );
};

export default CreateAccount;
