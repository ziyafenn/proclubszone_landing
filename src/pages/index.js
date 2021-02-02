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
import twitter from "../assets/icons/twitter.svg";
import { isAndroid, isIOS, isBrowser } from "react-device-detect";
import Layout from "../layouts/index";

export default class IndexPage extends React.Component {
  constructor() {
    super();

    this.state = {
      width: 0,
    };
  }

  closeModal() {
    this.setState({ modalIsOpen: false });
  }

  componentDidMount() {
    this.handleWindowSizeChange(); // Set width
    window.addEventListener("resize", this.handleWindowSizeChange);
  }

  // make sure to remove the listener
  // when the component is not mounted anymore
  componentWillUnmount() {
    window.removeEventListener("resize", this.handleWindowSizeChange);
  }

  handleWindowSizeChange = () => {
    this.setState({ width: window.innerWidth });
  };

  handleGooglePlay() {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event: "play_store",
    });
    window.open(
      "https://play.google.com/store/apps/details?id=com.proclubszone.app",
      "_self"
    );
  }

  render() {
    const { width } = this.state;
    const md = width > 768;
    // the rest is the same...

    const appStore = (
      <div className="download">
        <div className="storeButtons">
          {(isBrowser || isIOS) && (
            <input
              type="image"
              className="button"
              src={apple}
              onClick={() => {
                window.open(
                  "itms-apps://apps.apple.com/us/app/pro-clubs-zone/id1551138800",
                  "_self"
                );
              }}
            />
          )}
          {(isBrowser || isAndroid) && (
            <input
              type="image"
              className="button"
              src={google}
              //      onClick={() => this.handleGooglePlay()}
            />
          )}
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
        <h1>Pro Clubs Leagues made easy</h1>
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
          <div className="rowOne">
            <div className="rowContent">
              <div className="left">
                <div className="rowText">
                  <h2>Professional league management</h2>
                  <p>
                    Do you have an established league that you want to take to
                    the next level?
                    <br />
                    Or probably you are just thinking to start a new league?
                    Whatever your reasons are, PRZ has your back.
                  </p>
                  <p>
                    Pro Clubs Zone is a league management platform that offers
                    you tools and features required to run a league.
                  </p>
                  <p>
                    Each league get’s its own invitation link that admins and
                    clubs managers can share with other players.
                  </p>
                </div>
              </div>
              <div className="right">
                <Phone screen={leaguePreview} />
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
                  <h3>Let the PRZ do all boring bits</h3>
                  <p>
                    PRZ will take care of player registration, match scheduling,
                    publishing results and statistics.
                  </p>
                  <h3>Match Conflict resolution</h3>
                  <p>
                    If two teams submit different results, league admin will be
                    able to resolve a conflict with one tap.
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
                    Have a complete control over your squad and decide who
                    should stay and who should go.
                  </p>
                  <h3>Player stats import*</h3>
                  <p>
                    After every match, players can submit their stats without
                    manually typing everything.
                  </p>
                  <p
                    style={{
                      fontSize: 12,
                    }}
                  >
                    <i>*Available on beta invite</i>
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
