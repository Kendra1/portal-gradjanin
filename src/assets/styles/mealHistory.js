import { makeStyles } from "@material-ui/core/styles";

export const useMealHistoryStyle = makeStyles({
  root: {
    display: "flex",
    flexDirection: "row",
    minHeight: "100vh",
    width: "100vw",
    justifyContent: "space-between",
    overflowX: "hidden",
  },
  caption: {
    color: "#9c9c9c",
  },
  select: {
    minWidth: "20rem",
    color: "white",
  },
});
