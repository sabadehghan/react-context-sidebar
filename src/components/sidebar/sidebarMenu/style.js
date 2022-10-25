import { createUseStyles } from "react-jss";

export const useStyles = createUseStyles({
  link: {
    display: "flex",
    alignItems: "center",
    fontSize: "1.25rem",
    textTransform: "capitalize",
    padding: "1rem 1.5rem",
    color: "var(--clr-grey-3)",
    transition: "var(--transition)",
    "&:hover": {
      background: "var(--clr-grey-10)",
      color: "var(--clr-grey-2)",
      "& svg": {
        color: "var(--clr-grey-4)",
      },
    },
    "& svg": {
      fontSize: "1.5rem",
      color: "var(--clr-grey-5)",
      marginRight: (props) => (props.direction === "ltr" ? "1rem" : 0),
      marginLeft: (props) => (props.direction === "rtl" ? "1rem" : 0),
      transition: "var(--transition)",
    },
  },
});
