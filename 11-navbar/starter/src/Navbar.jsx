import { FaBars } from "react-icons/fa";
import logo from "./logo.svg";
import { useEffect, useRef, useState } from "react";
import { links, social } from "./data";
const Navbar = () => {
  const [showLinks, setShowLinks] = useState(false);
  const linksRef = useRef(null);
  const toggleLinks = () => {
    console.log(linksRef);
    setShowLinks(!showLinks);
  };
  console.log(linksRef);
  const linkStyles = {
    height: showLinks
      ? `${linksRef.current.getBoundingClientRect().height}px`
      : "0px",
  };
  return (
    <nav>
      <div className="nav-center">
        <div className="nav-header">
          <img src={logo} className="logo" />
          <button onClick={toggleLinks} className="toggle-btn">
            <FaBars />
          </button>
        </div>

        <div style={linkStyles} className="links-container">
          <ul className="nav-links" ref={linksRef}>
            {links.map((link) => {
              return (
                <li key={link.id}>
                  <a href={link.url}>{link.text}</a>
                </li>
              );
            })}
          </ul>
        </div>

        <ul className="social-icons">
          {social.map((socialIcon) => {
            const { id, url, icon } = socialIcon;
            return (
              <li className="social-icon" key={id}>
                <a href={url}>{icon}</a>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};
export default Navbar;
