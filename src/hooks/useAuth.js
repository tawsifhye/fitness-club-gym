import { useContext } from "react";
import { AuthContext } from "../contenxt/AuthProvider";

const useAuth = () => {
  return useContext(AuthContext);
};

export default useAuth;
