import { useEffect, useState } from 'react';

const useWindowResize = () => {
    const [width, setWidth] = useState(window.innerWidth);

    const handleResize = () => setWidth(window.innerWidth);

    useEffect(() => {
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, [handleResize]);

    return width;
};

export default useWindowResize;
