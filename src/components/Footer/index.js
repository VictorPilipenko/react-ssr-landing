import React from "react";
import { animateScroll as scroll } from "react-scroll";
import {
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaTwitter,
  FaLinkedin,
} from "react-icons/fa";
import {
  FooterContainer,
  FooterLink,
  FooterLinkItems,
  FooterLinkTitle,
  FooterLinksContainer,
  FooterLinksWrapper,
  FooterWrap,
  SocialIconLink,
  SocialIcons,
  SocialLogo,
  SocialMedia,
  SocialMediaWrap,
  WebsiteRights,
} from "./FooterElements,";
import { routes } from "../../constants/routes";

function Footer() {
  const toggleHome = () => {
    scroll.scrollToTop();
  };
  return (
    <FooterContainer>
      <FooterWrap>
        <FooterLinksContainer>
          <FooterLinksWrapper>
            <FooterLinkItems>
              <FooterLinkTitle>About us</FooterLinkTitle>
              <FooterLink to={routes.signIn}>How it works</FooterLink>
              <FooterLink to={routes.signIn}>Testimonials</FooterLink>
              <FooterLink to={routes.signIn}>Careers</FooterLink>
              <FooterLink to={routes.signIn}>Investors</FooterLink>
              <FooterLink to={routes.signIn}>Terms of Serivce</FooterLink>
            </FooterLinkItems>
            <FooterLinkItems>
              <FooterLinkTitle>Videos</FooterLinkTitle>
              <FooterLink to={routes.signIn}>Submit Videos</FooterLink>
              <FooterLink to={routes.signIn}>Ambassadors</FooterLink>
              <FooterLink to={routes.signIn}>Agency</FooterLink>
              <FooterLink to={routes.signIn}>Influencer</FooterLink>
            </FooterLinkItems>
          </FooterLinksWrapper>
          <FooterLinksWrapper>
            <FooterLinkItems>
              <FooterLinkTitle>Our Team</FooterLinkTitle>
              <FooterLink to={routes.signIn}>Developer</FooterLink>
              <FooterLink to={routes.signIn}>Tester</FooterLink>
              <FooterLink to={routes.signIn}>Marketer</FooterLink>
              <FooterLink to={routes.signIn}>Business Analyst</FooterLink>
            </FooterLinkItems>
            <FooterLinkItems>
              <FooterLinkTitle>Contact Us</FooterLinkTitle>
              <FooterLink to={routes.signIn}>Contact</FooterLink>
              <FooterLink to={routes.signIn}>Support</FooterLink>
              <FooterLink to={routes.signIn}>Bug Bounty</FooterLink>
              <FooterLink to={routes.signIn}>Destinations</FooterLink>
              <FooterLink to={routes.signIn}>Sponsorships</FooterLink>
            </FooterLinkItems>
          </FooterLinksWrapper>
        </FooterLinksContainer>
        <SocialMedia>
          <SocialMediaWrap>
            <SocialLogo onClick={toggleHome} to={routes.home}>
              Logo
            </SocialLogo>
            <WebsiteRights>
              Logo © {new Date().getFullYear()} All rights reserved.
            </WebsiteRights>
            <SocialIcons>
              <SocialIconLink href={routes.home} ariaLabel="Facebook">
                <FaFacebook />
              </SocialIconLink>
              <SocialIconLink href={routes.home} ariaLabel="Youtube">
                <FaYoutube />
              </SocialIconLink>
              <SocialIconLink href={routes.home} ariaLabel="Instagram">
                <FaInstagram />
              </SocialIconLink>
              <SocialIconLink href={routes.home} ariaLabel="Twitter">
                <FaTwitter />
              </SocialIconLink>
              <SocialIconLink href={routes.home} ariaLabel="LinkedIn">
                <FaLinkedin />
              </SocialIconLink>
            </SocialIcons>
          </SocialMediaWrap>
        </SocialMedia>
      </FooterWrap>
    </FooterContainer>
  );
}

export default Footer;
