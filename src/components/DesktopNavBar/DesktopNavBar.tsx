import React from "react";
import "./DesktopNavBar.css";
import { Button, Menu, MenuButton, MenuList, MenuItem } from "@chakra-ui/react";
import Icon from "@mdi/react";
import { mdiChevronDown } from "@mdi/js";



const DesktopNavBar = () => {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <Button size="large" >
              About me
            </Button>
          </li>
          <li>
            <Menu>
              <MenuButton
                as={Button}
                rightIcon={<Icon path={mdiChevronDown} size={1} />}
              >
                Actions
              </MenuButton>
              <MenuList>
                <MenuItem>Download</MenuItem>
                <MenuItem>Create a Copy</MenuItem>
                <MenuItem>Mark as Draft</MenuItem>
                <MenuItem>Delete</MenuItem>
                <MenuItem>Attend a Workshop</MenuItem>
              </MenuList>
            </Menu>
            <Button size="large">
              My work
            </Button>
          </li>
          <li>
            <Button size="large" >
              Get in touch
            </Button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default DesktopNavBar;
