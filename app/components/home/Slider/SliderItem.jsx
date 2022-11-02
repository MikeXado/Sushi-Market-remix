import { Form } from "@remix-run/react";

function SliderItem({ produce }) {
  return (
    <div className="new-item">
      <Form method="post">
        <input type="hidden" name="currentId" value={produce.id} />
        <button type="submit" name="_action" value="getCurrentClickedProduct">
          <picture>
            <source type="image/webp" srcSet={produce.webp} />
            <img src={produce.img} alt={produce.name} />
          </picture>
          <div className="new-item__title">{produce.name}</div>
          <div className="new-item__description">{produce.desc}</div>
        </button>
      </Form>
      <div className="new-item__horizontal-line"></div>
      <div className="new-item__price-button">
        <div className="new-item__price">{produce.price} COM</div>
        <Form method="post">
          <input type="hidden" name="productName" value={produce.name} />
          <input type="hidden" name="productPrice" value={produce.price} />
          <input type="hidden" name="productImg" value={produce.img} />
          <input type="hidden" name="productWebp" value={produce.webp} />
          <input type="hidden" name="productId" value={produce.id} />
          <button type="submit" className="new-item__order-btn">
            Хочу!
          </button>
        </Form>
      </div>
    </div>
  );
}

export default SliderItem;
