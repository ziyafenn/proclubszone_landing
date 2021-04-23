import React from "react";
import styles from "../utils/index.scss";
import apple from "../assets/apple-store-badge.png";
import google from "../assets/google-play-badge.png";
import leaguePreview from "../assets/league-preview.jpg";
import league from "../assets/league.jpg";
import home from "../assets/home.jpg";
import logo from "../assets/logo.png";
import logoSmall from "../assets/logo-small.png";
import facebook from "../assets/icons/facebook.svg";
import youtube from "../assets/icons/youtube.svg";
import twitch from "../assets/icons/twitch-alt.svg";
import discord from "../assets/icons/discord.svg";
import twitter from "../assets/icons/twitter.svg";
import check from "../assets/icons/check.svg";
import nocheck from "../assets/icons/no-check.svg";
import { isAndroid, isIOS } from "react-device-detect";
import Layout from "../layouts/index";

export default class IndexPage extends React.Component {
  constructor() {
    super();

    this.state = {
      width: 0,
      ios: false,
      android: false,
    };
  }

  componentDidMount() {
    this.handleWindowSizeChange(); // Set width
    window.addEventListener("resize", this.handleWindowSizeChange);
    if (isIOS) {
      this.setState({ ios: true });
    }
    if (isAndroid) {
      this.setState({ android: true });
    }
  }

  // make sure to remove the listener
  // when the component is not mounted anymore
  componentWillUnmount() {
    window.removeEventListener("resize", this.handleWindowSizeChange);
  }

  handleWindowSizeChange = () => {
    this.setState({ width: window.innerWidth });
  };

