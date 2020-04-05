import React from "react";
import Link from "next/link";
import Typography from "@material-ui/core/Typography";
import { StyledHeader } from "../styles/header.styles";

export const Header = () => {
  return (
    <StyledHeader>
      <div>
        <Link href="/">
          <Typography
            style={{
              fontSize: "36px",
              fontWeight: 700,
            }}
            variant="h1"
            align="center"
          >
            TAMBOLA
          </Typography>
        </Link>
      </div>
      <div className="bg-overlay" />
    </StyledHeader>
  );
};
