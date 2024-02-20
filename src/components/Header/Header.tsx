import { FC, useState } from "react";
import { IOrder } from "../../types/types";
import s from "./Header.module.css";
import { CiShoppingBasket, CiPizza } from "react-icons/ci";
import Modal from "../Modal/Modal";

interface HeaderProps {
  orders: IOrder[];
}

const Header: FC<HeaderProps> = ({ orders }) => {
  const [modal, setModal] = useState(false);

  const openModal = () => setModal(true);
  const closeModal = () => setModal(false);

  return (
    <>
      <header className={s.header}>
        <div>
          <a href='/' className={s.link}>
            Double Pizza
            <CiPizza size={40} color='black' />
          </a>
        </div>
        <div>
          <button className={s.button} onClick={openModal}>
            <CiShoppingBasket size={40} color='black' />
          </button>
        </div>
      </header>
      {modal && <Modal orders={orders} closeModal={closeModal} />}
    </>
  );
};

export default Header;
