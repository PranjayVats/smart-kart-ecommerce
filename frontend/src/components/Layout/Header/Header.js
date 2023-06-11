import React from "react";
import { ReactNavbar } from "overlay-navbar";
import logo from "../../../images/logo1.png"

function Header() {
  const options={
      logo ,
      logoWidth : "20vmax",
      navColor1 : 'white',
      burgerColor: "#aaaaaa",
      burgerColorHover:"rgb(67, 73, 221)",
      logoHoverSize:"1px",
      logoHoverColor:"rgb(67, 73, 221)",
      link1Text:"Home",
      link2Text:"Products",
      link3Text:"Contact",
      link4Text:"About",
      link1Url:"/",
      link2Url:"/products",
      link3Url:"/contact",
      link4Url:"/about",
      link1Size:"1.5vmax",
      link1Color:"rgba(35, 35, 35,0.8)",
      nav1justifyContent:"flex-end",
      nav2justifyContent:"flex-end",
      nav3justifyContent:"flex-start",
      nav4justifyContent:"flex-start",
      link1ColorHover:"rgb(67, 73, 221)",
      link1Margin:"1.2vmax",
      profileIconUrl:"/account",
      profileIconColor:"rgba(35, 35, 35,0.8)",
      searchIconColor:"rgba(35, 35, 35,0.8)",
      cartIconUrl:"/cart",
      cartIconColor:"rgba(35, 35, 35,0.8)",
      profileIconColorHover:"rgb(67, 73, 221)",
      searchIconColorHover:"rgb(67, 73, 221)",
      cartIconColorHover:"rgb(67, 73, 221)",
      cartIconMargin:"2vmax"
  }
  return (
    <ReactNavbar {...options}/>
  );
}

export default Header;
