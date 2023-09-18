import { Suspense } from "react";
import "./HostVans.css";
import { Await, Link, useLoaderData } from "react-router-dom";
const HostVans = () => {
  const hostVansPromise = useLoaderData();

  console.log(hostVansPromise);

  function renderHostVans(vans) {
    return vans.map(({ id, imageUrl, name, price }) => (
      <Link to={`${id}`} key={id} style={{ textDecoration: "none" }}>
        <div className="hostvans__list">
          <img src={imageUrl} alt="" />
          <div className="hostavans__list-content">
            <h4> {name} </h4>
            <p>${price}/day</p>
          </div>
        </div>
      </Link>
    ));
  }

  return (
    <div className="hostvans">
      <h1 className="hostvans__heading">Your listed vans</h1>

      <div className="hostvans__container">
        <Suspense fallback={<h2>Loading...</h2>}>
          <Await resolve={hostVansPromise.hostVans}>{renderHostVans}</Await>
        </Suspense>
      </div>
    </div>
  );
};

export default HostVans;
