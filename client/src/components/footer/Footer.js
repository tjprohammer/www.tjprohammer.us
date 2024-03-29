import React from 'react';
import styled from 'styled-components';
import { LeftSection, MiddleSection, RightSection } from '../navigation';
import { FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa';

const Footer = () => {
    return (
        <FooterContainer>
            <LeftSection>
                <NavFooterList>
                    TJ Prohammer || Nature Photographer <br></br>Copyright &copy; {new Date().getFullYear()}
                </NavFooterList>
            </LeftSection>
            <MiddleSection></MiddleSection>
            <RightSection style={{ justifyContent: 'center' }}>
                <FooterLinks>
                    <a className="social-icon-link instagram" href="" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                        <FaInstagram color={'#833AB4'} size={25} />
                    </a>
                </FooterLinks>
                <FooterLinks>
                    <a
                        className="social-icon-link linkden"
                        href=""
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Linkden"
                    >
                        <FaLinkedin color={'#0077b5'} size={25} />
                    </a>
                </FooterLinks>
                <FooterLinks>
                    <a className="social-icon-link github" href="" target="_blank" rel="noopener noreferrer" aria-label="Github">
                        <FaGithub color={'#6cc644'} size={25} />
                    </a>
                </FooterLinks>
            </RightSection>
        </FooterContainer>
    );
};

const FooterContainer = styled.div`
    width: 100%;
    height: 60px;
    box-shadow: 0 1px 3px rgba(15, 15, 15, 0.13);
    background-color: #111;
    display: flex;
    align-items: center;
    z-index: 100;
    bottom: 0;
    position: fixed;
    @media screen and (max-width: 600px) {
        height: 80px;
    }
`;

const NavFooterList = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    margin-top: 0.7em;
    align-items: right;
    padding-left: 2em;
    font-weight: 600;
    padding: 0.5em 1em 1em 1em;
`;

const FooterLinks = styled.div`
    right: 0;
    font-weight: 600;
    height: 42px;
    padding: 0.5em 1em 1em 1em;

    cursor: pointer;
`;
export default Footer;
