import { NavLink } from "react-router-dom"
import user from "../../assets/user.png"

function Navber() {
  return (
    <nav className="flex mt-5 justify-between items-center">
      <div className=""></div>

      <ul className="nav flex gap-4">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/creer">Career</NavLink>
      </ul>
      <div className="flex gap-2 items-center">
        <div className=""><img src={user} alt="" /></div>
        <div className="btn rounded-none px-7 btn-neutral">Login</div>
      </div>
    </nav>
  )
}

export default Navber
