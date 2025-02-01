
import React from "react";
import styled from "styled-components";


const Header = () => {
  return (
    <HeaderWrapper>
      <img  className="logo" src="https://londonrag.com/cdn/shop/files/LondonRagLogo_W_O_Tagline_03-12-2022.svg?v=1733216280&width=180" alt="" />
      <nav>
        <a href="#">Luxe</a>
        <a href="#">Shoes</a>
        <a href="#">Clothing</a>
        <a href="#">Mens</a>
        <a href="#">Sale</a>
      </nav>
      
      <img style={{width: "100%"}} src="https://cdn.shopify.com/s/files/1/0512/8398/4564/files/Shoes_CatPageBanner_a5e9adce-9e79-4c3d-9c5b-fae146e92f2c.jpg?v=1708688219" alt="" />
    </HeaderWrapper>
  );
};

export default Header;



const HeaderWrapper = styled.div`
  background: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px 20px;
  border-bottom: 1px solid #ddd;

 .logo{
  width: 200px;
  height:100px;
 }

  nav {
    width: 700px;
    display: flex;
    justify-content: space-around;
    gap: 15px;
    

    a {
      text-decoration: none;
      color: #555;
      font-size: 22px;
      &:hover {
        color: #000;
      }
    }
  }
`;