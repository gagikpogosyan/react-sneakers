import React from "react";
import { Link } from "react-router-dom";

import Card from "../components/Card";
import AppContext from "../context";

function Favourites({ onAddToFavourite }) {
  const { favourites } = React.useContext(AppContext);

  return (
    <div className="content p-40">
      <div className="d-flex align-center justify-between mb-40">
        <h1>Мои закладки</h1>
      </div>

      {favourites.length > 0 ? (
        <div className="d-flex flex-wrap cards">
          {favourites.map((item, index) => (
            <Card
              key={index}
              favourited={true}
              onFavourite={onAddToFavourite}
              {...item}
            />
          ))}
        </div>
      ) : (
        <div className="empty">
          <img src="img/sad-smile.png" alt="sad-smile" className="smile" />
          <h2>Закладок нет :( </h2>
          <p>Вы ничего не добавляли в закладки</p>
          <Link to="/">
            <button className="greenButton">
              <img src="img/arrow.svg" alt="Arrow" />
              Вернуться назад
            </button>
          </Link>
        </div>
      )}
    </div>
  );
}

export default Favourites;
