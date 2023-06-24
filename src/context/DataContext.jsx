import { createContext, useEffect, useReducer } from "react";
import { initialValue, reducerFn } from "../reducer/dataReducer";
import forumData from "../data/data";
export const DataContext = createContext();

export const DataContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducerFn, initialValue);

  useEffect(() => {
    try {
      dispatch({ type: "GET_DATA", payload: forumData.posts });
      dispatch({type: "GET_USERNAME",payload:forumData.username})
      dispatch({type: "GET_NAME",payload:forumData.name})
    } catch (e) {
      console.log(e);
    }
  }, []);

  console.log("datwa", state);
  return (
    <DataContext.Provider value={{ state, dispatch }}>
      {children}
    </DataContext.Provider>
  );
};
