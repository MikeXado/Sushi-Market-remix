import React, { useState } from "react";

export default React.memo(function OrderMoreInfo() {
  const [isGradient, setIsGradient] = useState(false);

  const handleGradient = () => {
    setIsGradient((prev) => !prev);
  };
  return (
    <div className="order-more-info">
      <div className="order-info">
        <div
          className="order-info__text text-order"
          style={{
            color: "#a4acad",
            ...(isGradient ? { color: "#000" } : {}),
          }}
        >
          <h1 className="text-order__title">Заказать суши в Бишкеке</h1>
          <p className="text-order__subtitle">
            Ресторан “Суши и Лапша” предлагаем своим клиентам самые вкусные суши
            с доставкой на дом, приготовленные по классическим и адаптированным
            к европейской аудитории рецептам, а также собственным наработкам
            наших поваров. Мы ценим время наших клиентов, поэтому вы можете
            заказать суши в Харькове с доставкой на дом или в офис.
          </p>
          <div className="text-order__type-sushi">
            В нашем меню более 20 видов суши:
          </div>
          <ul className="text-order__list-body">
            <li className="text-order__list">
              Классические с сырым лососем, тунцом, окунем.
            </li>
            <li className="text-order__list">
              Экзотические с тигровой креветкой, морским гребешком.
            </li>
            <li className="text-order__list">
              Пикантные с копченым лососем, угрем.
            </li>
          </ul>
          <p className="text-order__subtitle">
            В меню также представлены гунканы: с начинкой из красной икры и
            тобико, а также феликсы, где японский майонез сочетается с рыбой,
            морепродуктами, угрем. Любители острых блюд могут купить суши с
            соусом спайси. Популярные начинки — копченая курица, снежный краб,
            креветки, гребешки, тунец, лосось и окунь.
          </p>
          <div
            className="gradientback"
            style={{
              display: "block",
              ...(isGradient ? { display: "none" } : {}),
            }}
          ></div>
        </div>
        <button className="order-info__btn" onClick={handleGradient}>
          Подробнее
        </button>
      </div>
    </div>
  );
});
