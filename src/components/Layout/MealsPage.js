import CartProvider from "../../store/CartProvider";
import Header from "./Header";
import Meals from "../Meals/Meals";
import { useState } from "react";
import Cart from "../../components/Cart/Cart";
const MealsPage = () => {
  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHandler = () => {
    setCartIsShown(true);
  };
  const hideCartHandler = () => {
    setCartIsShown(false);
  };

  return (
    <>
      <CartProvider>
        {cartIsShown && <Cart onClose={hideCartHandler} />}
        <Header onShowCart={showCartHandler} />
        <main>
          <Meals />
        </main>
      </CartProvider>
    </>
  );
};

export default MealsPage;
