import axios from "axios";
import { createContext, useEffect, useRef, useState } from "react";
import { useHistory } from "react-router-dom";

export const UserAuthenticationContext = createContext(null);

const UserAuthentication = ({ children }) => {
  const history = useHistory();
  const [user, setUser] = useState({
    token: window.localStorage.getItem("token"),
  });
  axios.defaults.headers.common["Authorization"] =
    window.localStorage.getItem("token");

  useEffect(() => {
    if (user.token) history.push("/");
    if (!user.token && history.location.pathname !== "/signup")
      history.push("/login");
  }, [user]);

  return (
    <UserAuthenticationContext.Provider value={[user, setUser]}>
      {children}
    </UserAuthenticationContext.Provider>
  );
};

export default UserAuthentication;
