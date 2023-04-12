import React from 'react';
import PrivateComponent from '../../components/PrivateComponent/PrivateComponent';


export const PrivatePage = ({user}) => {
    return (
        <div>
            <PrivateComponent user={user}/>
        </div>
    )
}


