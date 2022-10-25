// import { useState, useContext, createContext } from "react";

// const AppContext = createContext();

// const AppProvider = ({ children }) => {
//   const [isSidebarOpen, setIsSidebarOpen] = useState(false);
//   const [direction, setDirection] = useState("ltr");

//   const openSidebar = () => {
//     setIsSidebarOpen(true);
//   };
//   const closeSidebar = () => {
//     setIsSidebarOpen(false);
//   };

//   const toggleDirection = () => {
//     if (direction === "ltr") setDirection("rtl");
//     else setDirection("ltr");
//   };

//   return (
//     <AppContext.Provider
//       value={{
//         isSidebarOpen,
//         openSidebar,
//         closeSidebar,
//         direction,
//         toggleDirection,
//       }}
//     >
//       {children}
//     </AppContext.Provider>
//   );
// };

// export const useGlobalContext = () => {
//   return useContext(AppContext);
// };

// export { AppContext, AppProvider };

import { useContext, createContext, useReducer } from "react";

const initialState = {
  isSidebarOpen: false,
  direction: "ltr",
  userInfo: JSON.parse(localStorage.getItem("userInfo"))
    ? JSON.parse(localStorage.getItem("userInfo"))
    : "",
};
const AppContext = createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case "TOGGLE_SIDEBAR":
      return { ...state, isSidebarOpen: !state.isSidebarOpen };
    case "TOGGLE_DIRECTION":
      return { ...state, direction: state.direction === "ltr" ? "rtl" : "ltr" };
    case "USER_LOGIN":
      return { ...state, userInfo: action.payload };
    default:
      return state;
  }
};

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
