import { AiFillGithub } from "react-icons/ai"; 
import { FcGoogle } from "react-icons/fc";
import useAuthContext from './../../Hook/useAuthContext';


function LoginBox() {

  const {signInWithGoogle} = useAuthContext()
  return (
    <div>
      <h2 className="font-bold text-xl mb-3">Login With</h2>
      <div className="flex flex-col gap-2">
        <button  onClick={ signInWithGoogle} className="btn w-full bg-transparent flex items-center gap-2">
          <FcGoogle /> Login with Google
        </button>
        <button className="btn w-full bg-transparent flex items-center gap-2">
          <AiFillGithub /> login with Github
        </button>
      </div>
    </div>
  );
}

export default LoginBox;
