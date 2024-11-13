import moment from "moment";
import logo from "../../assets/logo.png";
import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

function Header() {
  const date = moment("2025-11-27");

  const formattedDate = date.format("dddd, MMMM D, YYYY");
  return (
    <div className="flex justify-center flex-col items-center gap-2 my-3 ">
      <div className="logo">
        <img src={logo} alt="" />
      </div>
      <h3 className="text-gray-400">Journalism Without Fear or Favour</h3>

      <p className="font-semibold">{formattedDate}</p>

      <div className="flex gap-2 bg-base-200 p-2 mt-5">
        <div className=" px-5 py-2 rounded-none bg-[#D72050] text-white">Latest</div>

        <Marquee>
          <Link>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab,
            similique!
          </Link>
          <Link>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab,
            similique!
          </Link>
          <Link>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab,
            similique!
          </Link>
          <Link>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab,
            similique!
          </Link>
        </Marquee>
      </div>
    </div>
  );
}

export default Header;
