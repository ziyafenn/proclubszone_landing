import React from "react";
import { Helmet } from "react-helmet";

// import './index.css'

const title = "Pro Clubs Leagues made easy";
const description =
  "Create your Pro Clubs league in seconds, share the invitation link with clubs and get started";

const Layout = ({ children, data }) => (
  <>
    <Helmet>
      <title>Pro Clubs Zone - FIFA Pro Clubs Leagues Made Easy</title>
      <meta
        name="description"
        content="Create your FIFA Pro Clubs league in seconds, share the invitation link with clubs and get started"
      />
      <meta
        name="keywords"
        content="fifa, pro, clubs, game, online, career, football, ea, soccer, league, esports"
      />

      <meta name="theme-color" content="#fecd51" />
      <meta name="msapplication-navbutton-color" content="#fecd51" />
      <meta name="apple-mobile-web-app-status-bar-style" content="#fecd51" />
      <meta property="og:url" content="https://proclubs.zone" />
      <meta property="og:image:width" content="1600" />
      <meta property="og:image:height" content="1600" />
      <meta
        property="og:image"
        content="https://storage.googleapis.com/pro-clubs-zone-v2.appspot.com/web/og-image-fb.jpg"
      />
      {/* <meta property="fb:app_id" content="365587397242588" /> */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:site" content="@proclubszone" />
      <meta name="twitter:creator" content="@ziyafenn" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta
        name="twitter:image"
        content="https://storage.googleapis.com/pro-clubs-zone-v2.appspot.com/web/og-image.jpg"
      />
      <link rel="canonical" href="https://proclubs.zone" />
    </Helmet>
    <div>{children}</div>
  </>
);

export default Layout;
