import { createContext, useReducer } from "react";
import DarkModeRdc from "./darkModeRdc";

const INITIAL_STATE = {
  darkMode: false,
};

export const DarkModeCtx = createContext(INITIAL_STATE);

export const DarkModeCtxProvider = ({ children }) => {
  const [state, dispatch] = useReducer(DarkModeRdc, INITIAL_STATE);

  return (
    <DarkModeCtx.Provider value={{ darkMode: state.darkMode, dispatch }}>
      {children}
    </DarkModeCtx.Provider>
  );
};
