import { Form } from "@remix-run/react";

function CardItem({ card }) {
  return (
    <div className="cards-item">
      <Form method="post">
        <input type="hidden" name="cardName" value={card.id} />
        <button
          type="submit"
          name="_action"
          className="cards-item__singlepage-btn"
          value="getCurrentProduct"
        >
          <picture>
            <source
              type="image/webp"
              srcSet={card.webp}
              width={card.aspectRatioW}
              height={card.aspectRatioH}
            />
            <img
              src={card.img}
              alt={card.name}
              width={card.aspectRatioW}
              height={card.aspectRatioH}
            />
          </picture>
          <div className="cards-item__title">{card.name}</div>
          <div className="cards-item__description">{card.desc}</div>
        </button>
      </Form>
      <div className="cards-item__horizontal-line"></div>
      <div className="cards-item__price-button">
        <div className="cards-item__price">{card.price + " COM"}</div>
        <Form method="post">
          <input type="hidden" name="productName" value={card.name} />
          <input type="hidden" name="productPrice" value={card.price} />
          <input type="hidden" name="productImg" value={card.img} />
          <input type="hidden" name="productWebp" value={card.webp} />
          <input type="hidden" name="productId" value={card.id} />
          <button
            type="submit"
            name="_action"
            value="addToCart"
            className="cards-item__order-btn"
          >
            Хочу!
          </button>
        </Form>
      </div>
    </div>
  );
}

export default CardItem;
