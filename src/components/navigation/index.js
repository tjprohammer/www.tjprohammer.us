import styled from 'styled-components';
import { Logo } from '../logo';
import { HamburgerMenu } from './Hamburger';
import { DeviceSize } from '../responsive/index';
import { useMediaQuery } from 'react-responsive';
import { NavLinks } from './NavLinks';

export const NavbarContainer = styled.div`
    width: 100%;
    height: 60px;
    box-shadow: 0 1px 3px rgba(15, 15, 15, 0.13);
    background-color: #111;
    display: flex;
    align-items: center;
    padding: 0 1.5em;
    z-index: 100;
    top: 0;
    position: fixed;
`;
export const LeftSection = styled.div`
    display: flex;
`;

export const MiddleSection = styled.div`
    display: flex;
    flex: 2;
    height: 100%;
    justify-content: center;
    color: white;
`;

export const RightSection = styled.div`
    display: flex;
`;

export function NavbarMenu(props) {
    const isMobile = useMediaQuery({ maxWidth: DeviceSize.mobile });
    return (
        <NavbarContainer>
            <LeftSection>
                <Logo />
            </LeftSection>
            <MiddleSection></MiddleSection>
            <RightSection>
                {isMobile && <HamburgerMenu />}
                {!isMobile && <NavLinks />}
            </RightSection>
        </NavbarContainer>
    );
}
