import { useEffect, useState } from 'react';

export default () => {
    const [scrollState, setHasScrolled] = useState(false);

    const handleScroll = () => {
        const scrollTop = window.scrollY;
        if (scrollTop > 0) return setHasScrolled(true);
        return setHasScrolled(false);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [handleScroll]);

    return scrollState;
};
