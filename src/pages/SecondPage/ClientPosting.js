import React from 'react';

const ClientPosting = ({ cp }) => {
    console.log(cp);
    return (
        <div>
            <h2>{cp.budget}</h2>
        </div>
    );
};

export default ClientPosting;