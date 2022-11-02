import { Form, Link } from "@remix-run/react";
import { redirect } from "@remix-run/node";
import { createUserSession } from "../../utils/session.server";
import { signUp } from "../../utils/db.server";
export const action = async ({ request }) => {
  const formData = await request.formData();
  const { _action, ...values } = Object.fromEntries(formData);
  if (_action === "close") {
    return redirect("/reviews");
  }

  let email = formData.get("email");
  let password = formData.get("password");
  const { user } = await signUp(email, password);
  const token = await user.getIdToken();
  return await createUserSession(token, "/reviews");
};

export const ErrorBoundary = () => {
  return (
    <div className="reviews-popup">
      <h1 className="reviews-popup__message">
        Probably email is already registered
      </h1>
      <div className="redirect">
        <Link className="link-to" to="/reviews/signUp">
          Go back
        </Link>
      </div>
    </div>
  );
};

function Register() {
  return (
    <div className="reviews-popup">
      <Form method="post">
        <div className="reviews-popup__close">
          <button name="_action" value="close" type="submit"></button>
        </div>
      </Form>
      <Form method="post" className="reviews-form">
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
          <button name="_action" value="signUp" type="submit">
            Sign Up{" "}
          </button>
        </div>
        <div className="redirect">
          Already have an account?{" "}
          <Link className="link-to" to="/reviews/signIn">
            Sing In
          </Link>
        </div>
      </Form>
    </div>
  );
}

export default Register;
