import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import {Nav, Navbar} from 'react-bootstrap';
import './Header.css'
import resumeData from '../../utils/resumeData';
import { NavLink } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';
// import SchoolIcon from '@mui/icons-material/School';
// import WorkIcon from '@mui/icons-material/Work';
import TelegramIcon from '@mui/icons-material/Telegram';
import NavbarCollapse from 'react-bootstrap/esm/NavbarCollapse';
import CustomButton from '../Button/Button';

const Header = (props) => {
  const pathName = props?.location?.pathname
  console.log(pathName)
  return (
    <Navbar expand="lg" sticky="top" className="navbar header">
      <Nav.Link as={NavLink} to="/">
        <Navbar.Brand className="navbar-brand">
          <HomeIcon className="header_home" />
        </Navbar.Brand>
      </Nav.Link>
      <Navbar.Toggle />
      <NavbarCollapse>
        <Nav>
          <Nav.Link
            as={NavLink}
            to="/"
            className={pathName === "/" ? "header_link_active" : "header_link"}
          >
            Resume
          </Nav.Link>
          <Nav.Link
            as={NavLink}
            to="/portfolio"
            className={
              pathName === "/portfolio" ? "header_link_active" : "header_link"
            }
          >
            Portfolio
          </Nav.Link>
        </Nav>
        <div className="header_right">
          {Object.keys(resumeData.socials).map((key) => (
            <a
              href={resumeData.socials[key].link}
              rel="noreferrer"
              target="_blank"
            >
              {resumeData.socials[key].icon}
            </a>
          ))}
          <CustomButton text={"Hire me"} icon={<TelegramIcon />} />
        </div>
      </NavbarCollapse>
    </Navbar>
  );
}

export default Header