import { FC } from "react";

import { Direction, IPizza, Side } from "../../types/types";
import s from "./SidePizza.module.css";
import { generateClass } from "../../services/helpers";
import ButtonArrow from "../ButtonArrow/ButtonArrow";

interface SidePizzaProps {
  side: Side;
  pizza: IPizza;
  updatePizza: (direction: Direction, side: Side) => void;
}

const SidePizza: FC<SidePizzaProps> = ({ side, pizza, updatePizza }) => {
  const galleryBox = generateClass("galleryBox", side);
  const box = generateClass("box", side);

  const { title, desc, price, diameter } = pizza;

  const upgradePrice = Number(price).toFixed(2);

  return (
    <div className={s[box]}>
      <h2 className={s.title}>{title}</h2>
      <p className={s.description}>{desc}</p>
      <div className={s.wrap}>
        <ButtonArrow
          side={side}
          direction={Direction.Up}
          updatePizza={updatePizza}
        />
        <div className={s[galleryBox]}>
          <img src={pizza.photo} alt={pizza.title} />
        </div>
        <ButtonArrow
          side={side}
          direction={Direction.Dowm}
          updatePizza={updatePizza}
        />
      </div>
      <p>{diameter}</p>
      <p className={s.price}>Price: ${upgradePrice}</p>
    </div>
  );
};

export default SidePizza;
