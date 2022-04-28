import React from "react";
import { Nav, NavDropdown, Navbar, Container } from "react-bootstrap";
import "./New.css";
function New() {
  return (
    <div>
      <Navbar id="navBg" expand="lg">
        <Container>
          <Navbar.Brand href="#home">
            {" "}
            <div id="spaceu"></div>
            <img src="" alt="" srcset="" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <NavDropdown title="Home" id="basic-nav-dropdown">
                <div className="sd2">
                  <NavDropdown title="Campuses" id="basic-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1" id="home">
                      Main Campus
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2" id="home">
                      Kanya Gurukul Haridwar
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3" id="home">
                      kanya Gurukul dehradun
                    </NavDropdown.Item>
                  </NavDropdown>
                </div>
                <NavDropdown.Item href="#action/3.2" id="home">
                  Vission and Mission
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3" id="home">
                  Organization Structure
                </NavDropdown.Item>

                <div className="sd2">
                  <NavDropdown title="Administration" id="basic-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1" id="home">
                      The Chancellor
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2" id="home">
                      The Vice-Chancellor
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3" id="home">
                      The Registrar
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">
                      The Finance Officer
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3" id="home">
                      The Controller of Examination
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3" id="home">
                      Director IQAC
                    </NavDropdown.Item>
                    <div className="sd2">
                      <NavDropdown
                        title="Authorities of Viv."
                        id="basic-nav-dropdown"
                      >
                        <NavDropdown.Item href="#action/3.1" id="home">
                          Finance Committe
                        </NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2" id="home">
                          Bom Members
                        </NavDropdown.Item>
                      </NavDropdown>
                    </div>
                  </NavDropdown>
                </div>

                <NavDropdown.Item href="#action/3.3" id="home">
                  How to reach
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3" id="home">
                  Heads & Deans
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="#home" id="home">
                Academics
              </Nav.Link>
              <Nav.Link href="#link" id="home">
                Admissions
              </Nav.Link>
              <Nav.Link href="#link" id="home">
                Departments
              </Nav.Link>
              <NavDropdown title="Student@GKV" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.2" id="home">
                  Proctorial Board
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3" id="home">
                  Hostels
                </NavDropdown.Item>

                <NavDropdown.Item href="#action/3.3" id="home">
                  Guest House
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3" id="home">
                  Facilities
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3" id="home">
                  Central Library
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3" id="home">
                  Sports and Gym
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3" id="home">
                  Museum
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3" id="home">
                  Yoga
                </NavDropdown.Item>
                <div className="sd2">
                  <NavDropdown title="Clubs" id="basic-nav-dropdown">
                    <NavDropdown.Item href="#action/3.3" id="home">
                      Google Dev Club
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.1" id="home">
                      Eco club
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2" id="home">
                      Team Pride
                    </NavDropdown.Item>
                  </NavDropdown>
                </div>
                <NavDropdown.Item href="#action/3.3" id="home">
                  Unnat Bharat Abhiyan
                </NavDropdown.Item>
                <div className="sd2">
                  <NavDropdown title="NCC" id="basic-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1" id="home">
                      About NCC
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2" id="home">
                      Associate NCC Officer
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3" id="home">
                      History of NCC at GKV
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">
                      Cadets in Armed Forces
                    </NavDropdown.Item>
                    <div className="sd2">
                      <NavDropdown
                        title="Cadets Corner"
                        id="basic-nav-dropdown"
                      >
                        <NavDropdown.Item href="#action/3.1" id="home">
                          Benefits of NCC
                        </NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2" id="home">
                          Cadets Awards
                        </NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2" id="home">
                          Cadets Institutional Training
                        </NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2" id="home">
                          Cadets Participation in Camps
                        </NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2" id="home">
                          Cadets Ranks
                        </NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2" id="home">
                          Enrollment Criteria
                        </NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2" id="home">
                          Training Programme
                        </NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2" id="home">
                          Types of Camps
                        </NavDropdown.Item>
                      </NavDropdown>
                    </div>
                    <NavDropdown.Item href="#action/3.3" id="home">
                      History of NCC
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3" id="home">
                      NCC in Media
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3" id="home">
                      Village Adoption
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3" id="home">
                      More...
                    </NavDropdown.Item>
                  </NavDropdown>
                </div>
                <NavDropdown.Item href="#action/3.3" id="home">
                  More
                </NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="Research" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.2" id="home">
                  Research Project
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3" id="home">
                  Phd Awarded
                </NavDropdown.Item>
                <div className="sd2">
                  <NavDropdown title="Publication" id="basic-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1" id="home">
                      Gurukula Bussiness review
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2" id="home">
                      Gurukula Shodh Bharti
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3" id="home">
                      Gurukula Patrika
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3" id="home">
                      Gurukula Shodh Prabha
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3" id="home">
                      Gurukula Aushidya Sandesh
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3" id="home">
                      Journal of Nature and Physical Science
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3" id="home">
                      The Vedic Path
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3" id="home">
                      Vedic Vag Jyoti
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3" id="home">
                      FMS Newsletter Manthan
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3" id="home">
                      Nabhag FET News Letter
                    </NavDropdown.Item>
                  </NavDropdown>
                </div>
              </NavDropdown>
              <NavDropdown title="Bodies" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.2" id="home">
                  RTI Cell
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2" id="home">
                  SC/ST Cell
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2" id="home">
                  Anti Ragging Cell
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3" id="home">
                  Green Audit
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3" id="home">
                  Grievance Call
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3" id="home">
                  Equal Oppurtunity Cell
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3" id="home">
                  Student Counselling Cell
                </NavDropdown.Item>

                <NavDropdown.Item href="#action/3.3" id="home">
                  Intellectual Property Rights Cell
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3" id="home">
                  External Affairs Interface Cell (EAIC)
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3" id="home">
                  Dean Student Welfare
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3" id="home">
                  Institution's Innovation Council (IIC)
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3" id="home">
                  IT Services
                </NavDropdown.Item>
                <NavDropdown.Divider />
              </NavDropdown>

              <Nav.Link href="#link" id="home">
                IQAC
              </Nav.Link>
              <Nav.Link href="#link" id="home">
                Placements
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>{" "}
    </div>
  );
}

export default New;
