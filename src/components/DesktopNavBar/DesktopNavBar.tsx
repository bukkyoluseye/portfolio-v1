import React from "react";
import Button from "../Button/Button";
import Link from "../Link/Link";

const DesktopNavBar = () => {
    
  return (
    <nav>
      <ul>
        <li>
          <Link href={""} rel={""} target={""}></Link>
        </li>
        <li>
          <Link href={""} rel={""} target={""}></Link>
        </li>
        <li>
          <Button label="Get in touch" />
        </li>
      </ul>
    </nav>
  );
};

export default DesktopNavBar