import React from 'react';

const PrimaryButton = ({children}) => {
    return (
        <button class="btn bg-gradient-to-r from-secondary to-primary border-0 text-white">
            {children}
          </button>
    );
};

export default PrimaryButton;