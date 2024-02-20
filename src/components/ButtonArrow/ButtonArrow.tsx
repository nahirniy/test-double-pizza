import { FC } from "react";
import s from "./ButtonArrow.module.css";
import { Direction, Side } from "../../types/types";
import { generateClass } from "../../services/helpers";
import { FaArrowDown, FaArrowUp } from "react-icons/fa";

interface ButtonArrowProps {
  side: Side;
  direction: Direction;
  updatePizza: (direction: Direction, side: Side) => void;
}
const ButtonArrow: FC<ButtonArrowProps> = ({
  side,
  direction,
  updatePizza,
}) => {
  const btnUp = generateClass("btnUp", side);
  const btnDown = generateClass("btnDown", side);

  const arrowUp = direction === Direction.Up;

  return (
    <button
      className={`${arrowUp ? s[btnUp] : s[btnDown]} ${s.button}`}
      onClick={() => updatePizza(direction, side)}>
      {arrowUp ? <FaArrowUp /> : <FaArrowDown />}
    </button>
  );
};

export default ButtonArrow;
