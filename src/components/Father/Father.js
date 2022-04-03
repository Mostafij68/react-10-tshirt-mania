import React from 'react';
import Brother from '../Brother/Brother';
import MySelf from '../MySelf/MySelf';
import Sister from '../Sister/Sister';

const Father = () => {
    return (
        <div>
            <h4>Father</h4>
            <MySelf></MySelf>
            <Sister></Sister>
            <Brother></Brother>
        </div>
    );
};

export default Father;