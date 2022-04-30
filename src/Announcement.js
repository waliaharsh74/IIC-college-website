import React, { useState } from "react";
import { Offcanvas, Button } from "react-bootstrap";

// import OffcanvasHeader from "react-bootstrap/OffcanvasHeader";
// import OffcanvasTitle from "react-bootstrap/OffcanvasTitle";

function Announcement() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div className="announce">
      <Button id="btnl" variant="primary" onClick={handleShow}>
        <h4 className="announceHeading">Announcement</h4>
      </Button>

      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title className="text-primary">
            Announcement
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <p className="announcement-body">
            Greetings, <br />
            <strong>
              Institution Innovation Council of Gurukula Kangri (Deemed to be
              University)
            </strong>
            is delighted to announce that we are about to establish five new
            student clubs in our University. With the inception of these
            enthralling clubs, we begin a new and enthusiastic chapter in our
            journey alongside our university . To embark on this new journey, we
            need your participation among the cells of your preferences. You
            have to click on the linktree link mentioned below which will
            redirect you to the various cells. You can then opt for the cell you
            are interested in, and selecting it will redirect you to its
            respective google form where you need to fill in your details. Later
            on, you will be mailed the invitation link of your preferred cell's
            Discord server.
            <br />
            <strong>LinkTree: </strong>
            <br />
            <a href="https://linktr.ee/shreyanshsourabh99">
              https://linktr.ee/shreyanshsourabh99
            </a>
            <br />
            <strong>Announcement video: </strong>
            <a href="https://youtu.be/GaVaC_-3g_c">
              https://youtu.be/GaVaC_-3g_c
            </a>
            <br />
            Individuals are allowed to opt for one cell among all.
          </p>
          <ul>
            <li>Startup cell</li>
            <li> KRANTI, The innovation cell</li>
            <li> IPR Cell</li>
            <li>Internship cell</li>
            <li> Social media Cell</li>
            <li>Jagriti, the cultural club</li>
          </ul>
          Further information about the club are mentioned in their respective
          google forms.
        </Offcanvas.Body>
      </Offcanvas>
    </div>
  );
}

export default Announcement;
