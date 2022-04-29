import React from "react";
import PublicIcon from "@mui/icons-material/Public";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import YouTubeIcon from "@mui/icons-material/YouTube";
import InstagramIcon from "@mui/icons-material/Instagram";
import "./Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="row row1  ">
        <div className="col-xs-12 col-lg-3 col-md-3 ">
          <img
            style={{ height: "80px" }}
            src="https://www.gkv.ac.in/wp-content/uploads/2021/11/gkvlogo.png"
            alt=""
          />

          <h4>Gurukula Kangri (Deemed to be University)</h4>
          <p style={{ "font-size": "14px" }}>
            P.O Gurukula Kangri,Haridwar-249404
          </p>
          <p>
            <PublicIcon />
            <a className="atag" href="www.gkv.ac.in">
              www.gkv.ac.in{" "}
            </a>
          </p>
          <p>
            <span className="icons">
              <a className="atag" href="https://www.facebook.com/gkvharidwar">
                <FacebookIcon />
              </a>
            </span>
            <span className="icons">
              <a className="atag" href="https://twitter.com/gkvsocial">
                <TwitterIcon />
              </a>
            </span>
            <span className="icons">
              <a
                className="atag"
                href="https://www.linkedin.com/school/gurukula-kangri-vishwavidyalaya/"
              >
                <LinkedInIcon />
              </a>
            </span>
            <span className="icons">
              <a
                className="atag"
                href="https://youtube.com/c/gurukulakangrivishwavidyalaya"
              >
                <YouTubeIcon />
              </a>
            </span>
            <span className="icons">
              <a className="atag" href="https://www.instagram.com/gkv_hdr/">
                <InstagramIcon />
              </a>
            </span>
          </p>
        </div>

        <div className="col-xs-12 col-lg-3 col-md-3 d1 brdr-left">
          <h4 className="">Quick Links</h4>
          <hr className="Line" />
          <p className="mb-0">
            <ul className="academics-sidebar-ul">
              <li className="academic-sidebar-li">
                <a className="atag" href="https://www.gkv.ac.in/">
                  Home{" "}
                </a>
              </li>
              <li className="academic-sidebar-li">
                <a className="atag" href="https://www.gkv.ac.in/about-us">
                  About Us{" "}
                </a>
              </li>
              <li className="academic-sidebar-li">
                <a
                  className="atag"
                  href="https://www.gkv.ac.in/mandatory-disclosure/"
                >
                  Mandatory Disclosure
                </a>
              </li>
              <li className="academic-sidebar-li">
                <a className="atag" href="http://mail.gkv.ac.in/">
                  Webmail
                </a>
              </li>
              <li className="academic-sidebar-li">
                <a
                  className="atag"
                  href="https://gkvelibrary.informaticsglobal.com/login"
                >
                  E-Resources
                </a>
              </li>
            </ul>
          </p>
        </div>
        <div className="col-xs-12 col-lg-3 col-md-3 d1 brdr-left">
          <h4 className="">Explore</h4>
          <hr className="Line" />
          <p className="mb-0">
            <ul className="academics-sidebar-ul">
              <li className="academic-sidebar-li">
                <a className="atag" href="https://www.gkv.ac.in/contact-us/">
                  Contact Us{" "}
                </a>
              </li>
              <li className="academic-sidebar-li">
                <a className="atag" href="https://www.gkv.ac.in/equipments/">
                  Equipments{" "}
                </a>
              </li>
              <li className="academic-sidebar-li">
                <a className="atag" href="https://www.gkv.ac.in/projects/">
                  Student Projects
                </a>
              </li>
              <li className="academic-sidebar-li">
                <a className="atag" href="https://www.gkv.ac.in/recruitments/">
                  Recruitments
                </a>
              </li>
              <li className="academic-sidebar-li">
                <a className="atag" href="https://www.gkv.ac.in/phd-awarded/">
                  phD Awarded
                </a>
              </li>
            </ul>
          </p>
        </div>
        <div className="col-xs-12 col-lg-3 col-md-3 d1">
          <h4>Search</h4>
          <hr className="Line" />

          <form
            action="https://www.gkv.ac.in/"
            method="get"
            id="adminbar-search"
          >
            <input type="text" id="adminbar-imput" name="s" />

            <span className="search-fbtn">
              <input type="submit" className="adminbar-button" value="Search" />
            </span>
          </form>
          <iframe
            className="map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13832.365066441076!2d78.11482691755751!3d29.91927460894344!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39094617e711e699%3A0x1b21859917cd7197!2sGurukul%20Kangri%20Vishwavidyalaya%2C%20Jagjeetpur%2C%20Haridwar%2C%20Uttarakhand!5e0!3m2!1sen!2sin!4v1651226003882!5m2!1sen!2sin"
            width="600"
            height="450"
            style={{ border: "0" }}
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
}

export default Footer;
