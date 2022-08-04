import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];

  const aTagMaker = links.map((link) => {
    return <a key={link} href={"#" + link}>{link}</a>
  })

  return <nav>{aTagMaker}</nav>;
}

export default NavBar;
