import { FC } from "react";
import s from "./Order.module.css";

interface OrderProps {
  totalPrice: number;
  addOrder: () => void;
}

const Order: FC<OrderProps> = ({ totalPrice, addOrder }) => {
  return (
    <div className={s.box}>
      <p className={s.price}>Summary Prise: {totalPrice.toFixed(2)}$</p>
      <button className={s.button} onClick={addOrder}>
        Add to Cart
      </button>
    </div>
  );
};

export default Order;
