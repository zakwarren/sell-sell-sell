import React from "react";
import { Link, Typography } from "@material-ui/core";

export const Copyright = () => (
  <Typography variant="body2" color="textSecondary" align="center">
    {"Copyright © "}
    <Link color="inherit" href={window.location.href}>
      Sell! Sell! Sell!
    </Link>{" "}
    {new Date().getFullYear()}
    {"."}
  </Typography>
);
