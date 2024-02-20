export interface IPizza {
  title: string;
  desc: string;
  price: string;
  photo: string;
  diameter: string;
  id: number;
}

export interface IOrder {
  leftPizzaTitle: string;
  rightPizzaTitle: string;
  price: number;
  id: string;
}

export enum Side {
  Left = "Left",
  Right = "Right",
}

export enum Direction {
  Up = "Up",
  Dowm = "Dowm",
}
