import React from 'react'
import { animateScroll as scroll } from 'react-scroll';

 import {FooterContainer,
    FooterWrap,
    FooterLinksContainer,
    FooterLinksWrapper,
    FooterLinkItems,
    FooterLinkTitle,
    FooterLink,
    SocialMedia,
    SocialMediaWrap,
    SocialLogo,
    WebsiteRights,
    SocialIcons,
    SocialIconLink
} from './FooterElements';


import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter, FaYoutube } from 'react-icons/fa';

const Footer = () => {
    const toggleHome = () => {
        scroll.scrollToTop();
      };
  
  return (
    <FooterContainer>
        <FooterWrap>
            <FooterLinksContainer>
                <FooterLinksWrapper>
                    <FooterLinkItems>
                        <FooterLinkTitle>About Us</FooterLinkTitle>
                        <FooterLink to='/signin'>How it works</FooterLink>
                        <FooterLink to='/signin'>Testimonials</FooterLink>
                        <FooterLink to='/signin'>Careers</FooterLink>
                        <FooterLink to='/signin'>Terms of Service</FooterLink>
                        <FooterLink to='/signin'>Privacy Policy</FooterLink>
                    </FooterLinkItems>
                    <FooterLinkItems>
                        <FooterLinkTitle>About Us</FooterLinkTitle>
                        <FooterLink to='/signin'>How it works</FooterLink>
                        <FooterLink to='/signin'>Testimonials</FooterLink>
                        <FooterLink to='/signin'>Careers</FooterLink>
                        <FooterLink to='/signin'>Terms of Service</FooterLink>
                        <FooterLink to='/signin'>Privacy Policy</FooterLink>
                    </FooterLinkItems>
                </FooterLinksWrapper>
                <FooterLinksWrapper>
                    <FooterLinkItems>
                        <FooterLinkTitle>About Us</FooterLinkTitle>
                        <FooterLink to='/signin'>How it works</FooterLink>
                        <FooterLink to='/signin'>Testimonials</FooterLink>
                        <FooterLink to='/signin'>Careers</FooterLink>
                        <FooterLink to='/signin'>Terms of Service</FooterLink>
                        <FooterLink to='/signin'>Privacy Policy</FooterLink>
                    </FooterLinkItems>
                    <FooterLinkItems>
                        <FooterLinkTitle>About Us</FooterLinkTitle>
                        <FooterLink to='/signin'>How it works</FooterLink>
                        <FooterLink to='/signin'>Testimonials</FooterLink>
                        <FooterLink to='/signin'>Careers</FooterLink>
                        <FooterLink to='/signin'>Terms of Service</FooterLink>
                        <FooterLink to='/signin'>Privacy Policy</FooterLink>
                    </FooterLinkItems>
                </FooterLinksWrapper>
            </FooterLinksContainer>
            <SocialMedia>
                <SocialMediaWrap>
                    <SocialLogo to='/' onClick={toggleHome} >
                        Gdev
                    </SocialLogo>
                    <WebsiteRights>Gdev® {new Date().getFullYear()} Todos los
                                 derechos reservados</WebsiteRights>
                    <SocialIcons>
                        <SocialIconLink href='/' target="_blank" aria-label="Facebook" ><FaFacebook/></SocialIconLink>
                        <SocialIconLink href='/' target="_blank" aria-label="Instagram" ><FaInstagram/></SocialIconLink>
                        <SocialIconLink href='/' target="_blank" aria-label="Youtube" ><FaYoutube/></SocialIconLink>
                        <SocialIconLink href='/' target="_blank" aria-label="Twitter" ><FaTwitter/></SocialIconLink>
                        <SocialIconLink href='/' target="_blank" aria-label="Linkedin" ><FaLinkedin/></SocialIconLink>
                    </SocialIcons>
                </SocialMediaWrap>
            </SocialMedia>
        </FooterWrap>
    </FooterContainer>
  )
}

export default Footer