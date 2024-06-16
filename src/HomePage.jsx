// PdfGenerator.js
import React, { useRef } from 'react';
import { useReactToPrint } from 'react-to-print';
import Home from './Home';

const HomePage = () => {
    const componentRef = useRef();

    const handlePrint = useReactToPrint({
        content: () => componentRef.current,
    });

    return (
        <Home ref={componentRef} handlePrint={handlePrint} />
    );
};

export default HomePage;
