import React from "react";
import { Nav, NavDropdown, Navbar, Container } from "react-bootstrap";
import "./New.css";
function New() {
  return (
    <div>
      <Navbar id="navBg" expand="lg">
        <Container>
          <Navbar.Brand href="https://www.gkv.ac.in/">
            {" "}
            <div id="spaceu"></div>
            <img src="" alt="" srcset="" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <div className="dropdownTag">
                <a href="https://www.gkv.ac.in/">Home</a>
              </div>
              <NavDropdown title="" id="basic-nav-dropdown">
                <div className="sd2">
                  <NavDropdown title="Campuses" id="basic-nav-dropdown">
                    <NavDropdown.Item
                      href="https://www.gkv.ac.in/about-us/"
                      id="home"
                    >
                      Main Campus
                    </NavDropdown.Item>
                    <NavDropdown.Item
                      href="https://www.gkv.ac.in/kanya-gurukula-haridwar/"
                      id="home"
                    >
                      Kanya Gurukul Haridwar
                    </NavDropdown.Item>
                    <NavDropdown.Item
                      href="ttps://www.gkv.ac.in/kanya-gurukula-dehradun/"
                      id="home"
                    >
                      kanya Gurukul dehradun
                    </NavDropdown.Item>
                  </NavDropdown>
                </div>
                <NavDropdown.Item
                  href="https://www.gkv.ac.in/vision-and-mission/"
                  id="home"
                >
                  Vission and Mission
                </NavDropdown.Item>
                <NavDropdown.Item
                  href="https://www.gkv.ac.in/organization-structure/"
                  id="home"
                >
                  Organization Structure
                </NavDropdown.Item>

                <div className="sd2">
                  <NavDropdown title="Administration" id="basic-nav-dropdown">
                    <NavDropdown.Item
                      href="https://www.gkv.ac.in/the-chancellor/"
                      id="home"
                    >
                      The Chancellor
                    </NavDropdown.Item>
                    <NavDropdown.Item
                      href="https://www.gkv.ac.in/the-vice-chancellor/"
                      id="home"
                    >
                      The Vice-Chancellor
                    </NavDropdown.Item>
                    <NavDropdown.Item
                      href="https://www.gkv.ac.in/the-registrar/"
                      id="home"
                    >
                      The Registrar
                    </NavDropdown.Item>
                    <NavDropdown.Item href="https://www.gkv.ac.in/finance-officer/">
                      The Finance Officer
                    </NavDropdown.Item>
                    <NavDropdown.Item
                      href="https://www.gkv.ac.in/the-controller-of-examination/"
                      id="home"
                    >
                      The Controller of Examination
                    </NavDropdown.Item>
                    <NavDropdown.Item
                      href="https://www.gkv.ac.in/director-iqac/"
                      id="home"
                    >
                      Director IQAC
                    </NavDropdown.Item>
                    <div className="sd2">
                      <NavDropdown
                        title="Authorities of Viv."
                        id="basic-nav-dropdown"
                      >
                        <NavDropdown.Item
                          href="https://www.gkv.ac.in/finance-committee/"
                          id="home"
                        >
                          Finance Committe
                        </NavDropdown.Item>
                        <NavDropdown.Item
                          href="https://www.gkv.ac.in/bom-members/"
                          id="home"
                        >
                          Bom Members
                        </NavDropdown.Item>
                      </NavDropdown>
                    </div>
                  </NavDropdown>
                </div>

                <NavDropdown.Item
                  href="https://www.gkv.ac.in/how-to-reach/"
                  id="home"
                >
                  How to reach
                </NavDropdown.Item>
                <NavDropdown.Item
                  href="https://www.gkv.ac.in/heads-deans/"
                  id="home"
                >
                  Heads & Deans
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="https://www.gkv.ac.in/notification/" id="home">
                Academics
              </Nav.Link>
              <Nav.Link
                href="https://www.gkv.ac.in/admissions/2022-23/"
                id="home"
              >
                Admissions
              </Nav.Link>
              <Nav.Link
                href="https://www.gkv.ac.in/list-of-departments/"
                id="home"
              >
                Departments
              </Nav.Link>
              <div className="dropdownTag">
                <a href="https://www.gkv.ac.in/">Student@GKV</a>
              </div>

              <NavDropdown title="" id="basic-nav-dropdown">
                <NavDropdown.Item
                  href="https://www.gkv.ac.in/proctorial-board/"
                  id="home"
                >
                  Proctorial Board
                </NavDropdown.Item>
                <NavDropdown.Item
                  href="https://www.gkv.ac.in/hostel-information/"
                  id="home"
                >
                  Hostels
                </NavDropdown.Item>

                <NavDropdown.Item
                  href="https://www.gkv.ac.in/guest-house/"
                  id="home"
                >
                  Guest House
                </NavDropdown.Item>
                <NavDropdown.Item
                  href="https://www.gkv.ac.in/facilities/"
                  id="home"
                >
                  Facilities
                </NavDropdown.Item>
                <NavDropdown.Item
                  href="https://www.gkv.ac.in/central-library-2/"
                  id="home"
                >
                  Central Library
                </NavDropdown.Item>
                <NavDropdown.Item
                  href="https://www.gkv.ac.in/sports-extra-curricular-facilities/"
                  id="home"
                >
                  Sports and Gym
                </NavDropdown.Item>
                <NavDropdown.Item
                  href="https://www.gkv.ac.in/museum/"
                  id="home"
                >
                  Museum
                </NavDropdown.Item>
                <NavDropdown.Item href="https://www.gkv.ac.in/yoga/" id="home">
                  Yoga
                </NavDropdown.Item>
                <div className="sd2">
                  <NavDropdown title="Clubs" id="basic-nav-dropdown">
                    <NavDropdown.Item
                      href="https://www.gkv.ac.in/google-developer-student-clubs/"
                      id="home"
                    >
                      Google Dev Club
                    </NavDropdown.Item>
                    <NavDropdown.Item
                      href="https://www.gkv.ac.in/eco-club/"
                      id="home"
                    >
                      Eco club
                    </NavDropdown.Item>
                    <NavDropdown.Item
                      href="https://www.gkv.ac.in/team-pride/"
                      id="home"
                    >
                      Team Pride
                    </NavDropdown.Item>
                  </NavDropdown>
                </div>
                <NavDropdown.Item
                  href="https://www.gkv.ac.in/unnat-bharat-abhiyan/"
                  id="home"
                >
                  Unnat Bharat Abhiyan
                </NavDropdown.Item>
                <div className="sd2">
                  <NavDropdown title="NCC" id="basic-nav-dropdown">
                    <NavDropdown.Item
                      href="https://www.gkv.ac.in/about-ncc/"
                      id="home"
                    >
                      About NCC
                    </NavDropdown.Item>
                    <NavDropdown.Item
                      href="https://www.gkv.ac.in/associate-ncc-officer/"
                      id="home"
                    >
                      Associate NCC Officer
                    </NavDropdown.Item>
                    <NavDropdown.Item
                      href="https://www.gkv.ac.in/history-of-ncc-at-gkv/"
                      id="home"
                    >
                      History of NCC at GKV
                    </NavDropdown.Item>
                    <NavDropdown.Item href="https://www.gkv.ac.in/cadets-in-armed-forces/">
                      Cadets in Armed Forces
                    </NavDropdown.Item>
                    <div className="sd2">
                      <NavDropdown
                        title="Cadets Corner"
                        id="basic-nav-dropdown"
                      >
                        <NavDropdown.Item
                          href="https://www.gkv.ac.in/benefits-of-ncc/"
                          id="home"
                        >
                          Benefits of NCC
                        </NavDropdown.Item>
                        <NavDropdown.Item
                          href="https://www.gkv.ac.in/cadets-awards/"
                          id="home"
                        >
                          Cadets Awards
                        </NavDropdown.Item>
                        <NavDropdown.Item
                          href="https://www.gkv.ac.in/cadets-institutional-training/"
                          id="home"
                        >
                          Cadets Institutional Training
                        </NavDropdown.Item>
                        <NavDropdown.Item
                          href="https://www.gkv.ac.in/cadets-participation-in-camps/"
                          id="home"
                        >
                          Cadets Participation in Camps
                        </NavDropdown.Item>
                        <NavDropdown.Item
                          href="https://www.gkv.ac.in/cadets-ranks/"
                          id="home"
                        >
                          Cadets Ranks
                        </NavDropdown.Item>
                        <NavDropdown.Item
                          href="https://www.gkv.ac.in/enrollment-criteria/"
                          id="home"
                        >
                          Enrollment Criteria
                        </NavDropdown.Item>
                        <NavDropdown.Item
                          href="https://www.gkv.ac.in/training-programme/"
                          id="home"
                        >
                          Training Programme
                        </NavDropdown.Item>
                        <NavDropdown.Item
                          href="https://www.gkv.ac.in/types-of-camps/"
                          id="home"
                        >
                          Types of Camps
                        </NavDropdown.Item>
                      </NavDropdown>
                    </div>
                    <NavDropdown.Item
                      href="https://www.gkv.ac.in/history-of-ncc/"
                      id="home"
                    >
                      History of NCC
                    </NavDropdown.Item>
                    <NavDropdown.Item
                      href="https://www.gkv.ac.in/ncc-in-media/"
                      id="home"
                    >
                      NCC in Media
                    </NavDropdown.Item>
                    <NavDropdown.Item
                      href="https://www.gkv.ac.in/village-adoption/"
                      id="home"
                    >
                      Village Adoption
                    </NavDropdown.Item>
                    <NavDropdown.Item
                      href="https://www.gkv.ac.in/student-corner/"
                      id="home"
                    >
                      More...
                    </NavDropdown.Item>
                  </NavDropdown>
                </div>
                <NavDropdown.Item href="#action/3.3" id="home">
                  More
                </NavDropdown.Item>
              </NavDropdown>
              <div className="dropdownTag">
                <a href="https://www.gkv.ac.in/">Research</a>
              </div>
              <NavDropdown title="" id="basic-nav-dropdown">
                <NavDropdown.Item
                  href="https://www.gkv.ac.in/projects/"
                  id="home"
                >
                  Research Project
                </NavDropdown.Item>
                <NavDropdown.Item
                  href="https://www.gkv.ac.in/phd-awarded/"
                  id="home"
                >
                  Phd Awarded
                </NavDropdown.Item>
                <div className="sd2">
                  <NavDropdown title="Publication" id="basic-nav-dropdown">
                    <NavDropdown.Item
                      href="http://www.gurukulbusinessreview.in/"
                      id="home"
                    >
                      Gurukula Bussiness review
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2" id="home">
                      Gurukula Shodh Bharti
                    </NavDropdown.Item>
                    <NavDropdown.Item
                      href="http://www.gurukulpatrika.in/"
                      id="home"
                    >
                      Gurukula Patrika
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3" id="home">
                      Gurukula Shodh Prabha
                    </NavDropdown.Item>
                    <NavDropdown.Item
                      href="https://www.gkv.ac.in/gurukula-aushdhiya-sandesh/"
                      id="home"
                    >
                      Gurukula Aushidya Sandesh
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3" id="home">
                      Journal of Nature and Physical Science
                    </NavDropdown.Item>
                    <NavDropdown.Item href="http://thevedicpath.in" id="home">
                      The Vedic Path
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3" id="home">
                      Vedic Vag Jyoti
                    </NavDropdown.Item>
                    <NavDropdown.Item
                      href="https://www.gkv.ac.in/fms-newsletter-manthan/"
                      id="home"
                    >
                      FMS Newsletter Manthan
                    </NavDropdown.Item>
                    <NavDropdown.Item
                      href="https://www.gkv.ac.in/nabhag-fet-news-letter/"
                      id="home"
                    >
                      Nabhag FET News Letter
                    </NavDropdown.Item>
                  </NavDropdown>
                </div>
              </NavDropdown>
              <NavDropdown title="Bodies" id="basic-nav-dropdown">
                <NavDropdown.Item
                  href="https://www.gkv.ac.in/important_bodies/right-to-information-cell/"
                  id="home"
                >
                  RTI Cell
                </NavDropdown.Item>
                <NavDropdown.Item
                  href="https://www.gkv.ac.in/important_bodies/sc-st-cell/"
                  id="home"
                >
                  SC/ST Cell
                </NavDropdown.Item>
                <NavDropdown.Item
                  href="https://www.gkv.ac.in/important_bodies/anti-ragging-cell/"
                  id="home"
                >
                  Anti Ragging Cell
                </NavDropdown.Item>
                <NavDropdown.Item
                  href="https://www.gkv.ac.in/important_bodies/green-audit/"
                  id="home"
                >
                  Green Audit
                </NavDropdown.Item>
                <NavDropdown.Item
                  href="https://www.gkv.ac.in/important_bodies/grievance-cell/"
                  id="home"
                >
                  Grievance Call
                </NavDropdown.Item>
                <NavDropdown.Item
                  href="https://www.gkv.ac.in/important_bodies/equal-opportunity-cell/"
                  id="home"
                >
                  Equal Oppurtunity Cell
                </NavDropdown.Item>
                <NavDropdown.Item
                  href="https://www.gkv.ac.in/important_bodies/students-counselling-cell/"
                  id="home"
                >
                  Student Counselling Cell
                </NavDropdown.Item>

                <NavDropdown.Item
                  href="https://www.gkv.ac.in/important_bodies/intellectual-property-rights-cell/"
                  id="home"
                >
                  Intellectual Property Rights Cell
                </NavDropdown.Item>
                <NavDropdown.Item
                  href="https://www.gkv.ac.in/important_bodies/eaic/"
                  id="home"
                >
                  External Affairs Interface Cell (EAIC)
                </NavDropdown.Item>
                <NavDropdown.Item
                  href="https://www.gkv.ac.in/important_bodies/dsw/"
                  id="home"
                >
                  Dean Student Welfare
                </NavDropdown.Item>
                <NavDropdown.Item
                  href="https://www.gkv.ac.in/institutions-innovation-council-iic/"
                  id="home"
                >
                  Institution's Innovation Council (IIC)
                </NavDropdown.Item>
                <NavDropdown.Item
                  href="https://www.gkv.ac.in/it-services/"
                  id="home"
                >
                  IT Services
                </NavDropdown.Item>
                <NavDropdown.Divider />
              </NavDropdown>

              <Nav.Link href="https://www.gkv.ac.in/iqac/" id="home">
                IQAC
              </Nav.Link>
              <Nav.Link
                href="https://www.gkv.ac.in/important_bodies/placement-cell/"
                id="home"
              >
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
