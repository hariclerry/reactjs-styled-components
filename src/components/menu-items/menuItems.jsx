import React from "react";

import  Logo  from "../../assets/nature.jpg";
import {
  MenuItemContainer,
  BackgroundImageContainer,
  ContentContainer,
  ContentTitle,
  ContentSubtitle,
} from "./menuItems.styles";

const MenuItems = ({ size, history, linkUrl, match }) => (
  <MenuItemContainer
    size={size}
    onClick={() => history.push(`${match.url}${linkUrl}`)}
  >
    <BackgroundImageContainer className="background-image" imageUrl={Logo} />

    <ContentContainer className="content">
      <ContentTitle>Cool nature</ContentTitle>
      <ContentSubtitle>WATCH NOW</ContentSubtitle>
    </ContentContainer>
  </MenuItemContainer>
);

export default MenuItems;
