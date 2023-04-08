import { UserAuthenticationContext } from "./UserAuthentication";
import { useContext } from "react";

const useLogout = () => {
  const [user, setUser] = useContext(UserAuthenticationContext);

  return () => {
    window.localStorage.removeItem("token");
    setUser({ ...user, token: null });
  };
};

export default useLogout;
