import { Form } from "@remix-run/react";
import { useEffect, useState } from "react";
import CartItem from "./CartItem";

function Cart({ cartData }) {
  const [total, setTotal] = useState(0);
  useEffect(() => {
    let count = 0;
    cartData.forEach((el) => {
      count += el.qty * el.price;
    });
    setTotal(count);
  }, [cartData]);
  return (
    <div className="cart">
      <div
        className="cart-content__empty empty-cart"
        style={{
          display: "block",
          ...(cartData.length !== 0 ? { display: "none" } : {}),
        }}
      >
        <div className="empty-cart__message">
          <div className="empty-cart__text">Ваша корзина пуста.</div>
          <div className="empty-cart__subtitle">
            Добавьте же скорее что-нибудь!
          </div>
        </div>
        <div className="empty-cart__free-deliver-message">
          Бесплатная доставка от 800 СОМ
        </div>
      </div>
      {cartData.length !== 0 && (
        <div className="cart-content">
          <div className="cart-content__title">Корзина</div>
          <div className="cart-content__items">
            {cartData.map((produce) => {
              return <CartItem key={produce.id} produce={produce} />;
            })}
          </div>
          <Form method="post">
            <button
              type="submit"
              name="_action"
              value="removeAllProducts"
              className="remove-produce"
              //Here button to remove from cart
            >
              Стереть корзину!
            </button>
          </Form>
          <div className="cart-content__confirm-order confirm-order">
            <div className="confirm-order__price">{total} COM</div>
            <button className="confirm-order__confirm-btn">Оформить</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Cart;
