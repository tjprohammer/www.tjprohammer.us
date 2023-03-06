import { motion } from 'framer-motion';
import React, { useState, useRef } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import Cart from '../../pages/cart/Cart';
import { useSelector } from 'react-redux';

const NavMenuContainer = styled.div`
    width: 100%;
    height: auto;
    padding-bottom: 3em;
    display: flex;
    flex-direction: column;
    z-index: 99;
    
`;

const NavList = styled.ul`
    padding: 0 0.8em;
    width: 100%;
    display: flex;
    flex-direction: column;
`;

const NavLink = styled(motion.li)`
    font-weight: 600;
    height: .001em;
    display: flex;
    align-items: center;
    cursor: pointer;
    a {
        text-decoration: none;
        color: #444;
        font-size: 15px;
        transition: all 200ms ease-in-out;
    }
    &:hover {
        a {
            background-color: #444;
            padding: 0.5em;
            border-radius: 3em;
            color: white;
        }
    }
`;
const NavLinkLi = styled(motion.li)`
    font-weight: 575;
    margin-left: 20px;
    height: 17px;
    display: flex;
    align-items: center;
    cursor: pointer;
    a {
        text-decoration: none;
        color: #444;
        font-size: 13px;
        transition: all 200ms ease-in-out;
    }
    &:hover {
        a {
            background-color: #444;
            padding: .7em;
            border-radius: 2em;
            color: white;
            text-shadow: 2px 2px 10px #000000;
            box-shadow: 2px 2px 4px #000000;
        }
    }
`;
const menuVariants = {
    open: {
        transform: 'translateX(3%)'
    },
    closed: {
        transform: 'translateX(103%)'
    }
};

const variants = {
    show: {
        transform: 'translateX(0em)',
        opacity: 1
    },
    hide: {
        transform: 'translateX(5em)',
        opacity: 0
    }
};
const menuTransition = {
    type: 'spring',
    duration: 1,
    stiffness: 33,
    delay: 0.1
};

