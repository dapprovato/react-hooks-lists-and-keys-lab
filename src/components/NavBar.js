import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];

  // const linkList = links.map((link) => {
  //   return <li key={link}>{link}</li>
  // })
  return <nav>
    {<a href="#home">home</a>}
    {<a href="#about">about</a>}
    {<a href="#projects">projects</a>}
  </nav>;
}

export default NavBar;
