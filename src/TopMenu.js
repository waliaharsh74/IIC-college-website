import React from "react";
import "./Top-menu.css";
function TopMenu() {
  return (
    <div className="top-menu ">
      <div className="d-flex sdk ">
        <ul className="float-right">
          <li>
            <a
              style={{ color: "#0044cc" }}
              href="https://www.gkv.ac.in/important_bodies/corporate-affairs-outreach-cell-placement-cell/"
              target="_blank"
            >
              Placement Cell
            </a>
          </li>
          {/* <li><a style="color:#0044cc" href="https://www.gkv.ac.in/wp-content/uploads/2021/12/Naac-a-Accrediated.pdf" target="_blank">NAAC 'A' Accredited</a></li> */}

          <li>
            <a style={{ color: "#0044cc" }} href="https://alumni.gkv.ac.in/">
              Alumni
            </a>
          </li>

          <li>
            <a
              style={{ color: "#0044cc" }}
              href="https://www.gkv.ac.in/tenders/"
            >
              Tenders
            </a>
          </li>

          <li>
            <a
              style={{ color: "#0044cc" }}
              href="http://www.gkvedu.com/fc.aspx"
              target="_blank"
            >
              Fee Payment
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default TopMenu;
