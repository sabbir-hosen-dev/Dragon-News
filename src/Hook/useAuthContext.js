import { useContext } from "react";
import { AuthContext } from "../Context/AuthContex";


export default function useAuthContext() {
  return useContext(AuthContext)
}
