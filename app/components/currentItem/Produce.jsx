import { Form } from "@remix-run/react";
import { useState } from "react";

function Produce({ currentData }) {
  const [qty, setQty] = useState(0);

  const increment = () => {
    setQty((prev) => (prev < 20 ? prev + 1 : 20));
  };
  const decrement = () => {
    setQty((prev) => (prev >= 1 ? prev - 1 : 0));
  };

  return (
    <div className="produce">
      <div className="produce-content">
        <img src={currentData.img} alt={currentData.name} />
        <div className="produce-content__text text-produce">
          <div className="text-produce__name">{currentData.name}</div>
          <div className="text-produce__weight">
            {currentData.weight ? currentData.weight + " грамм" : ""}
          </div>
          <div className="text-produce__price price-produce">
            <div className="price-produce__price">{currentData.price} COM</div>
            <div className="price-produce__qty">
              <button className="increment part" onClick={decrement}>
                -
              </button>
              <div className="qty part">{qty}</div>
              <button className="decrement part" onClick={increment}>
                +
              </button>
            </div>
          </div>
          <Form method="post">
            <input type="hidden" name="productName" value={currentData.name} />
            <input
              type="hidden"
              name="productPrice"
              value={currentData.price}
            />
            <input type="hidden" name="productImg" value={currentData.img} />
            <input type="hidden" name="productWebp" value={currentData.webp} />
            <input type="hidden" name="productId" value={currentData.id} />
            <input type="hidden" name="productQty" value={qty} />
            <button type="submit" className="text-produce__btn">
              Хочу!
            </button>
          </Form>
        </div>
      </div>
    </div>
  );
}

export default Produce;
