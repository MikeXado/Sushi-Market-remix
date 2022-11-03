import { useNavigate } from "react-router-dom";
import ReviewsHeader from "../components/reviews/ReviewsHeader";
import ReviewsItem from "../components/reviews/ReviewsItem";

import { useLoaderData, Outlet } from "@remix-run/react";
import { redirect } from "@remix-run/node";
import { getReviews } from "~/utils/firebase.server";
import { getCurrentSession } from "~/utils/session.server";
import reviewsStyles from "../styles/reviews/reviews.css";
export const loader = async () => {
  return await getReviews();
};

export const links = () => {
  return [
    {
      rel: "stylesheet",
      href: reviewsStyles,
    },
  ];
};

export const action = async ({ request }) => {
  const formData = await request.formData();
  const { _action, ...values } = Object.fromEntries(formData);
  const isSession = await getCurrentSession(request);
  if (_action === "checkIfLogIn") {
    if (!isSession) {
      return redirect("reviews/signIn");
    }
    return redirect("reviews/addReview");
  }
};

function Reviews() {
  const navigate = useNavigate();
  const data = useLoaderData();

  return (
    <div className="reviews">
      <button className="current-header" onClick={() => navigate(-1)}>
        <img
          src="https://firebasestorage.googleapis.com/v0/b/romsem-b19b7.appspot.com/o/single-page%2Fleft-arrow.png?alt=media&token=19165e4b-bf34-41e3-90c1-f8464ba2aefd"
          alt="left-arrow"
        />

        <div className="current-header__text">Назад</div>
      </button>

      <ReviewsHeader />
      <Outlet />
      {data.map((review) => {
        return <ReviewsItem key={review.id} comment={review} />;
      })}
    </div>
  );
}

export default Reviews;
