import React from "react";
import { NavLink } from "react-router-dom";
import { BiX } from "react-icons/bi";
import { CgMenuLeftAlt } from "react-icons/cg";
import { NavbarRegistry } from "assets/registry";
import { WalletMultiButton } from "WalletAdapter";
import HeaderWrapper from "./Header.style";

const Header = () => {
  const openNav = () => {
    document.getElementById("mySidenav").style.width = "250px";
  };

  const closeNav = () => {
    document.getElementById("mySidenav").style.width = "0";
  };

  return (
    <>
      <HeaderWrapper>
        <div id="mySidenav" className="sideNav mb-4">
          <div className="container-fluid">
            <div className="row d-flex align-items-center mt-2">
              <div className="col-8 d-flex justify-content-center">
                <img
                  src="/images/Logo.png"
                  alt="Loading..."
                  className="small_logo"
                />
              </div>
              <div className="col-4 d-flex justify-content-end">
                <p className="closeBtn" onClick={closeNav}>
                  <BiX className="close_icon" />
                </p>
              </div>
            </div>

            <div className="row">
              <div className="col-12 d-flex justify-content-start">
                <ul className="mt-5 ml-3 pl-1">
                  {NavbarRegistry.map((nav) => {
                    return (
                      <li key={nav.id}>
                        <NavLink to={nav.href} onClick={closeNav}>
                          {nav.name}
                        </NavLink>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>

            <div className="Wallet">
              <WalletMultiButton />
            </div>
          </div>
        </div>

        <div className="container navbar_component">
          <div className="row">
            <div className="col-12 m-0 p-0">
              <nav className="navbar navbar-light">
                <CgMenuLeftAlt
                  className="navbar-icon"
                  onClick={openNav}
                ></CgMenuLeftAlt>

                <NavLink to="/" className="navbar-brand mb-2 ml-3">
                  <img src="/images/Logo.png" alt="Loading..." />
                </NavLink>

                <ul className="navbar-nav left_ui_block ml-auto d-flex justify-content-center  align-items-center flex-row">
                  <div className="left_ui_block_hide d-flex align-items-center">
                    {NavbarRegistry.map((nav) => {
                      return (
                        <li className="nav-item" key={nav.id}>
                          <NavLink
                            exact="true"
                            to={nav.href}
                            className="nav-link"
                            activeclassname="active"
                          >
                            {nav.name}
                          </NavLink>
                        </li>
                      );
                    })}

                    <li className="nav-item">
                      <div className="Wallet_section">
                        <WalletMultiButton />
                      </div>
                    </li>
                  </div>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </HeaderWrapper>
    </>
  );
};

export default Header;
