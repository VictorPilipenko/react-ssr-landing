import React from "react";
import { routes } from "../../constants/routes";
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarWrapper,
  SidebarMenu,
  SidebarLink,
  SideBtnWrap,
  SidebarRoute,
  SidebarItem,
} from "./SidebarElements";

function Sidebar({ toggle, isOpen }) {
  return (
    <SidebarContainer onClick={toggle} isOpen={isOpen}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarItem>
            <SidebarLink to="about" onClick={toggle}>
              About
            </SidebarLink>
          </SidebarItem>
          <SidebarItem>
            <SidebarLink to="discover" onClick={toggle}>
              Discover
            </SidebarLink>
          </SidebarItem>
          <SidebarItem>
            <SidebarLink to="services" onClick={toggle}>
              Services
            </SidebarLink>
          </SidebarItem>
          <SidebarItem>
            <SidebarLink to="signup" onClick={toggle}>
              Sign Up
            </SidebarLink>
          </SidebarItem>
        </SidebarMenu>
        <SideBtnWrap>
          <SidebarRoute to={routes.signIn}>Sign In</SidebarRoute>
        </SideBtnWrap>
      </SidebarWrapper>
    </SidebarContainer>
  );
}

export default Sidebar;
