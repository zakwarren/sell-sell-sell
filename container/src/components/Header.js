import React from "react";
import { Link as RouterLink } from "react-router-dom";
import { AppBar, Button, Toolbar, Typography } from "@material-ui/core";

import { useStyles } from "./useHeaderStyles";

export const Header = ({ signedIn, onSignOut }) => {
  const classes = useStyles();

  const onClick = () => {
    if (signedIn && onSignOut) {
      onSignOut();
    }
  };

  return (
    <AppBar
      position="static"
      color="default"
      elevation={0}
      className={classes.appBar}
    >
      <Toolbar className={classes.toolbar}>
        <Typography
          variant="h6"
          color="inherit"
          noWrap
          component={RouterLink}
          to="/"
        >
          Sell Zone
        </Typography>
        <Button
          color="primary"
          variant="outlined"
          className={classes.link}
          component={RouterLink}
          to={signedIn ? "/" : "/auth/signin"}
          onClick={onClick}
        >
          {signedIn ? "Logout" : "Login"}
        </Button>
      </Toolbar>
    </AppBar>
  );
};
