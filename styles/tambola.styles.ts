import { styled } from "@material-ui/core/styles";

export const TambolaBoard = styled("div")({
  gridArea: "board",
  display: "grid",
  gridTemplateColumns: "repeat(10, 1fr)",
  margin: "auto",
  order: 2,
  background: "#F9F7EF",
  justifyContent: "center",
  position: "relative",
});
