import { Form } from "@remix-run/react";

function ReviewsHeader() {
  return (
    <div className="reviews-header">
      <h1 className="reviews-header__title">Отзывы</h1>
      <Form method="post">
        <button
          type="submit"
          name="_action"
          value="checkIfLogIn"
          className="reviews-header__btn"
        >
          + Добавить отзыв
        </button>
      </Form>
    </div>
  );
}

export default ReviewsHeader;
