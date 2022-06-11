import React from 'react';
import OrderList from '../../Components/OrderList/OrderList';
import LayOut from './../../Layout/index';
const index = () => {
    return (
        <div>
            <LayOut>
                <OrderList />
            </LayOut>

        </div>
    );
};

export default index;