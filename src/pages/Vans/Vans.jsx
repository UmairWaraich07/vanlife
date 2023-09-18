import "./Vans.css";
import { filters } from "../../constants";
import VanBtn from "../../components/VanBtn/VanBtn";
import { Await, Link, useLoaderData, useSearchParams } from "react-router-dom";
import { Suspense } from "react";

const Vans = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const typeFilter = searchParams.get("type");
  const vansDataPromise = useLoaderData();

  function renderVanElements(vansData) {
    const filteredVans = typeFilter
      ? vansData?.filter((van) => van.type === typeFilter)
      : vansData;
    return (
      <>
        <div className="vans__topDiv">
          <div className="vans__filters">
            {filters.map((filter, index) => (
              <button
                key={index}
                onClick={() =>
                  setSearchParams({ type: `${filter.toLowerCase()}` })
                }
                className={`vans__type ${filter.toLowerCase()} ${
                  typeFilter === filter.toLowerCase() ? "selected" : ""
                }`}
              >
                {filter}
              </button>
            ))}

            {typeFilter && (
              <p
                className="vans__clearFilters"
                onClick={() => setSearchParams({})}
              >
                Clear filters
              </p>
            )}
          </div>
        </div>

        <div className="vans__container">
          {filteredVans.map(({ id, imageUrl, name, price, type }) => (
            <div key={id} className="vans__list">
              <Link
                to={`${id}`}
                state={{
                  search: `?${searchParams.toString()}`,
                  type: typeFilter,
                }}
                style={{ textDecoration: "none" }}
              >
                <img src={imageUrl} alt="" style={{ borderRadius: "5px" }} />
                <div className="vans__listDiv">
                  <h4 className="vans__title">{name}</h4>
                  <div className="vans__price">
                    ${price}
                    <span>/day</span>
                  </div>
                </div>
              </Link>
              <VanBtn label={type} containerStyle={type} />
            </div>
          ))}
        </div>
      </>
    );
  }

  return (
    <div className="vans">
      <h1>Explore our vans options</h1>
      <Suspense fallback={<h2>Loading...</h2>}>
        <Await resolve={vansDataPromise.vans}>{renderVanElements}</Await>
      </Suspense>
    </div>
  );
};

export default Vans;
