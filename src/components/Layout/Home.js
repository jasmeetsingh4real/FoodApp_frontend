import "./Home.css";
import bgImg from "../../Images/homeBG.jpg";
import { Link } from "react-router-dom";
import RestorentCard from "./RestorentCard";
import res1 from "../../Images/res1.jpg";
import res2 from "../../Images/res2.jpg";
import res3 from "../../Images/res3.jpg";
import res4 from "../../Images/res4.jpg";
import dish from "../../Images/dish.jpg";
const Home = () => {
  return (
    <>
      <div className="HomePage_header">
        <div className="HomePage_header_heading">
          FOOD APP
          <p>Delitious Food To Your Doorsteps...</p>{" "}
        </div>
      </div>
      <div className="primary_navBar">
        <div>Home</div>
        <div>Special Offers</div>
        <div>Contact Us</div>
        <Link to="/" className="logout">
          <div>Logout</div>
        </Link>
      </div>
      <h2 className="Home_subHeading">Restaurents List:</h2>
      <div className="Res_cards">
        <RestorentCard
          img={res1}
          res_name="Restaurent One"
          resDesc="Newly opened multicuisine SUKKUN Restaurant in Jaggi city center, Ambala. One of the amazing restaurants in terms of food taste and ambiance. In Dec, I was indulged in one of my family function where the banquet hall accommodated approx 50 of our guests easily, it was a wow experience, excellent quality of food"
        />
        <RestorentCard
          img={res2}
          res_name="Restaurent Two"
          resDesc="Newly opened multicuisine SUKKUN Restaurant in Jaggi city center, Ambala. One of the amazing restaurants in terms of food taste and ambiance. In Dec, I was indulged in one of my family function where the banquet hall accommodated approx 50 of our guests easily, it was a wow experience, excellent quality of food"
        />
        <RestorentCard
          img={res3}
          res_name="Restaurent Three"
          resDesc="Newly opened multicuisine SUKKUN Restaurant in Jaggi city center, Ambala. One of the amazing restaurants in terms of food taste and ambiance. In Dec, I was indulged in one of my family function where the banquet hall accommodated approx 50 of our guests easily, it was a wow experience, excellent quality of food"
        />
        <RestorentCard
          img={res4}
          res_name="Restaurent Four"
          resDesc="Newly opened multicuisine SUKKUN Restaurant in Jaggi city center, Ambala. One of the amazing restaurants in terms of food taste and ambiance. In Dec, I was indulged in one of my family function where the banquet hall accommodated approx 50 of our guests easily, it was a wow experience, excellent quality of food"
        />
      </div>

      <div className="features">
        <div className="feature_item">
          <div className="f_img">
            <img src={dish} alt="" />
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium
            officia vitae rem distinctio, porro id ab enim aut eveniet repellat
            nisi m
          </p>
        </div>
        <div className="feature_item">
          <div className="f_img">
            <img src={dish} alt="" />
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium
            officia vitae rem distinctio, porro id ab enim aut eveniet repellat
            nisi m
          </p>
        </div>
        <div className="feature_item">
          <div className="f_img">
            <img src={dish} alt="" />
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium
            officia vitae rem distinctio, porro id ab enim aut eveniet repellat
            nisi m
          </p>
        </div>
        <div className="feature_item">
          <div className="f_img">
            <img src={dish} alt="" />
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium
            officia vitae rem distinctio, porro id ab enim aut eveniet repellat
            nisi m
          </p>
        </div>
      </div>

      <footer>copyright- foodapp</footer>
    </>
  );
};

export default Home;
