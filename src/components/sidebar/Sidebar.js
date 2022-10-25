import { useGlobalContext } from "../../utils/context";
import { FaTimes } from "react-icons/fa";
import styles from "./sidebar.module.css";
import SidebarMenu from "./sidebarMenu/SidebarMenu";
import SidebarSocials from "./sidebarSocials/SidebarSocials";
import ReactDOM from "react-dom";

const Sidebar = () => {
  // const { isSidebarOpen, closeSidebar, direction } = useGlobalContext();
  const {
    state: {
      direction,
      isSidebarOpen,
      userInfo: { username },
    },
    dispatch,
  } = useGlobalContext();
  const openClass = isSidebarOpen
    ? `${styles.sidebar} ${styles["show-sidebar"]}`
    : `${styles.sidebar}`;

  const directionClass =
    direction === "rtl"
      ? `${styles["sidebar-rtl"]}`
      : `${styles["sidebar-ltr"]}`;

  return ReactDOM.createPortal(
    <aside className={`${openClass} ${directionClass}`}>
      <div className={styles["sidebar-header"]}>
        {username}
        <button
          className={styles["close-btn"]}
          onClick={() => dispatch({ type: "TOGGLE_SIDEBAR" })}
        >
          <FaTimes />
        </button>
      </div>
      <SidebarMenu />
      <SidebarSocials />
    </aside>,
    document.getElementById("sidebar")
  );
};

export default Sidebar;
