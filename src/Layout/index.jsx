import React from 'react';
import SideBar from '../Pages/SideBar/SideBar';
import Header from './Header';

const LayOut = ({children}) => {
    return (
        <div>
            <Header/>
            <div className="d-flex">
                <div >
                <SideBar/>
                </div>
                
                <div className='p-3'>
                {children}
                </div>
                
                
                
            </div>
            
            
            
        </div>
    );
};

export default LayOut;