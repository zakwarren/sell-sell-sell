import React from "react";
import { Link } from "react-router-dom";
import { Typography } from "@material-ui/core";

export const Copyright = () => (
  <Typography variant="body2" color="textSecondary" align="center">
    {"Copyright © "}
    <Link color="inherit" to={window.location.href}>
      Sell! Sell! Sell!
    </Link>{" "}
    {new Date().getFullYear()}
    {"."}
  </Typography>
);
