import React from "react";
import { Box, Container, Row, Column } from "./HeaderStyles";

import "./Header.css";
const Header = () => {
  return (
    <Box>
      <Container>
        <Row>
          <div className="d ">
            <Column className="img1 justify-content-start">
              <img
                src="https://www.gkv.ac.in/wp-content/uploads/2021/11/gkvlogo.png"
                alt=""
                srcset=""
              />
            </Column>
            <Column className="img2">
              <img
                src="https://www.gkv.ac.in/wp-content/uploads/2021/11/gkv-logowritting.png"
                alt=""
                srcset=""
              />
            </Column>

            <Column className="img3">
              <img
                src="https://www.gkv.ac.in/wp-content/uploads/2021/11/gkv-founder.png"
                alt=""
                srcset=""
              />
            </Column>
          </div>
        </Row>
      </Container>
    </Box>
  );
};
export default Header;
