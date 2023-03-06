import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import LogoImage from '../../images/logo.png';

const LogoWrapper = styled.div`
    display: flex;
    align-items: center;
`;

const LogoImg = styled.div`
    padding: 12px;
    width: 120px;
    height: 90px;
    cursor: pointer;
    img {
        width: 100%;
        height: 100%;
    }
`;

const LogoText = styled.h2`
    font-size: 16px;
    margin: 0;
    margin-left: 4px;
    color: #888;
    font-weight: 600;
`;

export function Logo(props) {
    return (
        <LogoWrapper>
            <Link to="/">
                <LogoImg>
                    <img src={LogoImage} alt="TJ Prohammer logo" />
                </LogoImg>
            </Link>
            <LogoText>TJ Prohammer Photography</LogoText>
        </LogoWrapper>
    );
}
