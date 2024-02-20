import { FC } from "react";
tyimport { createPortal } from "react-dom";
import { IOrder } from "../../types/types";
import s from "./Modal.module.css";

const modalRoot = document.getElementById("modal-root");

interface ModalProps {
  orders: IOrder[];
  closeModal: () => void;
}

const Modal: FC<ModalProps> = ({ orders, closeModal }) => {
  if (!modalRoot) throw new Error("Modal element not found in the page");

  const elements = orders.map(({ leftPizzaTitle, rightPizzaTitle, price, id }) => (
    <li key={id} className={s.item}>
      <div>
        <p>{leftPizzaTitle}</p>
        <p>{rightPizzaTitle}</p>
      </div>
      <div>
        <p>{price.toFixed(2)}$</p>
      </div>
    </li>
  ));

  return createPortal(
    <div className={s.overley}>
      <div className={s.modal}>
        <ul className={s.list}>{elements}</ul>
        <div className={s.btnWrap}>
          <button className={s.orderBtn} onClick={closeModal}>
            Order
          </button>
          <button className={s.canselBtn} onClick={closeModal}>
            Cancel
          </button>
        </div>
        <button className={s.closeBtn} onClick={closeModal}>
          X
        </button>
      </div>
    </div>,
    modalRoot
  );
};

export default Modal;
