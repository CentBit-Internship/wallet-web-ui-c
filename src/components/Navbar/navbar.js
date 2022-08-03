import { React } from "react";
import "./navbar.css";
import {FaAngellist} from "react-icons/fa";
import {IoAnalytics} from "react-icons/io5";
import {RiTeamFill} from "react-icons/ri";
import {GoCalendar} from "react-icons/go";
import {MdContactSupport} from "react-icons/md";
import {AiTwotoneSetting} from "react-icons/ai";

const Navbar = () => {
  return (
    <div className="nav-section">
      <div className="nav-logo">
        <ul className="nav-avatar-ul">
          <div className="nav-avatar-div">
            <img
              className="nav-avatar"
              src="/images/man-avatar.jpg"
              alt="avatar"
            />
          </div>
          <li className="litag">Angela Gray</li>
          <li>
            <small>angela@gmail.com</small>
          </li>
        </ul>

        <div>
            <ul className="nav2-ul">
                <li><p><FaAngellist className="icon-"/>Overview</p></li>
                <li><p><IoAnalytics className="icon-"/>Analytics</p></li>
                <li><p><RiTeamFill className="icon-"/>Customers</p></li>
                <li><p><GoCalendar className="icon-"/>Calendar</p></li>
                <li><p><MdContactSupport className="icon-"/>Support</p></li>
                <li><p><AiTwotoneSetting className="icon-"/>Settings</p></li>
            </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
