import classes from "./Cart.module.css";
import Modal from "../UI/Modal";
import { useContext } from "react";
import CartContext from "../../store/cart-context";
import CartItem from "./CartItem";
const Cart = (props) => {
  const cartCtx = useContext(CartContext);

  const cartItemAddHandler = (item) => {
    cartCtx.addItem({ ...item, amount: 1 });
  };
  const cartItemRemoveHandler = (id) => {
    cartCtx.removeItem(id);
  };
  const cartitems = (
    <ul className={classes["cart-items"]}>
      {cartCtx.items.map((i) => (
        <CartItem
          key={i.id}
          name={i.name}
          amount={i.amount}
          price={i.price}
          onAdd={cartItemAddHandler.bind(null, i)}
          onRemove={cartItemRemoveHandler.bind(null, i.id)}
        />
      ))}
    </ul>
  );

  return (
    <Modal onClose={props.onClose}>
      {cartitems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>${cartCtx.totalAmount.toFixed(2)}</span>
      </div>
      <div className={classes.actions}>
        <button onClick={props.onClose} className={classes["button--alt"]}>
          Close
        </button>
        {cartCtx.items.length !== 0 && (
          <button className={classes.button}>Order</button>
        )}
      </div>
    </Modal>
  );
};
export default Cart;
