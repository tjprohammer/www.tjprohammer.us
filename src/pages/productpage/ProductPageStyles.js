import { Button } from 'reactstrap';
import styled from 'styled-components';
import { DeviceSize } from '../../components/responsive';

export const ProductWrapper = styled.div`
    margin: 10em auto;
    max-width: 90%;
    height: auto;
    align-items: center;
    justify-content: center;
    display: block;
    flex-direction: column;
`;

export const ProductImage = styled.img`
    padding: 1em;
    max-height: 100nh;
    max-width: 100%;
    align-items: center;
    overflow: hidden;
    margin: auto;
    display: flex;

    @media screen and (min-width: 1048px) {

        max-width: 65%;
    }
`;

export const ProductTitle = styled.h2`
    width: 100%;
    margin-bottom: 0;
    color: #888;
    width: 100%;
    align-items: center;
`;

export const ProductDescrp = styled.p`
    font-size: 1.2em;
    color: #ffe3a0;
`;

export const Container = styled.div``;

export const Textcontainer = styled.div`
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    padding: 30px 0;
`;

export const TextWrapper = styled.div`
    max-width: fit-content;
    display: inline-block;
    margin: 25px;
    padding-top: 30px;
`;

export const StyledButton2 = styled(Button)`
size: small;
background-color: #8888;
letter-spacing: .3em;
font-weight: 500;
color: white;
border-radius: .6em;
    :hover {
        border-radius: 2em;
    }
`;