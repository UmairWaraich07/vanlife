import { useOutletContext } from "react-router-dom";
import "./HostVanDetailsDetail.css";
const HostVanDetailsDetail = () => {
  const { name, type, description } = useOutletContext();

  return (
    <div className="hostvanDetails__content">
      <div className="hostvanDetails__content-div">
        <h4>Name:</h4> <p>{name}</p>
      </div>
      <div className="hostvanDetails__content-div">
        <h4>Category:</h4> <p>{type}</p>
      </div>
      <div className="hostvanDetails__content-div">
        <h4>Description:</h4> <p>{description}</p>
      </div>
      <div className="hostvanDetails__content-div">
        <h4>Visibility:</h4> <p>Public</p>
      </div>
    </div>
  );
};

export default HostVanDetailsDetail;
