import { FaInstagram } from "react-icons/fa"; 
import { AiOutlineTwitter } from "react-icons/ai"; 
import { BsFacebook } from "react-icons/bs"; 
function SosalMedia() {
  return (
    <div className="">
      <h2 className="font-bold my-3">Find Us On</h2>
      <div className="join flex  join-vertical *:bg-transparent ">
        <button className="btn join-item justify-start"><BsFacebook /> FaceBook</button>
        <button className="btn  join-item justify-start"><AiOutlineTwitter /> Twitter</button>
        <button className="btn join-item justify-start"><FaInstagram /> Instagram</button>
      </div>
    </div>
  );
}

export default SosalMedia;
