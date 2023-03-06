
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router';
import { BsArrowUpCircleFill } from 'react-icons/bs';


const ScrollToTop = (props) => {
    const location = useLocation();
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location]);

    return <>{props.children}</>;
};

export default ScrollToTop;


export const ScrollToTopButton = () => {
    const [scrollToTop, setScrollToTop] = useState(false);

    const handleScrollToTop = () => {
        if (!scrollToTop && window.pageYOffset > 400) {
            setScrollToTop(true);
        } else if (scrollToTop && window.pageYOffset <= 400) {
            setScrollToTop(false);
        }
    };

    const scrollTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    window.addEventListener('scroll', handleScrollToTop);

    return (
        <BsArrowUpCircleFill
            style={{
                position: 'fixed',
                bottom: '60',
                width: '100%',
                alignItems: 'center',
                height: '50px',
                justifyContent: 'center',
                zIndex: '1000',
                cursor: 'pointer',
                animation: 'fadeIn 0.3s',
                transition: 'opacity 0.4s',
                opacity: '0.5',
                display: scrollToTop ? 'flex' : 'none'
            }}
            onClick={scrollTop}
   
        ></BsArrowUpCircleFill>
    );
};

