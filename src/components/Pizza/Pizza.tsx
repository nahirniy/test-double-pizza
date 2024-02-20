import { FC, useEffect, useState } from "react";

import { Direction, IOrder, Side } from "../../types/types";
import SidePizza from "../SidePizza/SidePizza";
import s from "./Pizza.module.css";
import { defaultPizza } from "../../services/defaultValues";
import { calculateTotalPrice, createOrder, selectPizza } from "../../services/helpers";
import usePizza from "../../hooks/usePizza";
import Order from "../Order/Order";

interface PizzaProps {
  updateOrders: (order: IOrder) => void;
}

const Pizza: FC<PizzaProps> = ({ updateOrders }) => {
  const [totalPrice, setTotalPice] = useState(0);
  const { leftPizza, rightPizza, setPizza } = usePizza(defaultPizza);

  useEffect(() => {
    const totalPrice = calculateTotalPrice(leftPizza, rightPizza);

    setTotalPice(totalPrice);
  }, [leftPizza, rightPizza]);

  const updatePizza = (direction: Direction, side: Side) => {
    const pizza = selectPizza(side, leftPizza, rightPizza);

    setPizza(pizza, direction, side);
  };

  const addOrder = () => {
    const order = createOrder(leftPizza, rightPizza, totalPrice);

    updateOrders(order);
    alert("Pizza added to basket successful");
  };

  return (
    <>
      <div className={s.wrapper}>
        <SidePizza side={Side.Left} pizza={leftPizza} updatePizza={updatePizza} />
        <SidePizza side={Side.Right} pizza={rightPizza} updatePizza={updatePizza} />
      </div>
      <Order totalPrice={totalPrice} addOrder={addOrder} />
    </>
  );
};

export default Pizza;
