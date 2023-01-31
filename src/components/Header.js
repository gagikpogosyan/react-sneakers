import React from "react";
import { Link } from "react-router-dom";

import { useCart } from "../hooks/useCart";

function Header(props) {
  const { totalPrice } = useCart();
  return (
    <header className="d-flex justify-between align-center p-40">
      <Link to="/">
        <div className="d-flex align-center">
          <img width={40} height={40} src="img/logo.png" alt="logo" />
          <div className="headerInfo">
            <h3 className="text-uppercase">react sneakers</h3>
            <p>Магазин кроссовок</p>
          </div>
        </div>
      </Link>

      <ul className="d-flex">
        <li onClick={props.onClickCart} className="mr-30 cu-p">
          <img width={20} height={20} src="img/cart.svg" alt="Корзина" />
          <span>{totalPrice} руб.</span>
        </li>
        <li className="mr-20 cu-p">
          <Link to="/favourites">
            <img width={20} height={20} src="img/heart.svg" alt="Закладки" />
          </Link>
          <Link to="/orders">
            <img
              width={20}
              height={20}
              src="img/user.svg"
              alt="Пользователь"
            />
          </Link>
        </li>
      </ul>
    </header>
  );
}

export default Header;