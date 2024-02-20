import { useState } from "react";
import { Direction, IPizza, Side } from "../types/types";
import { pizza as pizzaArr } from "../data";

interface PizzaHookResult {
  leftPizza: IPizza;
  rightPizza: IPizza;
  setPizza: (pizza: IPizza, direction: Direction, side: Side) => void;
}

const usePizza = (defaultPizza: IPizza): PizzaHookResult => {
  const [leftPizza, setLeftPizza] = useState(defaultPizza);
  const [rightPizza, setRightPizza] = useState(defaultPizza);

  const setPizza = (pizza: IPizza, direction: Direction, side: Side): void => {
    const leftSide = side === Side.Left;
    const arrowUp = direction === Direction.Up;
    const firstPizza = pizzaArr[0];
    const lastPizza = pizzaArr[pizzaArr.length - 1];
    const totalPizza = pizzaArr.length - 1;

    const setCurrentPizza = leftSide ? setLeftPizza : setRightPizza;

    const oldIndex = pizzaArr.findIndex(({ id }) => id === pizza.id);
    const updateIndex = arrowUp ? oldIndex + 1 : oldIndex - 1;

    if (updateIndex < 0) return setCurrentPizza(lastPizza);
    if (updateIndex > totalPizza) return setCurrentPizza(firstPizza);

    const currentPizza = pizzaArr.find((_, index) => updateIndex === index);

    if (!currentPizza) throw new Error("Pizza not found");

    setCurrentPizza(currentPizza);
  };

  return { leftPizza, rightPizza, setPizza };
};

export default usePizza;