export function NavMenu({ isOpen }) {

    const cart = useSelector((state) => state.cart)
    
    return (
        <NavMenuContainer>
            <NavList>
                <NavLink
                    initial={false}
                    animate={isOpen ? 'show' : 'hide'}
                    variants={{
                        show: {
                            ...variants.show,
                            transition: { delay: 0.3, duration: 0.1 }
                        },
                        hide: {
                            ...variants.hide,
                            transition: { delay: 0.05, duration: 0.05 }
                        }
                    }}
                ></NavLink>

                <NavLink
                    style={{ padding: '30px' }}
                    initial={false}
                    animate={isOpen ? 'show' : 'hide'}
                    variants={{
                        show: {
                            ...variants.show,
                            transition: { delay: 0.4, duration: 0.2 }
                        },
                        hide: {
                            ...variants.hide,
                            transition: { delay: 0.15, duration: 0.05 }
                        }
                    }}
                >
                    <Link to="/">Home</Link>
                </NavLink>
                <NavLink
                    style={{ padding: '30px' }}
                    initial={false}
                    animate={isOpen ? 'show' : 'hide'}
                    variants={{
                        show: {
                            ...variants.show,
                            transition: { delay: 0.5, duration: 0.2 }
                        },
                        hide: {
                            ...variants.hide,
                            transition: { delay: 0.15, duration: 0.05 }
                        }
                    }}
                >
                    <Link to="/about">About</Link>
                </NavLink>
                

                <NavLink
                    style={{ padding: '30px' }}
                    initial={false}
                    animate={isOpen ? 'show' : 'hide'}
                    variants={{
                        show: {
                            ...variants.show,
                            transition: { delay: 0.6, duration: 0.2 }
                        },
                        hide: {
                            ...variants.hide,
                            transition: { delay: 0.2, duration: 0.05 }
                        }
                    }}
                >
                    <Link to="/gallery">Gallery</Link>
                </NavLink>
                {/**COASTAL */}
                <NavLinkLi
                    style={{ padding: '20px' }}
                    initial={false}
                    animate={isOpen ? 'show' : 'hide'}
                    variants={{
                        show: {
                            ...variants.show,
                            transition: { delay: 0.7, duration: 0.2 }
                        },
                        hide: {
                            ...variants.hide,
                            transition: { delay: 0.2, duration: 0.05 }
                        }
                    }}
                >
                    <Link to="/products/coastalshoreline">Coastal Shoreline</Link>
                </NavLinkLi>
                 {/**DRY DESERTS */}
                 <NavLinkLi
                    style={{ padding: '20px' }}
                    initial={false}
                    animate={isOpen ? 'show' : 'hide'}
                    variants={{
                        show: {
                            ...variants.show,
                            transition: { delay: 0.8, duration: 0.2 }
                        },
                        hide: {
                            ...variants.hide,
                            transition: { delay: 0.2, duration: 0.05 }
                        }
                    }}
                >
                    <Link to="/products/drydeserts">Dry Deserts</Link>
                </NavLinkLi>
                 {/**LUSH RAINFORESTS */}
                 <NavLinkLi
                    style={{ padding: '20px' }}
                    initial={false}
                    animate={isOpen ? 'show' : 'hide'}
                    variants={{
                        show: {
                            ...variants.show,
                            transition: { delay: 0.9, duration: 0.2 }
                        },
                        hide: {
                            ...variants.hide,
                            transition: { delay: 0.2, duration: 0.05 }
                        }
                    }}
                >
                    <Link to="/products/lushrainforests">Lush RainForests</Link>
                </NavLinkLi>
                {/**OUTDOOR PORTRAITS */}
                <NavLinkLi
                    style={{ padding: '20px' }}
                    initial={false}
                    animate={isOpen ? 'show' : 'hide'}
                    variants={{
                        show: {
                            ...variants.show,
                            transition: { delay: 1.0, duration: 0.2 }
                        },
                        hide: {
                            ...variants.hide,
                            transition: { delay: 0.2, duration: 0.05 }
                        }
                    }}
                >
                    <Link to="/outdoorportraits">Outdoor Portraits</Link>
                </NavLinkLi>
               
               {/**STARGAZING */}
               <NavLinkLi
                    style={{ padding: '20px' }}
                    initial={false}
                    animate={isOpen ? 'show' : 'hide'}
                    variants={{
                        show: {
                            ...variants.show,
                            transition: { delay: 1.1, duration: 0.2 }
                        },
                        hide: {
                            ...variants.hide,
                            transition: { delay: 0.2, duration: 0.05 }
                        }
                    }}
                >
                    <Link to="/products/stargazing">Stargazing</Link>
                </NavLinkLi>
                {/**THE HIGH ALPINE */}
                <NavLinkLi
                    style={{ padding: '20px' }}
                    initial={false}
                    animate={isOpen ? 'show' : 'hide'}
                    variants={{
                        show: {
                            ...variants.show,
                            transition: { delay: 1.2, duration: 0.2 }
                        },
                        hide: {
                            ...variants.hide,
                            transition: { delay: 0.2, duration: 0.05 }
                        }
                    }}
                >
                    <Link to="/products/thehighalpine">The High Alpine</Link>
                </NavLinkLi>
                
                
                {/**CONTACT */}
                <NavLink
                    style={{ padding: '30px' }}
                    initial={false}
                    animate={isOpen ? 'show' : 'hide'}
                    variants={{
                        show: {
                            ...variants.show,
                            transition: { delay: 1.3, duration: 0.2 }
                        },
                        hide: {
                            ...variants.hide,
                            transition: { delay: 0.25, duration: 0.05 }
                        }
                    }}
                >
                    <Link to="/contact">Contact</Link>
                </NavLink>
                <NavLink
                    style={{ padding: '30px' }}
                    initial={false}
                    animate={isOpen ? 'show' : 'hide'}
                    variants={{
                        show: {
                            ...variants.show,
                            transition: { delay: 1.4, duration: 0.2 }
                        },
                        hide: {
                            ...variants.hide,
                            transition: { delay: 0.25, duration: 0.05 }
                        }
                    }}
                >
                    <Link to="/cart">
                        Cart
                        <AiOutlineShoppingCart />
                        <h6>{cart?.length}</h6>
                    </Link>
                </NavLink>
            </NavList>
        </NavMenuContainer>
    );
}
