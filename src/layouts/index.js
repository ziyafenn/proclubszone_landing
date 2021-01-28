import React from "react";
import Helmet from "react-helmet";

// import './index.css'

const Layout = ({ children, data }) => (
  <div>
    <Helmet>
      <title>{data.site.siteMetadata.title}</title>
      <meta
        name="description"
        content="Companion mobile app that offers competitive online leagues and virtual pro career in FIFA Pro Clubs mode"
      />
      <meta
        name="keywords"
        content="fifa, pro, clubs, game, online, career, football, ea, soccer, league, esports"
      />

      <meta name="theme-color" content="#fecd51" />
      <meta name="msapplication-navbutton-color" content="#fecd51" />
      <meta name="apple-mobile-web-app-status-bar-style" content="#fecd51" />
      <meta property="og:url" content="https://proclubs.zone" />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="628" />
      <meta property="og:image" content="https://proclubs.zone/prz-fb.png" />
      <meta property="fb:app_id" content="365587397242588" />
      <meta property="og:title" content="Competitive Pro Clubs Leagues" />
      <meta
        property="og:description"
        content="Companion mobile app that offers competitive online leagues and virtual pro career in FIFA Pro Clubs mode"
      />
    </Helmet>
    <div>{children()}</div>
  </div>
);

export default Layout;
