import { createContext, useContext, useReducer } from "react";
import reducer from "./reducer";

const AppContext = createContext(null);

const State = ({ children }) => {
  const initialState = { todos: [] };
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <AppContext.Provider value={[state, dispatch]}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppState = () => useContext(AppContext);
export default State;
