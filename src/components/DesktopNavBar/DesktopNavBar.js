import React from "react";
import Button from "../Button/Button";
import Link from "../Link/Link";

export default DesktopNavBar = (props) => {
    
  return (
    <nav>
      <ul>
        <li>
          <Link></Link>
        </li>
        <li>
          <Link></Link>
        </li>
        <li>
          <Button label="Get in touch" />
        </li>
      </ul>
    </nav>
  );
};
