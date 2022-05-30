import React from 'react';
import Navication from '../Components/Navication/Navication';

const Header = () => {
    return (
        <div className='sticky-top' style={{background:'red'}}>
            <Navication />
        </div>
    );
};

export default Header;