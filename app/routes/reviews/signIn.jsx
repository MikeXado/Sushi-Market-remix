import { redirect } from "@remix-run/node";
import { Form, Link } from "@remix-run/react";
import { signIn } from "../../utils/db.server";
import { createUserSession } from "../../utils/session.server";
import ErrorHandler from "../../components/ErrorBoundary";
export const action = async ({ request }) => {
  const formData = await request.formData();
  const { _action, ...value } = Object.fromEntries(formData);
  if (_action === "close") {
    return redirect("/reviews");
  }
  let email = formData.get("email");
  let password = formData.get("password");
  const { user } = await signIn(email, password);
  const token = await user.getIdToken();
  return await createUserSession(token, "/reviews");
};

export const ErrorBoundary = () => {
  return <ErrorHandler />;
};

function LogIn() {
  return (
    <div className="reviews-popup">
      <Form method="post">
        <div className="reviews-popup__close">
          <button name="_action" value="close" type="submit"></button>
        </div>
      </Form>
      <Form className="reviews-form" method="post">
        <div className="form-text">Email</div>
        <input
          type="email"
          required
          name="email"
          placeholder="Enter email..."
        />
        <div className="form-text comment">Password</div>
        <input
          type="password"
          required
          name="password"
          placeholder="Enter password"
        />
        <div className="reviews-btn">
          <button name="_action" value="signIn" type="submit">
            Sign In{" "}
          </button>
        </div>
        <div className="redirect">
          If don't have an account?{" "}
          <Link className="link-to" to="/reviews/signUp">
            Sing Up
          </Link>
        </div>
      </Form>
    </div>
  );
}

export default LogIn;
