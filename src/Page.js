import React from "react";

import Fade from "react-reveal/Fade";
import Bounce from "react-reveal/Bounce";
import GitHubIcon from "@mui/icons-material/GitHub";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
// import { Parallax } from "react-scroll-parallax";
import "./Page.css";

function Page() {
  return (
    <div>
      <div>
        <div className="container">
          <div className="nav-scroller py-1 mb-2"></div>
        </div>

        <main className="container">
          <div className="col-md-4">
            <div className="position-sticky"></div>
          </div>
          <Fade bottom>
            <div className="p-4 mb-3 bg-light rounded s1-bg br1" id="Order-1">
              <h4 className=" font1 ">Spotlight</h4>
              <p className="mb-0">
                <ul className="academics-sidebar-ul">
                  <li className="academic-sidebar-li s1">
                    <div className="sidebar1 s1">
                      <a className="s1" href="https://www.gkv.ac.in/">
                        Home{" "}
                      </a>
                    </div>
                  </li>
                  <li className="academic-sidebar-li">
                    <div className="sidebar1 s1">
                      <a className="s1" href="https://www.gkv.ac.in/about-us">
                        About Vishwavidyalaya{" "}
                      </a>
                    </div>
                  </li>
                  <li className="academic-sidebar-li">
                    <div className="sidebar1 s1">
                      <a className="s1" href="#">
                        Administration
                      </a>
                    </div>
                  </li>
                  <li className="academic-sidebar-li">
                    <div className="sidebar1 s1">
                      <a
                        className="s1"
                        href="https://www.gkv.ac.in/the-chancellor"
                      >
                        The Chancellor
                      </a>
                    </div>
                  </li>
                  <li className="academic-sidebar-li">
                    <div className="sidebar1 s1">
                      <a
                        className="s1"
                        href="https://www.gkv.ac.in/the-vice-chancellor"
                      >
                        The Vice-Chancellor
                      </a>
                    </div>
                  </li>

                  <li className="academic-sidebar-li">
                    <div className="sidebar1 s1">
                      <a
                        className="s1"
                        href="https://www.gkv.ac.in/the-registrar"
                      >
                        The Registrar
                      </a>
                    </div>
                  </li>
                  <li className="academic-sidebar-li">
                    <div className="sidebar1 s1">
                      <a
                        className="s1"
                        href="https://www.gkv.ac.in/finance-officer"
                      >
                        The Finance Officer
                      </a>
                    </div>
                  </li>
                  <li className="academic-sidebar-li">
                    <div className="sidebar1 s1">
                      <a
                        className="s1"
                        href="https://www.gkv.ac.in/heads-deans/"
                      >
                        Heads &amp; Deans
                      </a>
                    </div>
                  </li>
                  <li className="academic-sidebar-li">
                    <div className="sidebar1 s1">
                      <a
                        className="s1"
                        href="https://www.gkv.ac.in/how-to-reach"
                      >
                        How to Reach
                      </a>
                    </div>
                  </li>
                </ul>
              </p>
            </div>
          </Fade>
          <div
            id="Order-2"
            className="p-4 p-md- mb-4 text-white rounded "
            style={{ background: " #1e2278" }}
          >
            <div className="col-md-8  px-40 bg-style ">
              <Fade right>
                <h4 className=" display-5 media1 fst-italic text1 hlo">
                  Institution’s Innovation Council (IIC)
                </h4>
              </Fade>
              <Fade right>
                <p className="lead my-3 text1 small-text hlo2">
                  To streamline and strengthen the GKV campus Innovation and
                  Start-up Ecosystem with continuous guidance & support from the
                  Ministry of Education’s Innovation Cell (MIC)& AICTE, GKV has
                  established “Institution’s Innovation Council of GKV” to join
                  the network of 3000 IICs across India & to leverage &
                  collaborate the opportunities with a wide range of network
                  enablers and institutions. Following are the list of
                  activities & CoordinatorsMembers of Institution’s Innovation
                  Council of GKV.
                  <ul className="text media2 hlo2">
                    <li>
                      <strong>President: </strong> Dr. Satyendra K. Rajput, DoPS
                    </li>
                    <li>
                      <strong>Vice President:</strong> Sh. O.P. Singh, Deputy
                      Director MSME
                    </li>
                    <li>
                      <strong>Convenor:</strong> Dr. Rakesh Bhutiani, Zoology
                    </li>
                  </ul>
                </p>
              </Fade>
              <p className="lead mb-0"></p>
            </div>
          </div>

          <div className="row mb-2">
            <div className="col-md-6"></div>
            <div className="col-md-6"></div>
          </div>

          <div className="row g-5">
            <div className="col-md-8">
              <Bounce bottom>
                <div
                  className=" br1 row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative"
                  id="Order-3"
                >
                  <div className="col">
                    <div classname="card" style={{ height: "100%" }}>
                      <h3 className="mb-0 text-success  extra-margin">
                        Co-ordinators
                      </h3>
                      <table className="table  table-striped table-bordered m-0  ">
                        <thead className="table-light fs-4 fw-bold py-5"></thead>
                        <tbody>
                          <tr>
                            <td className="coordinator-type">
                              <strong>NISP Co-ordinator</strong>
                            </td>
                            <td className="coordinator-name">
                              Dr. Vipul Sharma, ECE
                            </td>
                          </tr>
                          <tr>
                            <td className="coordinator-type">
                              <strong>NIRF Co-ordinator</strong>
                            </td>
                            <td className="coordinator-name">
                              Dr. Vipin Sharma, DoPS
                            </td>
                          </tr>
                          <tr>
                            <td className="coordinator-type">
                              <strong>ARIIA Co-ordinator</strong>
                            </td>
                            <td className="coordinator-name">
                              Dr. Nishant Kumar, CSE
                            </td>
                          </tr>
                          <tr>
                            <td className="coordinator-type">
                              <strong>IPR</strong>
                            </td>
                            <td className="coordinator-name">
                              Dr. Kapil Goel, DoPS
                            </td>
                          </tr>
                          <tr>
                            <td className="coordinator-type">
                              <strong>Internship</strong>
                            </td>
                            <td className="coordinator-name">
                              Dr. Ravindra Kumar, Chemistry
                            </td>
                          </tr>
                          <tr>
                            <td className="coordinator-type">
                              <strong>StartUP</strong>
                            </td>
                            <td className="coordinator-name">
                              Mr. Ashish Nainwal, ECE
                            </td>
                          </tr>
                          <tr>
                            <td className="coordinator-type">
                              <strong>Innovation</strong>
                            </td>
                            <td className="coordinator-name">
                              Dr. Nitin Bhardwaj, Zoology &amp; Environment
                            </td>
                          </tr>
                          <tr>
                            <td className="coordinator-type">
                              <strong>Social Activity</strong>
                            </td>
                            <td className="coordinator-name">
                              Dr. Krishna Kumar, MCA
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>

                  <div className="col-auto d-none d-lg-block"></div>
                </div>
              </Bounce>
              <Bounce bottom>
                <div
                  className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative"
                  id="Order-4"
                >
                  <div className="col p-4 d-flex flex-column position-static f1">
                    <h3 className="mb-0 text-primary text1">
                      Teaching And Non-Teaching Members
                    </h3>

                    <p className="mb-auto d-flex flex-row dc">
                      <div className="container">
                        <ul className="textt  ml-20 d-flex flex-column T1">
                          <li>Dr. Mayank Aggarwal, FIET</li>
                          <li>Prof. Vivek Kumar, MCA</li>
                          <li>Dr. Chiranjeev Banerjee, Botany</li>
                          <li>Mr. Kapil Dev Sharma, FET</li>
                          <li>Dr. Harish Chandra, Botany</li>
                          <li>Dr. Ajay Malik, B.P.Ed.</li>
                          <li>Mr. Vivek Arya, FET</li>
                          <li>Dr. Suhas, DoC</li>
                          <li>Dr. Neena Gupta, KGM Dehradun</li>
                          <li>Dr. Manila, KGM</li>
                          <li>Dr. Mohar Singh Meena, Sanskrit</li>
                          <li>Dr. Anuj Sharma, Electronics</li>
                          <li>Dr. Peeush Singhal, DoPS</li>
                          <li>Mr. Pankaj Kaushik, P.R.O</li>
                          <li>Dr. Ajeet, Hindi</li>

                          <li>Mr. Hemant Negi, Academic section</li>
                          <li>Mr. Kulbhushan, P.R.O office</li>
                        </ul>
                      </div>
                      <div className="container">
                        <ul className="text  d-flex flex-column T1 T2 ">
                          <li>Dr. Nidhi Handa, KGM Haridwar</li>
                          <li>Dr. Prince Prashant Sharma, DoPS</li>
                          <li>Dr. Kapil Pandey, MBA</li>
                          <li>Dr. Sandeep Kumar, Botany</li>
                          <li>Dr. Kapil Mishra,DoPE</li>
                          <li>Dr. Rajul Bhardwaj, MBA</li>
                          <li>Mr. Mayank Pokhriyal, FET</li>
                          <li>Mr. Balwant Singh Rawat,DoPS</li>
                          <li>Dr. Heman Pathak, KGM Dehradun</li>
                          <li>Mr. Rahul Singh,DoPS</li>
                          <li>Dr. Vineet, Department of Botany</li>
                          <li>Dr. Suyesh Bhardwaj, CSE FET</li>
                          <li>Dr. Kartikey Gupta, Microbiology</li>
                          <li>Dr. Vaaroon Bakshi. English</li>
                          <li>Dr. Dileep Kushwah, History</li>
                          <li>Mr. Rohit Bhardwaj,DoPS</li>
                          <li>Dr. Deendayal Vedalankar, DoV</li>
                        </ul>
                      </div>
                    </p>
                  </div>

                  <div className="col-auto d-none d-lg-block"></div>
                </div>
              </Bounce>
              <Bounce bottom>
                <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative f1">
                  <div className="col p-4 d-flex flex-column position-static">
                    <h3 className="mb-0 text-danger text1">External Members</h3>

                    <p className="mb-auto d-flex flex-row">
                      <ul className="text">
                        <li>Dr. Vikas Goyal, Vikas Industries,Haridwar</li>
                        <li>
                          Dr. Amit Agarwal, Director, A.P.J. Institute, Tanakpur
                        </li>
                      </ul>
                    </p>
                  </div>

                  <div className="col-auto d-none d-lg-block"></div>
                </div>
              </Bounce>
              <Bounce bottom>
                <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative f1">
                  <div className="col p-4 d-flex flex-column position-static">
                    <h3 className="mb-0 text-warning text1">Student Members</h3>

                    <p className="mb-auto d-flex flex-row dc">
                      <div className="container">
                        <ul className="text Student-ul textt ">
                          <li>Mr. Chirag Patel (Student Head Co-ordinator)</li>
                          <li>Mr.Harsh Walia(E-poster / Web Lead)</li>
                          <li>Mr. Ashish Bibyan(Advertisment Lead) </li>
                          <li>Mr. Naman Chandra(Hosting /Advertisment)</li>
                          <li>Mr.Kunal Singh Shekhawat(Consultant Lead)</li>
                          <li>Mr. Joshi bhavesh praveen(Consultant)</li>
                          <li>Mr. Sourabh dubey(Hosting)</li>
                        </ul>
                      </div>
                      <div className="container ">
                        <ul className="text  Student-ul  T2 ml-20 d-flex flex-column">
                          <li>Mr.Himanshu Shekhar(Consultant/Advertise)</li>

                          <li>Mr.Shivam Pant(Advertisment)</li>
                          <li>Aditya Khandelwal(Video Editing lead)</li>
                          <li>Mr.Abhinav Ranjan Jha(Hosting/E-Poster lead)</li>
                          <li>Mr.Rishu Kumar(Consultant)</li>
                          <li>Mr. Hansal Kothari(Content writer lead)</li>
                          <li>Mr. Harsh Bokadia(Advertisment)</li>
                        </ul>
                      </div>
                    </p>
                  </div>

                  <div className="col-auto d-none d-lg-block"></div>
                </div>
              </Bounce>
            </div>

            <div className="col-md-4">
              <div className="position-sticky">
                {/* <Parallax translateY={[-20, 20]}> */}
                <Fade bottom>
                  <div
                    className="p-4 mb-3 bg-light rounded s1-bg br1"
                    id="Order-5"
                  >
                    <h4 className=" font1 ">Spotlight</h4>
                    <p className="mb-0">
                      <ul className="academics-sidebar-ul">
                        <li className="academic-sidebar-li s1">
                          <div className="sidebar1 s1">
                            <a className="s1" href="https://www.gkv.ac.in/">
                              Home{" "}
                            </a>
                          </div>
                        </li>
                        <li className="academic-sidebar-li">
                          <div className="sidebar1 s1">
                            <a
                              className="s1"
                              href="https://www.gkv.ac.in/about-us"
                            >
                              About Vishwavidyalaya{" "}
                            </a>
                          </div>
                        </li>
                        <li className="academic-sidebar-li">
                          <div className="sidebar1 s1">
                            <a className="s1" href="#">
                              Administration
                            </a>
                          </div>
                        </li>
                        <li className="academic-sidebar-li">
                          <div className="sidebar1 s1">
                            <a
                              className="s1"
                              href="https://www.gkv.ac.in/the-chancellor"
                            >
                              The Chancellor
                            </a>
                          </div>
                        </li>
                        <li className="academic-sidebar-li">
                          <div className="sidebar1 s1">
                            <a
                              className="s1"
                              href="https://www.gkv.ac.in/the-vice-chancellor"
                            >
                              The Vice-Chancellor
                            </a>
                          </div>
                        </li>

                        <li className="academic-sidebar-li">
                          <div className="sidebar1 s1">
                            <a
                              className="s1"
                              href="https://www.gkv.ac.in/the-registrar"
                            >
                              The Registrar
                            </a>
                          </div>
                        </li>
                        <li className="academic-sidebar-li">
                          <div className="sidebar1 s1">
                            <a
                              className="s1"
                              href="https://www.gkv.ac.in/finance-officer"
                            >
                              The Finance Officer
                            </a>
                          </div>
                        </li>
                        <li className="academic-sidebar-li">
                          <div className="sidebar1 s1">
                            <a
                              className="s1"
                              href="https://www.gkv.ac.in/heads-deans/"
                            >
                              Heads &amp; Deans
                            </a>
                          </div>
                        </li>
                        <li className="academic-sidebar-li">
                          <div className="sidebar1 s1">
                            <a
                              className="s1"
                              href="https://www.gkv.ac.in/how-to-reach"
                            >
                              How to Reach
                            </a>
                          </div>
                        </li>
                      </ul>
                    </p>
                  </div>
                </Fade>
                {/* </Parallax> */}
                <Fade bottom>
                  <div className="p-4">
                    <h4 className=" text-info">Events</h4>
                    <ol className="list-style-disc mb-0 text ">
                      <li>
                        <a href="https://www.gkv.ac.in/wp-content/uploads/2021/12/2021_10_04_L1.pdf">
                          Impact Lecture on How to start a startup in India? on
                          04/10/2021
                        </a>
                      </li>
                      <li>
                        <a href="https://www.gkv.ac.in/wp-content/uploads/2021/12/2021_10_04_L2.pdf">
                          Impact Lecture on Angel investment and VC funding on
                          04/10/2021
                        </a>
                      </li>
                      <li>
                        <a href="https://www.gkv.ac.in/wp-content/uploads/2021/12/2021_10_12_L3.pdf">
                          Impact Lecture on International Patentability and
                          Patent Prosecution Process on 12/10/2021
                        </a>
                      </li>
                      <li>
                        <a href="https://www.gkv.ac.in/wp-content/uploads/2021/12/2021_08_06.pdf">
                          A Report on Research Project and Funding Opportunities
                        </a>
                      </li>
                      <li>
                        <a href="https://www.gkv.ac.in/wp-content/uploads/2021/12/2021_07_16.pdf">
                          Webinar/Workshop on Grant and IPR on 16 July 2021.
                        </a>
                      </li>
                      <li>
                        <a href="https://www.gkv.ac.in/wp-content/uploads/2021/12/2021_07_10.pdf">
                          Workshop on “Startup – Your First Step” on 10th July
                          2021.
                        </a>
                      </li>
                      <li>
                        <a href="https://www.gkv.ac.in/wp-content/uploads/2021/12/2021/2021_07_07.pdf">
                          Webinar on “Fruit flies in space: Innovation Relevant
                          to Astronaut’s health” on 7th July 2021.
                        </a>
                      </li>
                      <li>
                        <a href="https://www.gkv.ac.in/wp-content/uploads/2021/12/2021_6_26.pdf">
                          Felicitation and Motivation session for GPAT toppers
                          on 26th June 2021.
                        </a>
                      </li>
                      <li>
                        <a href="https://www.gkv.ac.in/wp-content/uploads/2021/12/2021_06_22.pdf">
                          Webinar attended by IIC members conducted by IBM on
                          “IBM’s offerings and partnership with academic
                          institutes” on 22nd June 2021.
                        </a>
                      </li>
                      <li>
                        <a href="https://www.gkv.ac.in/wp-content/uploads/2021/12/2021_06_29_UnlockingOpportunities.pdf">
                          Webinar on “Unlocking opportunities and potential with
                          internship on 20th June 2021.
                        </a>
                      </li>
                      <li>
                        <a href="https://www.gkv.ac.in/wp-content/uploads/2021/12/2021_06_29_AwarenessNEAT.pdf">
                          AICTE webinar on awareness of NEAT Scheme and
                          Internship on 16th June 2021.
                        </a>
                      </li>
                      <li>
                        <a href="https://www.gkv.ac.in/wp-content/uploads/2021/12/2021_04_MIC-IPR-WEBINAR-REPORT.pdf">
                          Webinar attended by IIC members conducted by MIC
                          Driven Activity on “Your Ph.D./Masters Thesis to
                          start-up” on 23rd April 2021.
                        </a>
                      </li>
                      <li>
                        <a href="https://www.gkv.ac.in/wp-content/uploads/2021/12/2021_02_22.pdf">
                          Webinar on “Empowerment through Enterprise” on 22nd
                          Feb 2021.
                        </a>
                      </li>
                      <li>
                        <a href="https://www.gkv.ac.in/wp-content/uploads/2021/12/WebIICStart9Feb2021.pdf">
                          Webinar on A Conversation to Start your Journey of
                          Entrepreneurship/Startup 9th Feb 2021.
                        </a>
                      </li>
                      <li>
                        <a href="https://www.gkv.ac.in/wp-content/uploads/2021/12/2021_02_10_WebTmIPRInstInovCnclMHRD.pdf">
                          Webinar attended by a team of IPR under Institution’s
                          Innovation Council (MHRD) on 10th Feb 2021.
                        </a>
                      </li>
                      <li>
                        <a href="https://www.gkv.ac.in/wp-content/uploads/2021/12/2021_02_06_WebTmIPR.pdf">
                          Webinar attended by a team of IPR on 6th Feb 2021
                        </a>
                      </li>
                    </ol>
                  </div>
                </Fade>

                <div className="p-4">
                  {/* <h4 className="fst-bold text-purple">Social Media</h4> */}

                  <>
                    <Fade bottom>
                      <ol className="list-unstyled text d-flex social">
                        <li>
                          <GitHubIcon className="gicon" />
                          <a href="#">GitHub</a>
                        </li>
                        <li>
                          <TwitterIcon className="ticon" />
                          <a href="#">Twitter</a>
                        </li>
                        <li>
                          <FacebookIcon className="ficon" />
                          <a href="#">Facebook</a>
                        </li>
                        <li>
                          <InstagramIcon className="instagram" />
                          <a href="#">Instagram</a>
                        </li>
                      </ol>
                    </Fade>
                  </>
                </div>
              </div>
            </div>
          </div>
        </main>

        <footer className="blog-footer">
          <p>
            <a href="#">Back to top</a>
            {/* add footer here */}
          </p>
        </footer>
      </div>
    </div>
  );
}

export default Page;
