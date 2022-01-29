import "./RestorentCard.css";
import { Link } from "react-router-dom";
const RestorentCard = (props) => {
  return (
    <>
      <div className="Res_card">
        <div className="resImg_container">
          <img src={props.img} alt="" />
        </div>
        <div className="rec_card_details">
          {" "}
          <h3>{props.res_name}</h3>
          <p>{props.resDesc}</p>
        </div>{" "}
        <Link to="/login/home/mealsPage">
          {" "}
          <button className="orderFood_btn">Order Food!</button>
        </Link>
      </div>
    </>
  );
};
export default RestorentCard;
