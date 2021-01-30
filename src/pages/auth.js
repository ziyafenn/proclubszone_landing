import React from "react";
import { Helmet } from "react-helmet";
import styles from "../utils/index.scss";

export default class PrivacyPolicy extends React.Component {
  render() {
    return (
      <div className="content">
        <Helmet>
          <meta name="robots" content="noindex" />
        </Helmet>
        <div className="auth">
          <h3>You are being redirected back to the app</h3>
        </div>
      </div>
    );
  }
}
