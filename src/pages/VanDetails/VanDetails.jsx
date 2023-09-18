import { Await, Link, useLoaderData, useLocation } from "react-router-dom";
import "./VanDetails.css";
import { LeftArrow } from "../../constants/icons";
import Button from "../../components/Button/Button";
import VanBtn from "../../components/VanBtn/VanBtn";
import { Suspense } from "react";
const VanDetails = () => {
  const location = useLocation();
  const vanPromise = useLoaderData();

  const search = location.state?.search || "";
  const type = location.state?.type || "all";

  function renderVanDetails(van) {
    return (
      <>
        <img src={van?.imageUrl} alt="" className="vanDetails__img" />

        <div className="vanDetails__content">
          <VanBtn label={van?.type} containerStyle={van?.type} />
          <h3 className="vanDetails__title">{van?.name}</h3>
          <div className="vanDetails__price">
            ${van.price} <span>/day</span>
          </div>

          <p className="vanDetails__description">{van.description}</p>

          <Button label="Rent this van" fullWidth={true} />
        </div>
      </>
    );
  }

  return (
    <div className="vanDetails">
      <div className="vanDetails__backDiv">
        <Link
          to={`..${search}`}
          relative="path"
          className="vanDetails__backBtn"
        >
          <LeftArrow /> <span>Back to {type} vans</span>
        </Link>
      </div>

      <div className="vanDetails__container">
        <Suspense fallback={<h2>Loading van details...</h2>}>
          <Await resolve={vanPromise.vans}>{renderVanDetails}</Await>
        </Suspense>
      </div>
    </div>
  );
};

export default VanDetails;
