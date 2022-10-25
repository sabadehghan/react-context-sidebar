import { FaBars, FaLanguage } from "react-icons/fa";
import { useGlobalContext } from "../utils/context";
import { Outlet } from "react-router-dom";

const SharedLayout = () => {
  //const { openSidebar, direction, toggleDirection } = useGlobalContext();
  const {
    state: { direction },
    dispatch,
  } = useGlobalContext();

  return (
    <>
      <main style={{ direction }}>
        <button
          onClick={() => dispatch({ type: "TOGGLE_SIDEBAR" })}
          className="sidebar-toggle"
        >
          <FaBars />
        </button>
        <button
          onClick={() => dispatch({ type: "TOGGLE_DIRECTION" })}
          className="language-toggle"
        >
          <FaLanguage />
        </button>
      </main>
      <Outlet />
    </>
  );
};

export default SharedLayout;
