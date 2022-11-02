import { createCookieSessionStorage, redirect } from "@remix-run/node";
import {
  getSessionToken,
  getAdminAuth,
  logOutFirebase,
} from "../utils/db.server";

const sessionSecret = process.env.SESSION_SECRET;
if (!sessionSecret) {
  throw new Error("SESSION_SECRET must be set");
}

const storage = createCookieSessionStorage({
  cookie: {
    name: "__session",
    secure: process.env.NODE_ENV === "production",
    secrets: [sessionSecret],
    sameSite: "lax",
    path: "/",
    maxAge: 60 * 60 * 24 * 30,
    httpOnly: true,
  },
});

async function getCurrentSession(request) {
  const cookieSession = await storage.getSession(request.headers.get("Cookie"));
  const token = cookieSession.get("token");
  if (!token) return null;
  try {
    const tokenUser = await getAdminAuth().verifySessionCookie(token, true);
    return tokenUser;
  } catch (error) {
    return null;
  }
}

async function createUserSession(idToken, redirectTo) {
  const token = await getSessionToken(idToken);
  const session = await storage.getSession();
  session.set("token", token);

  return redirect(redirectTo, {
    headers: {
      "Set-Cookie": await storage.commitSession(session),
    },
  });
}

async function destroySession(request) {
  const session = await storage.getSession(request.headers.get("Cookie"));
  const newCookie = await storage.destroySession(session);
  return redirect("reviews/signIn", {
    headers: {
      "Set-Cookie": newCookie,
    },
  });
}

async function logOut(request) {
  await logOutFirebase();
  return await destroySession(request);
}

export { createUserSession, logOut };
