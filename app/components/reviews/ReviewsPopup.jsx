import { Link, useNavigate } from "react-router-dom";
import { Form, useTransition } from "@remix-run/react";
function ReviewsPopup({ isClick }) {
  const transition = useTransition();
  const navigate = useNavigate();
  let today = new Date();
  let dd = String(today.getDate()).padStart(2, "0");
  let mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
  let yyyy = today.getFullYear();

  let date = dd + "." + mm + "." + yyyy;

  return (
    <div
      className="reviews-popup"
      style={{ display: "none", ...(isClick ? { display: "block" } : {}) }}
    >
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
          <button
            type="submit"
            name="_action"
            value="addReview"
            onClick={() => {
              navigate("/reviews");
            }}
          >
            {transition.state === "submitting" ? "Just a sec..." : "Добавить +"}
          </button>
        </div>
      </Form>
    </div>
  );
}

export default ReviewsPopup;
