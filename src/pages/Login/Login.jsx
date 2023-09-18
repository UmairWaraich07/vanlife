import "./Login.css";
import Button from "../../components/Button/Button";
import {
  Form,
  useActionData,
  useLoaderData,
  useNavigation,
} from "react-router-dom";

export const loginLoader = ({ request }) => {
  const url = new URL(request.url).searchParams.get("message");
  return url;
};

const Login = () => {
  const navigation = useNavigation();
  const errorMessage = useActionData();
  const message = useLoaderData();

  return (
    <div className="login">
      <div className="login__container">
        <h1>Sign in to your account</h1>
        {errorMessage && (
          <p className="red" style={{ color: "red" }}>
            {" "}
            {errorMessage}{" "}
          </p>
        )}
        {message && <p style={{ color: "red" }}>{message}</p>}
        <Form method="post" className="login__form" replace>
          <input type="email" name="email" placeholder="Email" />
          <input type="password" name="password" placeholder="Password" />
          <div className="login__submitBtn">
            <Button
              label={navigation.state === "idle" ? "Log in" : "Logging in..."}
              fullWidth={true}
              type={"submit"}
              isDisabled={navigation.state === "submitting" ? true : false}
            />
          </div>
        </Form>

        <div className="login__bottomDiv">
          <p>Don&apos;t have an account?</p>
          <span>Create one new</span>
        </div>
      </div>
    </div>
  );
};

export default Login;
