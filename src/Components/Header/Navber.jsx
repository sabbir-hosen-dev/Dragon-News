import { Link, NavLink } from "react-router-dom"
import userImg from "../../assets/user.png"
import useAuthContext from "../../Hook/useAuthContext"

function Navber() {
  const {logOut,user} = useAuthContext()

  return (
    <nav className="flex mt-5 justify-between items-center">
      <div className=""></div>

      <ul className="nav flex gap-4">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/creer">Career</NavLink>
      </ul>
      <div className="flex gap-2 items-center">
        <div className=""><img className="w-12 h-12 rounded-full " src={`${user.photo ? user.photo : userImg }`} alt="" /></div>

        {/* <div className="btn rounded-none px-7 btn-neutral">Login</div> */}

        {
          user.email ? <div onClick={logOut} className="btn rounded-none px-7 btn-neutral">Log Out</div> : <Link to="/login" className="btn rounded-none px-7 btn-neutral">Login</Link>
        }
      </div>
    </nav>
  )
}

export default Navber
