import React from "react";
import styles from "../utils/index.scss";
import apple from "../assets/apple-store-badge.png";
import google from "../assets/google-play-badge.png";
import playerCards from "../assets/player-cards.png";
import league from "../assets/league.png";
import transfer from "../assets/transfer.png";
import match from "../assets/match.png";
//import cardsBg from '../assets/cards-bg.png'
import logo from "../assets/logo.png";
import logoSmall from "../assets/logo-small.png";
import facebook from "../assets/icons/facebook.svg";
import youtube from "../assets/icons/youtube.svg";
//import instagram from '../assets/icons/instagram.svg'
import twitch from "../assets/icons/twitch-alt.svg";
import twitter from "../assets/icons/twitter.svg";
//import close from "../assets/icons/close.svg";
import { isAndroid, isIOS } from "react-device-detect";
// import { OutboundLink } from 'gatsby-plugin-google-analytics'
// import ReactGA from 'react-ga'

// import Modal from 'react-modal'

// Modal.setAppElement('#___gatsby')

export default class IndexPage extends React.Component {
  constructor() {
    super();

    this.state = {
      width: 0,
      //	modalIsOpen: false,
    };
    //	this.openModal = this.openModal.bind(this)
    //	this.closeModal = this.closeModal.bind(this)
  }

  // openModal() {
  //	this.setState({ modalIsOpen: true })
  // }

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

  handleItunes() {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event: "app_store",
    });
    window.open(
      "https://itunes.apple.com/us/app/pro-clubs-zone/id1437881479?ls=1&mt=8",
      "_self"
    );
    console.log("fired");
  }

  render() {
    const { width } = this.state;
    const md = width > 768;
    // the rest is the same...

    const appStore = (
      <div className="download">
        {!(isAndroid || isIOS) ? (
          <div className="storeButtons">
            <input
              type="image"
              className="button"
              src={apple}
              onClick={() => this.handleItunes()}
            />
            <input
              type="image"
              className="button"
              src={google}
              onClick={() => this.handleGooglePlay()}
            />
          </div>
        ) : (
          <div className="storeButtons">
            {isAndroid && (
              <input
                type="image"
                className="button"
                src={google}
                onClick={() => this.handleGooglePlay()}
              />
            )}
            {isIOS && (
              <input
                type="image"
                className="button"
                src={apple}
                onClick={() => this.handleItunes()}
              />
            )}
          </div>
        )}
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
        <h1>Competitive Pro Clubs Leagues</h1>
        <p>
          Download the companion app, create or join a club and enjoy your
          Virtual Pro career in FIFA Pro Clubs mode
        </p>
        {appStore}
      </div>
    );

    return (
      <div>
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
                  <h2>
                    Leagues & <br /> Competitions
                  </h2>
                  <p>
                    PRZ league system includes all National and Regional Leagues
                    of the World, which are further divided into Divisions.
                  </p>
                  <p>
                    League matches are played at{" "}
                    <b>21:45 and 22:30 in League's timezone</b> every:
                  </p>
                  <ul>
                    <li>Monday</li>
                    <li>Tuesday</li>
                    <li>Thursday</li>
                  </ul>
                  <p>
                    Leagues are activated based on the number of clubs joined
                    that league. The number of clubs determines how many
                    divisions will be generated.
                  </p>
                  <p>
                    If the League is not yet activated due to an insufficient
                    number of clubs, the club will be moved to World League and
                    play there until its League is activated.
                  </p>
                  <p>
                    There is no manual league administration, which allows PRZ
                    to handle thousands of pro clubs playing simultaneously
                    everywhere in the World.
                  </p>
                  <p>
                    National and international club competitions coming very
                    soon!
                  </p>
                </div>
              </div>
              <div className="right">
                <Phone screen={league} />
              </div>
            </div>
          </div>
          <div className="rowTwo">
            {md && <Phone screen={transfer} />}
            <div className="rowContent">
              {!md ? (
                <div className="left">
                  <Phone screen={transfer} />
                </div>
              ) : (
                <div className="left" />
              )}
              <div className="right">
                <div className="rowText">
                  <h2>Smart Transfer System</h2>
                  <p>
                    We know how hard it can be to find a right match between
                    teams and players. With this in mind, we introduce you our
                    Transfer System.
                  </p>
                  <p>
                    Players can find a perfect club that will match their
                    ambition and playing schedule; and managers can find a right
                    players that will fit well into the team.
                  </p>
                  <p>
                    Manage all transfer related inquiries from you personal
                    Transfer Centre and never miss a thing.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="rowThree">
            <div className="rowContent">
              <div className="left">
                <div className="rowText">
                  <h2>Effortless Match and Stats submission</h2>
                  <p>
                    Managers can add match information with just a few taps from
                    easy-to-use interface and not worry about the player stats
                    submission anymore.
                    <br />
                    Every player will be able to add his match stats for
                    himself.
                  </p>
                  <p>
                    Players can add their performance stats literally with just
                    two taps. Upload a performance screenshot and press submit.
                    Yes, that’s all.
                    <br />
                    Our app will read the data from the screenshot and add stats
                    for the player with no mistakes.
                  </p>
                  <p>It’s never been quicker and easier than this.</p>
                </div>
              </div>
              <div className="right">
                <Phone screen={match} />
              </div>
            </div>
          </div>
          <div className="rowFour">
            {md && <img src={playerCards} className="rowImage" />}
            <div className="rowContent">
              {!md ? (
                <div className="left">
                  <img src={playerCards} className="rowImage" />
                </div>
              ) : (
                <div className="left" />
              )}
              <div className="right">
                <div className="rowText">
                  <h2>Unique Player Cards</h2>
                  <p>
                    Every player in Pro Clubs Zone will have its very own card
                    that will upgrade based on the amount of official matches.
                    <br />
                    Players can also earn a special cards by participating in
                    various events or winning an award.
                  </p>
                  <p>
                    Got the rare card? You can show it off by sharing it on any
                    social network you want and let people know how special you
                    are!
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="rowFive">
            <div className="rowContent">
              <div className="row">
                <div className="feature">
                  <h3>Completely Automated World</h3>
                  <p>
                    In PRZ almost every aspect of the game is automated so you
                    can concentrate on the things that matter.
                  </p>
                </div>
                <div className="feature">
                  <h3>Friendly Cups & Matches</h3>
                  <p>
                    Got spare time? Create or join a Friendly Cup in one tap or
                    play a friendly match anytime you want.
                  </p>
                </div>
              </div>
              <div className="row">
                <div className="feature">
                  <h3>Cheat Detection</h3>
                  <p>
                    If opponent enters wrong information, system will
                    automatically raise a red flag.
                  </p>
                </div>
                <div className="feature">
                  <h3>In-app messaging</h3>
                  <p>
                    Chat with your club, opponent managers or potential signings
                    from one place.
                  </p>
                </div>
              </div>
              <div className="bottomText">
                <h2>and more features to come!</h2>
              </div>
            </div>
          </div>
          <div className="bottomDownload">
            <div className="rowContent">{description}</div>
          </div>
          {/*
					<div className="rowFive" id="cm">
						<div className="rowContent">
							<div>
								<h2>We are looking for community managers</h2>
								<p>
									Love Pro Clubs, got spare time and want to
									be a part of something big? <br />
									We are looking for community managers (CM),
									who will be a main contact persons for PRZ.
								</p>
								<p>
									You can apply to become a CM by messaging us
									on our <OutboundLink href="https://facebook.com/proclubszone">Facebook Page
									</OutboundLink>
								</p>
							</div>
						</div>
					</div>
				*/}
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
      </div>
    );
  }
}
