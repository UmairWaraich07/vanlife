import { Await, Link, NavLink, Outlet, useLoaderData } from "react-router-dom";
import "./HostVanDetails.css";
import { LeftArrow } from "../../../constants/icons";
import VanBtn from "../../../components/VanBtn/VanBtn";
import { Suspense } from "react";

const HostVanDetails = () => {
  const vanPromise = useLoaderData();

  const activeStyle = {
    fontWeight: "bold",
    textDecoration: "underline",
    color: "#161616",
  };

  function renderVanDetails(van) {
    return (
      <>
        <div className="hostvanDetails__container-div">
          <img src={van?.imageUrl} alt="" />
          <div className="hostvanDetails__container-info">
            <VanBtn label="Simple" containerStyle="simple" />
            <h4>{van?.name}</h4>
            <p>
              <span>${van?.price}</span>/day
            </p>
          </div>
        </div>
        <nav className="hostvanDetails__nav">
          <NavLink
            to="."
            end
            style={({ isActive }) => (isActive ? activeStyle : null)}
          >
            Details
          </NavLink>
          <NavLink
            to="pricing"
            style={({ isActive }) => (isActive ? activeStyle : null)}
          >
            {" "}
            Pricing{" "}
          </NavLink>

          <NavLink
            to="photos"
            style={({ isActive }) => (isActive ? activeStyle : null)}
          >
            {" "}
            Photos{" "}
          </NavLink>
        </nav>
        {<Outlet context={van} />}
      </>
    );
  }

  return (
    <div className="hostvanDetails">
      <div className="vanDetails__backDiv" style={{ marginTop: "20px" }}>
        <Link to="/host/vans" className="vanDetails__backBtn">
          <LeftArrow /> <span>Back to all vans</span>
        </Link>
      </div>
      <div className="hostvanDetails__wrapper">
        <div className="hostvanDetails__container">
          <Suspense fallback={<h2>Loading vain details...</h2>}>
            <Await resolve={vanPromise.van}>{renderVanDetails}</Await>
          </Suspense>
        </div>
      </div>
    </div>
  );
};

export default HostVanDetails;
