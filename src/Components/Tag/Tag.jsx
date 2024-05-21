import React from 'react';

const Tag = ({tag}) => {
    return (
        <div>
            <p className='px-2 py-2 rounded-3xl text-[#23BE0A] bg-[#23BE0A0D] text-base font-medium text-center' >{tag}</p>
        </div>
    );
};

export default Tag;