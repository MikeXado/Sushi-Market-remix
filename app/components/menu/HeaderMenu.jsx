import { Form, useSubmit } from "@remix-run/react";

function HeaderMenu({ category }) {
  const submit = useSubmit();

  return (
    <div id="menu" className="header-menu">
      <div className="header-menu__category-name">
        <picture>
          <source type="image/webp" srcSet={category?.webp} />
          <img src={category?.img} alt="category" />
        </picture>
        <div className="header-menu__category-title">{category?.text}</div>
      </div>
      <Form method="get" onChange={(e) => submit(e.currentTarget)}>
        <div className="header-menu__sort">
          <select name="sortBy" className="header-menu__select">
            <option value="id">По умолчанию</option>
            <option value="priceMax">Сначала дороже</option>
            <option value="priceMin">Сначала дешевле</option>
            <option value="partAmount">Количество кусочков</option>
            <option value="weight">Вес</option>
          </select>
        </div>
      </Form>
    </div>
  );
}

export default HeaderMenu;
