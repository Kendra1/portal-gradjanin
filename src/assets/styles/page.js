import { makeStyles } from "@material-ui/core/styles";
import { theme } from "./theme";

export const usePageStyle = makeStyles({
  root: {
    minHeight: "100vh",
    width: "100vw",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    overflowX: "hidden",
  },
  gridContainer: {
    background:
      "linear-gradient(90deg, rgba(47,50,52,1) 0%, rgba(38,49,55,1) 24%, rgba(84,84,84,1) 50%, rgba(0,170,255,1) 81%, rgba(66,73,77,1) 100%)",
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    paddingTop: theme.spacing(1),
  },
  caption: {
    color: "#9c9c9c",
  },
  link: {
    color: "#b8b8b8",
  },
  plainGridItem: {
    marginBottom: theme.spacing(1),
  },
  filter: {
    minHeight: "9rem",
    maxWidth: "30rem",
  },
  item: {
    padding: "3rem",
    minWidth: "30rem",
  },
});
