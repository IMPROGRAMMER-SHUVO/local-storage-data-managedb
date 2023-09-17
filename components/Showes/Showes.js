import React from 'react';
import { multiply } from '../../utilties/calculate';

const Showes = () => {
    const first=66;
    const second=55;
    const result= multiply(first,second)
    return (
        <div>
            <h4> hekkios{result}</h4>
        </div>
    );
};

export default Showes;