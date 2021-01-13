import React, { useState, useContext } from 'react';
import Axios from 'axios';
import ErrorNotice from '../../misc/ErrorNotice';
const PORT = process.env.PORT || 'http://localhost:5000' ;

export default function SocialBar() {

    const [email, setEmail] = useState();
    const [error, setError] = useState();

    const submit = async (e) => {
        e.preventDefault();
        
        try{
        const newEmail = {
            email
        };

        await Axios.post(
            `${PORT}/emails`, newEmail
        
        );

    
        window.location.reload(false);
        
    
       
    }catch (err) {
        console.log(err);
        err.response.data.msg && setError(err.response.data.msg);
    }

    };


    return (
        <div className="social-bar">
            <div className="social-links">
                <a href = "https://www.instagram.com/vickys_pastries/">
                    <img className="social-icon" src= "https://th.bing.com/th/id/OIP.11QV8w0SqEjcoJbwU9AQlAHaHa?pid=Api&rs=1"/>
                </a>
                <a href = "https://www.facebook.com/vicky.j.carrillo">
                    <img className="social-icon" src= "https://byobcomedy.com/wp-content/uploads/2017/04/facebook-icon-pink-e1491390411678-300x300.jpg"/>
                </a>
            </div>
            <div className="social-email">
            {error && <ErrorNotice message={error} clearError={ () => setError(undefined)} /> }
            <form className="email-form" onSubmit={submit}  enctype="multipart/form-data">
                
                <input className="email-input" placeHolder="Email" type="text" onChange = {e => setEmail(e.target.value)}/>
                <input className="email-submit" type = "submit" value="Subscribe" />
                </form>
            </div>
        </div>
    )
}
