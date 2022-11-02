import { Form, useTransition, Link } from "@remix-run/react";

import { addReview } from "../../utils/firebase.server.js";
export const action = async ({ request }) => {
  const formData = await request.formData();

  let title = formData.get("title");
  let review = formData.get("review");
  let date = formData.get("date");

  return await addReview(title, date, review);
};

function ReviewsPopup() {
  const transition = useTransition();
  let today = new Date();
  let dd = String(today.getDate()).padStart(2, "0");
  let mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
  let yyyy = today.getFullYear();

  let date = dd + "." + mm + "." + yyyy;

  return (
    <div className="reviews-popup">
      <div className="reviews-popup__close">
        <Link to="/reviews">
          {" "}
          <button></button>
        </Link>
      </div>
      <Form method="post" className="reviews-form">
        <div className="form-text">Ведите свое имя:</div>
        <input type="text" name="title" placeholder="e.g Михаил" />
        <div className="form-text comment">Коментарий</div>
        <textarea type="text" name="review" placeholder="коментарий..." />
        <input type="hidden" name="date" value={date} />
        <div className="reviews-btn">
          <button type="submit" name="_action" value="addReview">
            {transition.state === "submitting" ? "Just a sec..." : "Добавить +"}
          </button>
        </div>
      </Form>
    </div>
  );
}

export default ReviewsPopup;
