import { createContext, useContext, useEffect, useReducer } from "react";
import reducer from "./reducer";
import { SET_TODOS } from "./actions";

const AppContext = createContext(null);

const State = ({ children }) => {
  const initialState = { todos: [] };
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    const getTodos = async () => dispatch(await SET_TODOS());
    getTodos();
  }, []);

  return (
    <AppContext.Provider value={[state, dispatch]}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppState = () => useContext(AppContext);
export default State;
