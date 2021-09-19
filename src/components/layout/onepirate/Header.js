import {
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Slide,
  useMediaQuery,
  useTheme,
} from "@material-ui/core";
import Link from "@material-ui/core/Link";
import { withStyles } from "@material-ui/core/styles";
import MenuIcon from "@material-ui/icons/Menu";
import PropTypes from "prop-types";
import React, { useState } from "react";
import AppBar from "./components/AppBar";
import Toolbar, { styles as toolbarStyles } from "./components/Toolbar";

const styles = (theme) => ({
  title: {
    fontSize: 31,
    // background: '-webkit-linear-gradient(top, #8f6B29, #FDE08D, #DF9F28)',
    // background: 'linear-gradient(top, #8f6B29, #FDE08D, #DF9F28)',
    // backgroundColor: 'transparent',
    color: "transparent",
    // backgroundImage: "linear-gradient( to right, #462523 0, #cb9b51 22%, #f6e27a 45%, #f6f2c0 50%, #f6e27a 55%, #cb9b51 78%, #462523 100%)",
    backgroundImage:
      "linear-gradient( to right, #8f6B29 0, #cb9b51 22%, #f6e27a 45%, #f6f2c0 50%, #f6e27a 55%, #cb9b51 78%, #DF9F28 100%)",
    WebkitBackgroundClip: "text",
    fontFamily: "mazzard",
    letterSpacing: "-1px",
    marginLeft: "5px",
  },
  placeholder: toolbarStyles(theme).root,
  toolbar: {
    justifyContent: "space-between",
  },
  left: {
    flex: 1,
  },
  leftLinkActive: {
    color: theme.palette.common.white,
  },
  right: {
    flex: 1,
    display: "flex",
    justifyContent: "flex-end",
  },
  rightLink: {
    fontSize: 16,
    color: theme.palette.common.white,
    marginLeft: theme.spacing(3),
    color: "transparent",
    backgroundImage:
      "linear-gradient( to right, #8f6B29 0, #cb9b51 22%, #f6e27a 45%, #f6f2c0 50%, #f6e27a 55%, #cb9b51 78%, #DF9F28 100%)",
    WebkitBackgroundClip: "text",
    fontFamily: "mazzard",
    marginLeft: "5px",
  },
  menuIcon: {
    color: "#f6e27a",
  },
  drawer: {
    paper: {
      background: "black",
    },
  },
  paper: {
      background: "black",
  },
  drawerList: {},
  linkSecondary: {
    color: theme.palette.secondary.main,
  },
});

function Header({ props, classes }) {
  // const { classes } = props;
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <div>
      <AppBar position="fixed">
        <Toolbar className={classes.toolbar}>
          <div className={classes.left} />
          <Slide
            direction="right"
            mountOnEnter
            unmountOnExit
            {...{ timeout: 3000, in: true }}
          >
            <img width="20" src="/static/images/logo22symbol.png" />
          </Slide>
          <Slide
            direction="left"
            mountOnEnter
            unmountOnExit
            {...{ timeout: 3000, in: true }}
          >
            <Link
              variant="h6"
              underline="none"
              color="inherit"
              className={classes.title}
              href="/"
            >
              {props.name}
            </Link>
          </Slide>
          <div className={classes.right}>
            {isMobile ? (
              <DrawNav props={props} classes={classes} />
            ) : (
              <NavLink props={props} classes={classes} />
            )}
            {/*
            <Link
              color="inherit"
              variant="h6"
              underline="none"
              className={classes.rightLink}
              href="/premium-themes/onepirate/sign-in/"
            >
              {"Sign In"}
            </Link>
            <Link
              variant="h6"
              underline="none"
              className={clsx(classes.rightLink, classes.linkSecondary)}
              href="/premium-themes/onepirate/sign-up/"
            >
              {"Sign Up"}
            </Link>
            */}
          </div>
        </Toolbar>
      </AppBar>
      <div className={classes.placeholder} />
    </div>
  );
}

const DrawNav = ({ props, classes }) => {
  const [openDrawer, setOpenDrawer] = useState(false);
  return (
    <>
      <Drawer
        className={classes.drawer}
        open={openDrawer}
        classes={{ paper: classes.paper }}
        anchor="right"
        onClose={() => setOpenDrawer(false)}
      >
        <List className={classes.drawerList}>
          {props?.navs?.map((nav) => {
            return (
              <ListItem onClick={() => setOpenDrawer(false)}>
                <ListItemText>
                  <Link className={classes.rightLink} href={nav.slug}>
                    {nav.name}
                  </Link>
                </ListItemText>
              </ListItem>
            );
          })}
        </List>
      </Drawer>
      <IconButton onClick={() => setOpenDrawer(!openDrawer)}>
        <MenuIcon className={classes.menuIcon} />
      </IconButton>
    </>
  );
};

const NavLink = ({ props, classes }) => {
  return (
    <>
      {props?.navs?.map((nav) => {
        return (
          <Link
            key={nav.slug}
            color="inherit"
            variant="h6"
            underline="none"
            className={classes.rightLink}
            href={nav.slug}
          >
            {nav.name}
          </Link>
        );
      })}
    </>
  );
};

Header.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Header);
