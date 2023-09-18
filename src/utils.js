import { redirect } from "react-router-dom";
import { loginUser } from "./api";

export async function requireAuth(request) {
  const isLoggedIn = localStorage.getItem("isLoggedIn") || false;
  const pathname = new URL(request.url).pathname;

  if (!isLoggedIn) {
    const res = redirect(
      `/login?message=Please log in first!&redirectTo=${pathname}`
    );
    throw res;
  }
  return null;
}

export const loginAction = async ({ request }) => {
  const formData = await request.formData();
  const email = formData.get("email");
  const password = formData.get("password");
  const pathname =
    new URL(request.url).searchParams.get("redirectTo") || "/host";
  try {
    const data = await loginUser({ email, password });
    console.log("LoginData", data);
    localStorage.setItem("isLoggedIn", true);
    const res = redirect(pathname);
    res.body = true;
    return res;
  } catch (error) {
    return error.message;
  }
};
