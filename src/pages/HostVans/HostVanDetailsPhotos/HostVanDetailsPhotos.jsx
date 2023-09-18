import { useOutletContext } from "react-router-dom";
import "./HostVanDetailsPhotos.css";
const HostVanDetailsPhotos = () => {
  const { imageUrl } = useOutletContext();

  return (
    <div className="hostvanDetails__photos">
      <img src={imageUrl} alt="" />
    </div>
  );
};

export default HostVanDetailsPhotos;
