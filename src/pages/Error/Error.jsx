import { useRouteError } from "react-router-dom";
import Button from "../../components/Button/Button";
import "./Error.css";
const Error = () => {
  const error = useRouteError();

  return (
    <div className="error">
      <div className="error__wrapper">
        <h1>{error.status}</h1>
        <h2>Error : {error.message} </h2>
        <Button label="Back to Home" fullWidth={true} black={true} link={"/"} />
      </div>
    </div>
  );
};

export default Error;
