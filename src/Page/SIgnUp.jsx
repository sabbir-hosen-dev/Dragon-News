import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import useAuthContext from "../Hook/useAuthContext";

function SIgnUp() {

  const [ validMassage, setValidMassage] = useState() 
  const {createUser} = useAuthContext();
  const navigate = useNavigate()
  const handleCreateUser = (e) => {
    e.preventDefault()
  
    const form = e.target;

    const name = form.name.value;
    const email = form.email.value;
    const photo = form.photo.value;
    const password = form.password.value;

    // Validation
    if (name.length < 2) {
      setValidMassage('Name must be at least 2 characters long.');
      return;
    }
    if (!/\S+@\S+\.\S+/.test(email)) {
      setValidMassage('Please enter a valid email address.');
      return;
    }
    if (!/^https?:\/\/.*\.(jpg|jpeg|png|gif|webp)$/.test(photo)) {
      setValidMassage('Please enter a valid photo URL (must be a valid image format).');
      return;
    }
    if (password.length < 6 || !/\d/.test(password)) {
      setValidMassage('Password must be at least 6 characters long and include a number.');
      return;
    }

    setValidMassage(''); // Clear validation message
    const user = { name, email, photo, password };

    createUser(user)

    navigate("/")
    
  }
  return (
    <div className="justify-center items-center h-screen flex">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <h2 className="font-bold text-2xl text-center py-5 text-gray-600">
          {" "}
          Sign UP
        </h2>
        <form onSubmit={handleCreateUser} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              placeholder="name"
              name="name"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
            name="email"
              type="email"
              placeholder="email"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Photo Url</span>
            </label>
            <input
            name="photo"
              type="text"
              placeholder="Photo Url"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
            name="password"
              type="password"
              placeholder="password"
              className="input input-bordered"
              required
            />
          </div>
          {
            validMassage && <small className="text-red-500">{validMassage}</small>
          }
          <div className="form-control mt-6">
            <button className="btn btn-primary">Sign UP</button>
          </div>
          <small>You have alradt acoutn:  <Link className="text-blue-400" to="/login" >login</Link></small>
        </form>
      </div>
    </div>
  );
}

export default SIgnUp;
