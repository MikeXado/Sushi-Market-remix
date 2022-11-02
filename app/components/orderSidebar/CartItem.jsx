import { Form } from "@remix-run/react";
import { useState, useEffect } from "react";

function CartItem({ produce }) {
  const [total, setTotal] = useState(0);
  useEffect(() => {
    let count = produce.qty * produce.price;
    setTotal(count);
  }, [produce]);

  return (
    <div className="cart-item">
      <picture>
        <source type="image/webp" srcSet={produce?.webp} />
        <img src={produce?.img} alt="" />
      </picture>
      <div className="cart-item__info">
        <div className="cart-item__name">
          {produce?.name.length > 6
            ? produce?.name.substring(0, 14) + "..."
            : produce?.name}{" "}
        </div>
        <Form method="post">
          <div className="cart-item__price-qty price-qty">
            <div className="price-qty__qty">
              <input type="hidden" name="cartProductId" value={produce.id} />
              <button
                type="submit"
                name="_action"
                value="decrementCartQty"
                className="qty-control minus"
              >
                -
              </button>{" "}
              {produce?.qty}{" "}
              <button
                type="submit"
                name="_action"
                value="incrementCartQty"
                className="qty-control plus"
              >
                +
              </button>
            </div>

            <div className="price-qty__price">{total} COM</div>
          </div>
        </Form>
      </div>
    </div>
  );
}

export default CartItem;
