import React from "react";
import { links, social } from "./data";

const SideBar = () => {
  return (
    <>
      <h3>sidebar</h3>
      <div className="links-container show-container">
        <ul className="links">
          {links.map((link) => {
            const { id, url, text } = link;
            return (
              <li key={id}>
                <a href={url}>{text}</a>
              </li>
            );
          })}
        </ul>
      </div>
      <ul className="social-icons">
        {social.map((icons) => {
          const { id, url, icon } = icons;
          return (
            <li key={id}>
              <a href={url}>{icon}</a>
            </li>
          );
        })}
      </ul>
    </>
  );
};
export default SideBar;
