import React from 'react';
import { Title, TitleDescrip } from '../../pages/aboutTJ/StylesAbout';

//Word Wrapper
const Wrapper = (props) => {
    return <span style={{ whiteSpace: 'nowrap' }}>{props.children}</span>;
};

//Map API "type" values to JSX tag names
const tagMap = {
    paragraph: 'p',
    heading1: 'h1',
    heading2: 'h3'
};

const AnimatedText = (props) => {
    //object for controlling animation
    const item = {
        hidden: {
            y: '200%',
            color: '#0055FF',
            transition: { ease: [0.455, 0.03, 0.515, 0.955], duration: 0.65 }
        },
        visible: {
            y: '0%',
            color: '#f5f5f5',
            transition: { ease: [0.455, 0.03, 0.515, 0.955], duration: 0.25 }
        }
    };

    //split each word of props.text into an array
    const splitWords = props.text.split(' ');
    //create the storage array
    const words = [];
    //push each word into word array
    for (const [, item] of splitWords.entries()) {
        words.push(item.split(''));
    }

    //Add a space to end of each word
    words.map((word) => {
        return word.push('\u00A0');
    });

    //get the tag name from map
    const Tag = tagMap[props.type];

    return (
        <Tag>
            {words.map((word, index) => {
                return (
                    <Wrapper key={index}>
                        {words[index].flat().map((element, index) => {
                            return (
                                <Title style={{ overflow: 'hidden', display: 'inline-block' }} key={index}>
                                    <TitleDescrip style={{ display: 'flex' }} variants={item}>
                                        {element}
                                    </TitleDescrip>
                                </Title>
                            );
                        })}
                    </Wrapper>
                );
            })}
        </Tag>
    );
};

export default AnimatedText;