  render() {
    const { width, ios, android } = this.state;
    const md = width > 768;
    // the rest is the same...

    const appStore = (
      <div className="download">
        <div className="storeButtons">
          <input
            type="image"
            className="button"
            style={{
              display: !android ? "unset" : "none",
            }}
            src={apple}
            onClick={() => {
              window.open(
                "itms-apps://apps.apple.com/us/app/pro-clubs-zone/id1551138800",
                "_self"
              );
            }}
          />
          <input
            type="image"
            className="button"
            style={{
              display: !ios ? "unset" : "none",
            }}
            src={google}
            onClick={() => {
              window.open(
                "https://play.google.com/store/apps/details?id=com.proclubszone",
                "_self"
              );
            }}
          />
        </div>
      </div>
    );

    const Phone = (props) => (
      <div className="phoneBase">
        <img src={props.screen} />
      </div>
    );

    const SocialIcon = (props) => (
      <div className="icoText">
        <a href={props.href} target="_blank">
          <img src={props.icon} alt={props.name} className="socialIco" />
          <h4>{props.name}</h4>
        </a>
      </div>
    );

    const description = (
      <div className="description">
        <h1>Professional Pro Clubs League Platform</h1>
        <p>
          Create your league in seconds, share the invitation link with clubs
          and get started
        </p>
        {appStore}
      </div>
    );

    return (
      <Layout>
        <div className="header">
          <div className="headerContent">
            <div className="logoContainer">
              <img src={logo} className="logo" alt="Pro Clubs Zone" />
            </div>
            {description}
          </div>
        </div>
        <div className="content">
          <div className="promoVideo">
            <iframe
              width="640"
              height="360"
              src="https://www.youtube.com/embed/xYaddASqa2Q"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
          <div className="rowOne">
            <div className="rowContent">
              <div className="left">
                <div className="rowText">
                  <h2>Pro Clubs league made easy</h2>
                  <p>
                    Do you have an established league that you want to take to
                    the next level?
                    <br />
                    Or probably you are just thinking to start a new league?
                    Whatever your reasons are, PRZ has your back.
                  </p>
                  <p>
                    Pro Clubs Zone is a league platform that offers tools and
                    features required to run and participate in a league.
                  </p>
                  <p>
                    Each league gets its own invitation link that admins and
                    club managers can share with other players.
                  </p>
                </div>
              </div>
              <div className="right" style={{ maxHeight: "none" }}>
                <div className="tableContainer">
                  <table id="data">
                    <colgroup>
                      <col span="1" style={{ width: "40%" }} />
                      <col span="1" style={{ width: "20%" }} />
                      <col span="1" sstyle={{ width: "20%" }} />
                      <col span="1" style={{ width: "20%" }} />
                    </colgroup>
                    <thead>
                      <tr>
                        <th colspan="1" />
                        <th colspan="1" className="tableCell">
                          {`ProClubs\nZone`}
                        </th>
                        <th
                          colspan="1"
                          className="tableCell"
                        >{`League\nRepublic`}</th>
                        <th colspan="1" className="tableCell">
                          VPG
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Platform for independent leagues</td>
                        <td className="tableCell">
                          <img src={check} style={{ margin: 0 }} />
                        </td>
                        <td className="tableCell">
                          {" "}
                          <img src={check} style={{ margin: 0 }} />
                        </td>
                        <td className="tableCell">
                          {" "}
                          <img src={nocheck} style={{ margin: 0 }} />
                        </td>
                      </tr>
                      <tr>
                        <td>Tailored for Pro Clubs only</td>
                        <td className="tableCell">
                          <img src={check} style={{ margin: 0 }} />
                        </td>
                        <td className="tableCell">
                          <img src={nocheck} style={{ margin: 0 }} />
                        </td>
                        <td className="tableCell">
                          <img src={nocheck} style={{ margin: 0 }} />
                        </td>
                      </tr>
                      <tr>
                        <td>Complete FIFA stats integration</td>
                        <td className="tableCell">
                          <img src={check} style={{ margin: 0 }} />
                        </td>
                        <td className="tableCell">
                          <img src={nocheck} style={{ margin: 0 }} />
                        </td>
                        <td className="tableCell">
                          <img src={nocheck} style={{ margin: 0 }} />
                        </td>
                      </tr>
                      <tr>
                        <td>Players submit their own stats</td>
                        <td className="tableCell">
                          <img src={check} style={{ margin: 0 }} />
                        </td>
                        <td className="tableCell">
                          <img src={nocheck} style={{ margin: 0 }} />
                        </td>
                        <td className="tableCell">
                          <img src={nocheck} style={{ margin: 0 }} />
                        </td>
                      </tr>
                      <tr>
                        <td>For iOS and Android</td>
                        <td className="tableCell">
                          <img src={check} style={{ margin: 0 }} />
                        </td>
                        <td className="tableCell">
                          <img src={nocheck} style={{ margin: 0 }} />
                        </td>
                        <td className="tableCell">
                          <img src={check} style={{ margin: 0 }} />
                        </td>
                      </tr>
                      <tr>
                        <td>No ads and in-app purchases</td>
                        <td className="tableCell">
                          <img src={check} style={{ margin: 0 }} />
                        </td>
                        <td className="tableCell">
                          <img src={nocheck} style={{ margin: 0 }} />
                        </td>
                        <td className="tableCell">
                          <img src={nocheck} style={{ margin: 0 }} />
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
          <div className="rowTwo">
            {md && <Phone screen={league} />}
            <div className="rowContent">
              {!md ? (
                <div className="left">
                  <Phone screen={league} />
                </div>
              ) : (
                <div className="left" />
              )}
              <div className="right">
                <div className="rowText">
                  <h2>What's in for leagues?</h2>
                  <h3>League with your own rules</h3>
                  <p>
                    League admins have complete freedom to decide on a number of
                    teams, matches and match times for the league.
                  </p>
                  <h3>In-depth statistics</h3>
                  <p>
                    PRZ offers full integration with FIFA player performance
                    stats with just a screenshot upload.
                  </p>
                  <h3>Complete control over matches</h3>
                  <p>
                    League admins have complete control over fate of every
                    match.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="rowThree">
            <div className="rowContent">
              <div className="left">
                <div className="rowText">
                  <h2>What's in for clubs?</h2>
                  <h3>Effortless match submission</h3>
                  <p>
                    Clubs can submit a match within seconds and PRZ will take
                    care of everything else.
                  </p>
                  <h3>Roster management</h3>
                  <p>
                    Managers have a complete control over the roster and decide
                    who should stay and who should go.
                  </p>
                  <h3>Player stats import</h3>
                  <p>
                    After every match, players can upload an in-game match
                    screenshot of their player’s performance screen and the
                    application will add those stats for them.
                  </p>
                </div>
              </div>
              <div className="right">
                <Phone screen={home} />
              </div>
            </div>
          </div>
          <div className="bottomDownload">
            <div className="rowContent">{description}</div>
          </div>
          <div className="footer">
            <div className="rowContent">
              <div className="follow">
                <h2>Follow Pro Clubs Zone</h2>
                <div className="icons">
                  <SocialIcon
                    icon={facebook}
                    name="Facebook"
                    href="https://facebook.com/proclubszone"
                  />
                  <SocialIcon
                    icon={twitter}
                    name="Twitter"
                    href="https://twitter.com/proclubszone"
                  />
                  <SocialIcon
                    icon={youtube}
                    name="Youtube"
                    href="https://www.youtube.com/channel/UCx-u1tBHplWCiLACV6umcjQ"
                  />
                  <SocialIcon
                    icon={twitch}
                    name="Twitch"
                    href="https://www.twitch.tv/proclubszone"
                  />
                  <SocialIcon
                    icon={discord}
                    name="Discord"
                    href="https://discord.gg/bEdPt6ec4Y"
                  />
                </div>
              </div>
              <div className="footnotes">
                <div className="copyright">
                  <p>All Rights Reserved © 2021</p>
                  <p>
                    Pro Clubs Zone |{" "}
                    <a href="/privacy-policy"> Privacy Policy</a>
                  </p>
                </div>
                <img
                  src={logoSmall}
                  className="footerLogo"
                  alt="Pro Clubs Zone"
                />
                <div className="disclaimer">
                  <p>This product is not associated with EA Sports.</p>
                  <p>Player screenshots are property of Electronic Arts Inc.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    );
  }
}
