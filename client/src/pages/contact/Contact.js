import React from 'react';
import { Container } from 'reactstrap';
import { TitleDescrip } from '../aboutTJ/StylesAbout';

export const Contact = () => {
    return (
        <Container
            id="/contact"
            style={{
                paddingTop: 0,
                flexDirection: 'column',
                margin: 'auto',
                alignItems: 'center',
                justifyContent: 'center',
                display: 'flex',
                height: '100vh',
                width: '100vw'
            }}
        >
            <TitleDescrip style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontSize: '2em' }}>Get In Touch</TitleDescrip>
            <TitleDescrip style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', textAlign: 'center' }}>I can answer any questions you may have </TitleDescrip>
       
            <TitleDescrip style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', paddingTop: '2em' }}>
                <a href="mailto:tj@tjprohammer.us" style={{color: 'teal'}}>Email TJ Prohammer</a>
            </TitleDescrip>
        </Container>
    );
};

export default Contact;
