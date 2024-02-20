import Header from "./Header/Header";
import Pizza from "./Pizza/Pizza";
import { IOrder } from "../types/types";
import { useState } from "react";

function App() {
  const [orders, setOrders] = useState<IOrder[]>([]);

  const updateOrders = (order: IOrder) => {
    setOrders((prevOrders) => [...prevOrders, order]);
  };

  return (
    <>
      <Header orders={orders} />
      <Pizza updateOrders={updateOrders} />
    </>
  );
}

export default App;
