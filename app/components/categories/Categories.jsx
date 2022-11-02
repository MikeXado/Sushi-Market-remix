import { Form } from "@remix-run/react";
function Categories({ category }) {
  return (
    <Form method="post" className="categ-item__content">
      <input type="hidden" name="categId" value={category.id}></input>
      <input type="hidden" name="categImg" value={category.img} />
      <input type="hidden" name="categWebp" value={category.webp} />
      <input type="hidden" name="categText" value={category.text} />
      <button
        className="categ-item__content"
        name="_action"
        value="displayMenu"
      >
        <picture>
          <source type="image/webp" srcSet={category.webp} />
          <img
            src={category.img}
            alt={category.text}
            className="categ-item__img"
          />
        </picture>
        <div
          className={"categ-item__text" + (!category.inStock ? " soon" : "")}
        >
          {category.text}
        </div>
      </button>
    </Form>
  );
}

export default Categories;
