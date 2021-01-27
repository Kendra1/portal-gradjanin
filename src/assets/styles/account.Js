import { makeStyles } from "@material-ui/core/styles";

export const useAccountStyle = makeStyles({
  item: {
    variant: "h5",
    fontSize: "25px",
    color: "#00aafe",
    marginLeft: "20px",
  },
  container: {
    justifyContent: "flex-start",
    alignItems: "start",
  },
  otherContainer: {
    justifyContent: "flex-end",
    alignItems: "start",
  },
  root: {
    minHeight: "100vh",
    width: "100vw",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    overflowX: "hidden",
  },
});
