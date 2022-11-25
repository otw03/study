import React from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import reactjs from "./assets/img/reactjs.jpg";

const Meta = (props) => {
  return (
    <HelmetProvider>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{props.title}</title>

        <meta name="description" content={props.description} />
        <meta name="keywords" content={props.keywords} />
        <meta name="author" content={props.author} />
        <meta name="subject" content={props.subject} />
        <meta name="copyright" content={props.copyright} />
        <meta name="content-language" content="ko" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={props.title} />
        <meta property="og:description" content={props.description} />
        <meta property="og:url" content={props.url} />
        <meta property="og:image" content={props.image} />
        <link rel="icon" href={props.icon} type="image/png" />
        <link rel="shortcut icon" href={props.chortcutIcon} type="image/png" />
        <link rel="apple-touch-icon" href={props.appleTouchIcon} type="image/png" />
      </Helmet>
    </HelmetProvider>
  );
};

Meta.defaultProps = {
  title: "Covid19 Status",
  description: "Covid19 Status Chart",
  author: "otw",
  subject: "Covid19 Status Chart",
  copyright: "otw",
  keywords: "Covid19",
  url: window.location.href,
  image: reactjs,
  icon: null,
  shortcutIcon: null,
  appleTouchIcon: null
};

export default Meta;
