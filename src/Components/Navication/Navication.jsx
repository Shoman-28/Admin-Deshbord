import React from 'react';

import img from '../../Resource/Image/8.png'
import "./navication.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGear, faBell } from '@fortawesome/free-solid-svg-icons';

const Navication = () => {


    return (

        <div className=' p-2'>
            <div className='d-flex justify-content-between'>
                <div><h3>Deshbord</h3></div>
                <div className=''>
                    <ul className='nav-item'>
                        <li><a href="/"> <FontAwesomeIcon icon={faBell} /></a></li>
                        <li><a href="/"> <FontAwesomeIcon icon={faGear} /></a></li>
                        <li><img src={img} alt="Image" srcset="" /></li>
                    </ul>

                </div>
            </div>
        </div>
    );
};

export default Navication;