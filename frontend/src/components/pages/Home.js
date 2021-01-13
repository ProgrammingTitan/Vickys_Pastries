import React from 'react';
import ProjectCards from '../layout/ProjectCards';
import SocialBar from '../layout/SocialBar';
import AppWidget from '../layout/AboutWidget';
import CategoryWidget from '../layout/CategoryWidget';
import Divider from '../layout/Divider';
import EmailList from '../auth/EmailList';
import OrderSubmit from '../layout/OrderSubmit';
import Carousel from '../layout/Carousel';

// import React, {useEffect, useContext} from 'react'
// import {useHistory} from "react-router-dom";
// import UserContext from '../../context/UserContext';

export default function Home() {
    // const {userData} = useContext(UserContext);
    // const history = useHistory();
    // useEffect(() => {
    //     if(!userData.user){
    //         history.push('/login');
    //     }
    // })

    return (
        <div>
            {/* < ProjectUpload /> */}
            {/* < ProjectCards /> */}
            <Carousel />
            <AppWidget />
            <CategoryWidget />
            <Divider />
            <SocialBar />
        </div>
    )
}
