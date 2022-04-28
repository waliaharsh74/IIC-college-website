import React from "react";
import {
  Box,
  Container,
  Row,
  Column,
  FooterLink,
  Heading,
} from "./FooterStyles";

const Footer = () => {
  return (
    <Box>
      <h1 style={{ color: "green", textAlign: "center", marginTop: "-50px" }}>
        GeeksforGeeks: A Computer Science Portal for Geeks
      </h1>
      <Container>
        <Row>
          <Column>
            <div className="col-xs-12 col-md-3">
              <div className="widget dark">
                <img
                  className="mt-5 mb-10 footer-logo d-block m-auto"
                  alt=""
                  src="https://www.gkv.ac.in/wp-content/uploads/2021/11/gkvlogo.png"
                />
                <h4 className="text-white text-center mb-0">
                  Gurukula Kangri (Deemed to be University)
                </h4>
                <p className="text-center" style={{ color: "#777777" }}>
                  P.O Gurukula Kangri,Haridwar-249404
                </p>
                <ul className="list-inline mt-5 text-center">
                  <li className="m-0 pl-10 pr-10">
                    {" "}
                    <i className="fa fa-globe text-white mr-5" />{" "}
                    <a className="text-gray" href="javascript:void(0)">
                      www.gkv.ac.in
                    </a>{" "}
                  </li>
                </ul>
                <ul className="styled-icons icon-sm icon-bordered icon-circled clearfix mt-10 text-center">
                  <li>
                    <a
                      href="https://www.facebook.com/gkvharidwar"
                      target="_blank"
                    >
                      <i className="fa fa-facebook" />
                    </a>
                  </li>
                  <li>
                    <a href="https://twitter.com/gkvsocial" target="_blank">
                      <i className="fa fa-twitter" />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.linkedin.com/school/gurukula-kangri-vishwavidyalaya/"
                      target="_blank"
                    >
                      <i className="fa fa-linkedin text-white" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </Column>
          <Column>
            <Heading>Services</Heading>
            <FooterLink href="#">Writing</FooterLink>
            <FooterLink href="#">Internships</FooterLink>
            <FooterLink href="#">Coding</FooterLink>
            <FooterLink href="#">Teaching</FooterLink>
          </Column>
          <Column>
            <Heading>Contact Us</Heading>
            <FooterLink href="#">Uttar Pradesh</FooterLink>
            <FooterLink href="#">Ahemdabad</FooterLink>
            <FooterLink href="#">Indore</FooterLink>
            <FooterLink href="#">Mumbai</FooterLink>
          </Column>
          <Column>
            <Heading>Social Media</Heading>
            <FooterLink href="#">
              <i className="fab fa-facebook-f">
                <span style={{ marginLeft: "10px" }}>Facebook</span>
              </i>
            </FooterLink>
            <FooterLink href="#">
              <i className="fab fa-instagram">
                <span style={{ marginLeft: "10px" }}>Instagram</span>
              </i>
            </FooterLink>
            <FooterLink href="#">
              <i className="fab fa-twitter">
                <span style={{ marginLeft: "10px" }}>Twitter</span>
              </i>
            </FooterLink>
            <FooterLink href="#">
              <i className="fab fa-youtube">
                <span style={{ marginLeft: "10px" }}>Youtube</span>
              </i>
            </FooterLink>
          </Column>
        </Row>
      </Container>
    </Box>
  );
};
export default Footer;
