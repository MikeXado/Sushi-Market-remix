import { Link } from "@remix-run/react";
function ErrorBoundary() {
  return (
    <div className="reviews-popup">
      <h1 className="reviews-popup__message">Email or Password is incorrect</h1>
      <div className="redirect">
        <Link className="link-to" to="/reviews/signIn">
          Go back
        </Link>
      </div>
    </div>
  );
}

export default ErrorBoundary;
