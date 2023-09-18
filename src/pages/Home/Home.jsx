import Button from "../../components/Button/Button";
import "./Home.css";
const Home = () => {
  return (
    <div className="home">
      <div className="home__content">
        <h1 className="home__header">
          You got the taravel plans, we <br />
          got the travel vans.
        </h1>

        <p className="home__content-subtitle">
          Add adventure to your life by joining the #vanlife movement. Rent the
          perfect van to make your perfect road trip.
        </p>

        <Button label="Find your van" link="/vans" />
      </div>
    </div>
  );
};

export default Home;
