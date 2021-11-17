import {
    Avatar,
    Button,
    Card,
    CardContent,
    CssBaseline,
    Grid,
    makeStyles,
    Paper,
    Slide,
    Snackbar,
    TextField,
    Typography
} from "@material-ui/core";
import ContactMailIcon from "@material-ui/icons/ContactMail";
import EmailIcon from "@material-ui/icons/Email";
import LocalPhoneIcon from "@material-ui/icons/LocalPhone";
import RoomIcon from "@material-ui/icons/Room";
import MuiAlert from "@material-ui/lab/Alert";
import parse from "html-react-parser";
import Head from "next/head";
import Script from "next/script";
import React, { ReactElement, useContext } from "react";
import { useForm } from "react-hook-form";
import useSWR from 'swr';
import Layout from "../src/components/layout/onepirate/Layout";
import { PostModel } from "../src/model/post";
import { SiteConfigModel } from "../src/model/siteConfig";
import SiteConfigContext from "../src/providers/siteConfig/siteConfigProvider";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

const ContactUs = () => {

  const { data, error } = useSWR(`${process.env.contentApiHost}/v1/posts?slug=contact-us`, fetcher);
  if (error) return <div>{error.message}</div>;
  if (!data) return <div>Loading...</div>;
  const post = data[0];
  return <ContactUsPage post={post} />;
};

const ContactUsPage = ({ post }: { post: PostModel }) => {
  const classes = useStyles();
  const siteConfig = useContext(SiteConfigContext);

  return (
    <>
      <Head>{parse(post?.translations[0]?.head)}</Head>
      <Grid container component="main" className={classes.root}>
        <CssBaseline />
        <Grid item xs={false} sm={4} md={7} className={classes.image}>
          <video
            className={classes.video}
            src="/static/video/montreal.mp4"
            width="100%"
            height="100%"
            autoPlay
            muted
            loop
          >
            Your browser does not support the video tag.
          </video>
          <Slide
            direction="right"
            mountOnEnter
            unmountOnExit
            {...{ timeout: 2000, in: true }}
          >
            <Card className={classes.card}>
              <CardContent>
                <Typography color="inherit" variant="h5" component="h2">
                  <LocalPhoneIcon className={classes.cardIcon} />{" "}
                  <span>{siteConfig.phone}</span>
                </Typography>
                <Typography variant="h5" component="h2">
                  <RoomIcon className={classes.cardIcon} />{" "}
                  <span>{siteConfig.address}</span>
                </Typography>
                <Typography variant="h5" component="h2">
                  <EmailIcon className={classes.cardIcon} />{" "}
                  <span>{siteConfig.email}</span>
                </Typography>
              </CardContent>
            </Card>
          </Slide>
        </Grid>
        <Form />
      </Grid>
      {post?.translations[0]?.javascript ? (
        <Script id="slug-page-id"> {post?.translations[0].javascript} </Script>
      ) : (
        ""
      )}
    </>
  );
};

const Form = () => {
  const classes = useStyles();
  const [msgOpen, setMsgOpen] = React.useState(false);

  const {
    register,
    handleSubmit,
    reset,
    // formState: { errors },
  } = useForm();

  const onSubmit = async (data: any) => {
    console.log(data);
    const res = await fetch(`${process.env.contentApiHost}/v1/emails`, {
      body: JSON.stringify({
        subject: "From Contact US",
        message: `from name: ${data.name} \n 
                  from email: ${data.email} \n
                  from phone: ${data.phone} \n
                  Content: ${data.content}
            `,
        fromEmail: data.email,
        fromName: data.name,
        toEmail: "support@smartcodee.com",
      }),
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
    });

    const result = await res.json();
    console.log(result);
    setMsgOpen(true);
    reset();
  };

  return (
    <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
      <Snackbar
        open={msgOpen}
        autoHideDuration={6000}
        onClose={() => {
          setMsgOpen(false);
        }}
      >
        <MuiAlert elevation={6} variant="filled" severity="success">
          We have received your message, will contact you soon!
        </MuiAlert>
      </Snackbar>
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <ContactMailIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          CONTACT US
        </Typography>
        <form
          className={classes.form}
          // noValidate
          onSubmit={handleSubmit(onSubmit)}
        >
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="name"
            label="Name"
            autoComplete="name"
            autoFocus
            {...register("name")}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            id="email"
            label="Email Address"
            type="email"
            autoComplete="email"
            fullWidth
            {...register("email")}
          />

          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="phone"
            type="phone"
            label="Phone"
            autoComplete="phone"
            {...register("phone")}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="content"
            label="What you want to ask"
            autoComplete="content"
            multiline
            minRows={10}
            {...register("content")}
          />
          {/*<ReCaptchaV3 /> */}
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Send
          </Button>
        </form>
      </div>
    </Grid>
  );
};

ContactUs.getLayout = (page: ReactElement, siteConfig: SiteConfigModel) => (
  <Layout props={siteConfig}> {page} </Layout>
);
const useStyles = makeStyles((theme) => ({
  root: {
    height: "100%",
    minHeight: "120vh",
  },
  image: {
    backgroundRepeat: "no-repeat",
    backgroundColor:
      theme.palette.type === "light"
        ? theme.palette.grey[50]
        : theme.palette.grey[900],
    backgroundSize: "cover",
    backgroundPosition: "center",
  },
  video: {
    objectFit: "cover",
    zIndex: -1,
  },
  card: {
    position: "absolute",
    top: "12vh",
    color: "white",
    backgroundPosition: "center",
    /* background: "transparent", */
    background:
      "linear-gradient( to right, #f6e27a 0%, #f6f2c0 50%, #f6e27a 100%)",
    fontFamily: "mazzard",
    letterSpacing: "-1px",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    MozBackgroundClip: "text",
    MozTextFillColor: "transparent",
  },
  cardIcon: {
    color: "#f6e27a",
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));


export default ContactUs;
