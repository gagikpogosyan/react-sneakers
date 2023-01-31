import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";

import Card from "../components/Card";

function Orders() {
  const [orders, setOrders] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    (async () => {
      try {
        const { data } = await axios.get(
          "https://639e22193542a26130578fa5.mockapi.io/orders"
        );
        setOrders(data.reduce((prev, obj) => [...prev, ...obj.items], []));
        setIsLoading(false);
      } catch (error) {
        alert("Ошибка при запросе заказов");
        console.error(error);
      }
    })();
  }, []);

  return (
    <div className="content p-40">
      <div className="d-flex align-center justify-between mb-40">
        <h1>Мои заказы</h1>
      </div>

      {orders.length > 0 ? (
        <div className="d-flex flex-wrap cards">
          {(isLoading ? [...Array(8)] : orders).map((item, index) => (
            <Card key={index} {...item} loading={isLoading} />
          ))}
        </div>
      ) : (
        <div className="empty">
          <img src="img/dreary-smile.png" alt="dreary-smile" className="smile" />
          <h2>У вас нет заказов</h2>
          <p>Оформите хотя бы один заказ.</p>
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

export default Orders;
