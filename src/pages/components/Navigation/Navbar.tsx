import React from "react";
import Logo from "../Logo/Logo";
import { Menu } from "react-feather";
import {
  Navbar as NavbarWrapper,
  Dropdown,
  CustomFlowbiteTheme,
  Flowbite,
} from "flowbite-react";
import style from "./navbar.module.css";

const customTheme: CustomFlowbiteTheme = {
  navbar: {
    root: {
      base: "bg-white px-2 py-2.5 sm:px-4",
      rounded: {
        on: "rounded",
        off: "",
      },
      bordered: {
        on: "",
        off: "",
      },
      inner: {
        base: "mx-auto flex flex-wrap items-center justify-between",
        fluid: {
          on: "",
          off: "container",
        },
      },
    },
    brand: {
      base: "flex items-center",
    },
    collapse: {
      base: "w-full  md:w-auto",
      list: "mt-4 flex flex-col md:mt-0 md:flex-row md:space-x-8 md:text-sm md:font-medium",
      hidden: {
        on: "hidden",
        off: "",
      },
    },
    link: {
      base: "block py-2 pr-4 pl-3 md:p-0",
      active: {
        on: "bg-cyan-700 text-white dark:text-white md:bg-transparent md:text-cyan-700",
        off: "text-gray-700 hover:bg-gray-50 md:border-0 md:hover:bg-transparent md:hover:text-cyan-700 md:dark:hover:bg-transparent md:dark:hover:text-white",
      },
      disabled: {
        on: "text-gray-400 hover:cursor-not-allowed dark:text-gray-600",
        off: "",
      },
    },
    toggle: {
      base: "inline-flex items-center rounded-lg p-2 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 md:hidden",
      icon: "h-6 w-6 shrink-0",
    },
  },
};

interface ChildProps {
  onNavItemCkick: (data: string) => void;
}

const Navbar: React.FC<ChildProps> = ({ onNavItemCkick }) => {
  const setScrollToSection = (data: string) => {
    onNavItemCkick(data);
  };

  return (
    <Flowbite>
      <NavbarWrapper
        id="navBar"
        className={`bg-main-background px-4 fixed w-full top-0 left-0 z-20 ${style.nav_container}`}
      >
        <NavbarWrapper.Brand href="/">
          <Logo height={90} width={90} />
          <span
            className={`md:text-3xl text-xl font-bold ${style.headline_text}`}
          >
            Flow Cranio
          </span>
        </NavbarWrapper.Brand>
        <div
          className={`flex md:order-2 flex-0 text-main-violet z-10 ${style.menu}`}
        >
          <Dropdown
            className="text-main-violet bg-second-background border-none"
            arrowIcon={false}
            inline
            label={<Menu className="text-main-violet " />}
          >
            {/*           <Dropdown.Header>
            <span className="block text-sm">Bonnie Green</span>
            <span className="block truncate text-sm font-medium">
              name@flowbite.com
            </span>
          </Dropdown.Header> */}
            <Dropdown.Item
              onClick={() => {
                setScrollToSection("section-1");
              }}
            >
              Über mich
            </Dropdown.Item>
            <Dropdown.Item
              onClick={() => {
                setScrollToSection("section-2");
              }}
            >
              Was ist Cranio Sacrale Körperbalance ?
            </Dropdown.Item>
            <Dropdown.Item
              onClick={() => {
                setScrollToSection("section-3");
              }}
            >
              Termine
            </Dropdown.Item>
          </Dropdown>
        </div>
      </NavbarWrapper>
    </Flowbite>
  );
};
export default Navbar;
