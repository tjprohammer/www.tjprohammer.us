import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { NavMenu } from './NavMenu';
import styled from 'styled-components';
import { MenuToggle } from './MenuToggle';
import { Logo } from '../logo';

const HamburgerMenuContainer = styled.div`
    display: flex;
`;

const MenuContainer = styled(motion.div)`
    min-width: 400px;
    width: 100%;
    max-width: 44%;
    height: 100%;
    background-color: #fff;
    box-shadow: -2px 0 2px rgba(15, 15, 15, 0.3);
    z-index: 90;
    position: fixed;
    top: 0;
    right: 0;
    transform: translateX(4em);
    user-select: none;
    padding: .5em 2.5em;
    overflow-y: scroll;
`;

const TopContainer = styled.div`
    display: flex;
    width: 100%;
    padding-top: 30px;
`;

const IconContainer = styled.div`
    font-size: 16px;
    color: #555;
    padding-right: 5px;
`;

const LoginButton = styled(motion.button)`
    border: 0;
    background: transparent;
    color: #555;
    font-size: 14px;
    font-weight: 900;
    transition: all 250ms ease-in-out;
    display: flex;
    cursor: pointer;
    padding: 5px 12px;
    &:hover {
        color: #666;
    }
    &:focus {
        outline: none;
    }
    &:not(:last-of-type) {
        border-right: 1px solid #b4b4b4;
    }
`;

const ContentContainer = styled.div`
    display: flex;
    flex-direction: column;
    
`;

const menuVariants = {
    open: {
        transform: 'translateX(3%)'
    },
    closed: {
        transform: 'translateX(103%)'
    }
};

const menuTransition = {
    type: 'spring',
    duration: 1,
    stiffness: 33,
    delay: 0.05
};

const commonVariants = {
    show: {
        transform: 'translateX(0em)',
        opacity: 1,
        transition: {
            delay: 0.3,
            duration: 0.01
        }
    },
    hide: {
        transform: 'translateX(5em)',
        opacity: 0
    }
};

const commonTransition = { type: 'spring', duration: 0.04 };

export function HamburgerMenu(props) {
    const [isOpen, setOpen] = useState(false);

    const toggleMenu = () => {
        setOpen(!isOpen);
    };

    return (
        <HamburgerMenuContainer>
            <MenuToggle toggle={toggleMenu} isOpen={isOpen} />
            <MenuContainer initial={false} animate={isOpen ? 'open' : 'closed'} variants={menuVariants} transition={menuTransition} onClick={() => setOpen((isOpen) => !isOpen)}>
                <IconContainer>
                    <Logo />
                </IconContainer>
                <ContentContainer>
                    <NavMenu isOpen={isOpen} />
                </ContentContainer>
            </MenuContainer>
        </HamburgerMenuContainer>
    );
}
