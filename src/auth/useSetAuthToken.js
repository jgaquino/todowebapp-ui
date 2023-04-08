import axios from "axios";
import { useContext } from "react";
import { UserAuthenticationContext } from "./UserAuthentication";

const useSetAuthToken = () => {
  const [user, setUser] = useContext(UserAuthenticationContext);

  return (token) => {
    if (token) {
      window.localStorage.setItem("token", token);
      axios.defaults.headers.common["Authorization"] = token;
      setUser({ ...user, token: token });
    } else {
      window.localStorage.removeItem("token");
      delete axios.defaults.headers.common["Authorization"];
      setUser({ ...user, token: null });
    }
  };
};

export default useSetAuthToken;
