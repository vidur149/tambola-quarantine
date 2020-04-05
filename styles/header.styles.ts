import { styled } from "@material-ui/core/styles";

export const StyledHeader = styled("header")(({ theme }: { theme: any }) => {
  return {
    position: "fixed",
    zIndex: 2,
    width: "100%",
    top: 0,
    background: "white",
    height: "100px",

    "& > div:first-child": {
      position: "fixed",
      zIndex: 2,
      height: "100px",
      top: 0,
      left: 0,
      padding: "0 8%",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      width: "100%",
      "& .navClass": {
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-end",
        width: "100%",
        "& a, button": {
          fontWeight: 600,
          fontSize: "20px",
          textDecoration: "none",
          color: "rgba(0, 0, 0, 0.7)",
          margin: "0 15px",
          whiteSpace: "nowrap",
        },
        [theme.breakpoints.down("sm")]: {
          display: "none !important",
        },
      },
    },
    "& .bg-overlay": {
      position: "fixed",
      top: 0,
      right: 0,
      width: "35%",
      height: "100px",
      backgroundColor: theme.colors.bgBlue,
      zIndex: 1,
      [theme.breakpoints.down("sm")]: {
        width: "50%",
      },
    },
  };
});
