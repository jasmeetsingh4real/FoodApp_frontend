import { Link } from "react-router-dom";
import "./WelcomePage.css";
const WelcomePage = () => {
  return (
    <>
      <div className="welcomePage">
        <div className="welcomePage_container">
          <h1>WELCOME TO THE FOOD APP</h1>

          <h3>Delitious Food To Your Doorsteps!</h3>
          <Link className="WP_link" to="/login">
            continue...
          </Link>
        </div>
      </div>
    </>
  );
};
export default WelcomePage;
