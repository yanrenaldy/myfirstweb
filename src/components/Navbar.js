import React, { useEffect, useState } from "react";
import { Menu } from "antd";
import { Link, Outlet, useLocation } from "react-router-dom";
import "../styling/styles.css";

const { SubMenu } = Menu;

function Navbar() {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentPosition = window.pageYOffset;
      setScrollPosition(currentPosition);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const backgroundColor = scrollPosition > 100 ? "#000" : "transparent";
  const location = useLocation();
  return (
    <React.Fragment>
      <Menu
        theme="dark"
        mode="horizontal"
        style={{
          display: "flex",
          justifyContent: "flex-end",
          backgroundColor,
          position: "fixed",
          zIndex: 1,
          width: "100%",
        }}
        selectedKeys={[location.pathname]}
        className="navibar"
      >
        <div
          className="companyTitle"
        >
          Nama Perusahaan
        </div>
        <Menu.Item key="/">
          <Link to={"/"}>Home</Link>
        </Menu.Item>
        <Menu.Item key="/berita">
          <Link to={"berita"}>News</Link>
        </Menu.Item>
        <SubMenu key="sub1" title="Profile">
          <Menu.Item key="/facility">
            <Link to={"facility"}>Facility</Link>
          </Menu.Item>
          <Menu.Item key="3">Product 2</Menu.Item>
          <Menu.Item key="4">Product 3</Menu.Item>
        </SubMenu>
        <SubMenu key="sub2" title="About">
          <Menu.Item key="/tentang">
            <Link to={"tentang"}>History</Link>
          </Menu.Item>
          <Menu.Item key="6">Product 2</Menu.Item>
        </SubMenu>

        <Menu.Item key="pendaftaran">Join US</Menu.Item>
      </Menu>
      <Outlet />
    </React.Fragment>
  );
}

export default Navbar;
