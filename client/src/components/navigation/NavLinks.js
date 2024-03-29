import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { useSelector } from 'react-redux';

const NavLinksContainer = styled.div`
    height: 100%;
    display: flex;
    align-items: center;
`;

const LinksWrapper = styled.ul`
    margin: 0;
    padding: 0;
    display: flex;
    height: 100%;
    list-style: none;
`;

const LinkItem = styled.div`
    height: 100%;
    padding: 0 1.3em;
    color: #888;
    font-weight: 500;
    font-size: 14px;
    align-items: center;
    justify-content: center;
    display: flex;
    transition: all 220ms ease-in-out;
`;

const Links = styled.div`
    padding: 0 1.3em;
    color: #888;
    font-size: inherit;
    font-size: 14px;
    text-decoration: none;
    letter-spacing: 0.1rem;
    &:hover {
        border-bottom: 2px solid teal;
        color: white;
    }
`;

const DropDownLinks = styled.div`
    color: #888;
    font-size: inherit;
    font-size: 14px;
    letter-spacing: 0.1rem;
    &:hover {
        border-bottom: 2px solid teal;
        color: white;
    }
`;

const StyledLi = styled.li`
    float: center;
`;

const DropDownContent = styled.div`
    display: none;
    position: absolute;
    background-color: #111;
    min-width: 200px;
`;

const DropDownLi = styled(StyledLi)`
    position: relative;
    display: inline-block;

    &:hover ${DropDownContent} {
        display: block;
        padding: 0.6em 0em;
        z-index: 99;
    }
`;

export function NavLinks() {
    const cart = useSelector((state) => state.cart);
    return (
        <NavLinksContainer>
            <LinksWrapper>
                <LinkItem>
                    <Link to="/">
                        <Links>Home</Links>
                    </Link>
                </LinkItem>
                <LinkItem>
                    <DropDownLi>
                        <Link to="/about">
                            <Links>About</Links>
                        </Link>
                    </DropDownLi>
                </LinkItem>
                <LinkItem>
                    <DropDownLi>
                        <Links>Gallery</Links>

                        <DropDownContent>
                            <div
                                style={{
                                    paddingTop: '7.5px',
                                    paddingBottom: '7.5px',
                                    marginLeft: '20px'
                                }}
                            >
                                <Link to="/products/coastalshoreline">
                                    <DropDownLinks>Coastal Shoreline</DropDownLinks>
                                </Link>
                                <br />
                                <Link to="/products/drydeserts">
                                    <DropDownLinks>Dry Deserts</DropDownLinks>
                                </Link>

                                <br />
                                <Link to="/products/lushrainforests">
                                    <DropDownLinks>Lush Rainforests</DropDownLinks>
                                </Link>
                                <br />
                                <Link to="/outdoorportraits">
                                    <DropDownLinks>Outdoor Portraits</DropDownLinks>
                                </Link>
                                <br />

                                <Link to="/products/stargazing">
                                    <DropDownLinks>Stargazing</DropDownLinks>
                                </Link>
                                <br />
                                <Link to="/products/thehighalpine">
                                    <DropDownLinks>The High Alpine</DropDownLinks>
                                </Link>
                            </div>
                        </DropDownContent>
                    </DropDownLi>
                </LinkItem>
                <LinkItem>
                    <Link to="/contact">
                        <Links href="#contact">Contact</Links>
                    </Link>
                </LinkItem>
                <LinkItem>
                    <Link to="/cart">
                        <Links href="#cart">
                            <AiOutlineShoppingCart />
                            <h6>{cart?.length}</h6>
                        </Links>
                    </Link>
                </LinkItem>
            </LinksWrapper>
        </NavLinksContainer>
    );
}
