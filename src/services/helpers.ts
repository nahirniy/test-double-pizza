import { nanoid } from "nanoid";
import { IOrder, IPizza, Side } from "../types/types";

export const generateClass = (base: string, side: Side): string => {
  return `${base}${side === Side.Left ? "Left" : "Right"}`;
};

export const calculateTotalPrice = (leftPizza: IPizza, rightPizza: IPizza): number => {
  return Number(leftPizza.price) + Number(rightPizza.price);
};

export const selectPizza = (
  side: Side,
  leftPizza: IPizza,
  rightPizza: IPizza
): IPizza => {
  return side === Side.Left ? leftPizza : rightPizza;
};

export const createOrder = (
  leftPizza: IPizza,
  rightPizza: IPizza,
  price: number
): IOrder => {
  return {
    leftPizzaTitle: leftPizza.title,
    rightPizzaTitle: rightPizza.title,
    price,
    id: nanoid(),
  };
};
