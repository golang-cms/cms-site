import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Link from "@material-ui/core/Link";
import Container from "@material-ui/core/Container";
import Typography from "./components/Typography";
import TextField from "./components/TextField";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";

function Copyright({ props }) {
  return (
    <React.Fragment>
      {"© "}
      <Link color="inherit" href="/">
        {props.name}
      </Link>{" "}
      {new Date().getFullYear()}
    </React.Fragment>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    // backgroundColor: theme.palette.secondary.light,
    // backgroundColor: theme.palette.primary.main,
    // backgroundColor: theme.palette.grey.A700,
    color: theme.palette.common.white,
    backgroundColor: "#2a2a72",
    backgroundImage: "linear-gradient(315deg, #2a2a72 0%, #009ffd 74%)",
  },
  container: {
    marginTop: theme.spacing(8),
    marginBottom: theme.spacing(8),
    display: "flex",
  },
  iconsWrapper: {
    height: 120,
  },
  icons: {
    display: "flex",
  },
  icon: {
    width: 48,
    height: 48,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    // backgroundColor: theme.palette.warning.main,
    marginRight: theme.spacing(1),
    "&:hover": {
      // backgroundColor: theme.palette.warning.dark,
    },
    fontSize: 50,
  },
  iconItem: {
    // backgroundImage: "linear-gradient( to right, #8f6B29 0, #cb9b51 22%, #f6e27a 45%, #f6f2c0 50%, #f6e27a 55%, #cb9b51 78%, #DF9F28 100%)",
    background: "linear-gradient(to bottom, #e72c83 0%,#a742c6 100%)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    backgroundClip: "text",
  },
  list: {
    margin: 0,
    listStyle: "none",
    padding: 0,
  },
  listItem: {
    paddingTop: theme.spacing(0.5),
    paddingBottom: theme.spacing(0.5),

    color: "transparent",
    backgroundImage:
      "linear-gradient( to right, #8f6B29 0, #cb9b51 22%, #f6e27a 45%, #f6f2c0 50%, #f6e27a 55%, #cb9b51 78%, #DF9F28 100%)",
    WebkitBackgroundClip: "text",
    fontFamily: "mazzard",
    letterSpacing: "-1px",
  },
  language: {
    marginTop: theme.spacing(1),
    width: 150,
  },
 circle: {
    fill: "url(#linearColors)",
  },
}));

const LANGUAGES = [
  {
    code: "en-US",
    name: "English",
  },
  /*
  {
    code: 'fr-FR',
    name: 'Français',
  },
  */
];

export default function AppFooter({ props }) {
  const classes = useStyles();

  return (
    <Typography component="footer" className={classes.root}>
      <Container className={classes.container}>
        <Grid container spacing={5}>
          <Grid item xs={6} sm={4} md={3}>
            <Grid
              container
              direction="column"
              justifyContent="flex-end"
              className={classes.iconsWrapper}
              spacing={2}
            >
              <Grid item className={classes.icons}>
                <a href="#" className={classes.icon}>
                  {/* <GradientFacebookIcon fontSize="inherit" /> */}
                  <FacebookIcon className={classes.iconItem} fontSize="inherit" />
                </a>
                <a href="#" className={classes.icon}>
                  <TwitterIcon
                    className={classes.iconItem}
                    fontSize="inherit"
                  />
                </a>
              </Grid>
              <Grid item>
                <Copyright props={props} />
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={6} sm={4} md={2}>
            <Typography variant="h6" marked="left" gutterBottom>
              Legal
            </Typography>
            <ul className={classes.list}>
              <li className={classes.listItem}>
                <Link href="#">Terms</Link>
              </li>
              <li className={classes.listItem}>
                <Link href="#">Privacy</Link>
              </li>
            </ul>
          </Grid>
          <Grid item xs={6} sm={8} md={4}>
            <Typography variant="h6" marked="left" gutterBottom>
              Language
            </Typography>
            <TextField
              select
              SelectProps={{
                native: true,
              }}
              className={classes.language}
            >
              {LANGUAGES.map((language) => (
                <option value={language.code} key={language.code}>
                  {language.name}
                </option>
              ))}
            </TextField>
          </Grid>
          {/*
          <Grid item>
            <Typography variant="caption">
              {"Icons made by "}
              <Link
                href="#"
                rel="sponsored"
                title="Freepik"
              >
                Freepik
              </Link>
              {" from "}
              <Link
                href="#"
                rel="sponsored"
                title="Flaticon"
              >
                www.flaticon.com
              </Link>
              {" is licensed by "}
              <Link
                href="#"
                title="Creative Commons BY 3.0"
                target="_blank"
                rel="noopener noreferrer"
              >
                CC 3.0 BY
              </Link>
            </Typography>
          </Grid>
          */}
        </Grid>
      </Container>
    </Typography>
  );
}

const GradientFacebookIcon = () => {
  const classes = useStyles({});
  return (
    <>
      <svg width="300" height="300">
        <linearGradient id="linearColors" x1="0" y1="0" x2="1" y2="1">
          <stop offset="20%" stopColor="#39F" />
          <stop offset="90%" stopColor="#F3F" />
        </linearGradient>
      </svg>
      <FacebookIcon classes={{ circle: classes.circle }} />
    </>
  );
};
