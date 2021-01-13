import React, { useState, useContext, Component } from 'react'
import {useHistory} from 'react-router-dom';
import Axios from 'axios';
import UserContext from '../../context/UserContext';
import ErrorNotice from '../../misc/ErrorNotice';

const PORT = process.env.PORT || 'http://localhost:5000' ;

export default function OrderSubmit(props) {

    const [name, setName] = useState();
    const [phoneNumber, setPhoneNumber] = useState();
    const [email, setEmail] = useState();
    const [ocassion, setOcassion] = useState();
    const [type,setType] = useState();
    const [description,setDescription] = useState();
    const [date,setDate] = useState();
    const [error, setError] = useState();
    const [imageURL, setImageURL] = useState();

    const {setUserData} = useContext(UserContext);
    const history = useHistory();

    // setName(req.body.name);
    // setPhoneNumber(req.body.phoneNumber);
    // setEmail(req.body.email);
    // setOcassion(props.ocassion);
    // setType(props.type);
    // setDescription(props.description);
    // setDate(req.body.date);

    const submit = async (e) => {
        e.preventDefault();
        if(!type) {setType(e.target.type.value)};
        if(!description) {setDescription(e.target.description.value)};
        if(!ocassion){setOcassion(e.target.ocassion.value)};
        
        try{
        const newOrder = {
            name,
            phoneNumber,
            email,
            description: description || e.target.description.value,
            ocassion: ocassion || e.target.ocassion.value,
            type: type || e.target.type.value,
            date,
        };

        await Axios.post(
            `${PORT}/orders`, newOrder
    
        );

    
        setError("Thank you for your submission! We will contact you soon for further details!");
        // window.location.reload(false);
        const templateId = process.env.REACT_APP_TEMPLATE_ID;
        const serviceID = process.env.REACT_APP_SERVICE_ID;
        sendFeedback(serviceID, templateId, { from_name: name, message: e.target.description.value , date:date, reply_to: email, phone_number: phoneNumber, type: e.target.type.value, ocassion: e.target.ocassion.value })
    
       
    }catch (err) {
        console.log(err);
        err.response.data.msg && setError(err.response.data.msg);
    }

    };

    
    const sendFeedback = (serviceID, templateId, variables) => {
        window.emailjs.send(
            serviceID, templateId,
            variables
        ).then(res => {
            console.log('Email successfully sent!')
        })
            .catch(err => console.error('There has been an error.  Here some thoughts on the error that occured:', err))
    }


    return (
        <div className="page">
            <h1 className="control-panel-heading">Submit an Order!</h1>
            {error && <ErrorNotice message={error} clearError={ () => setError(undefined)} /> }
            <form className="form" onSubmit={submit}  enctype="multipart/form-data">
                <label htmlFor="name">Name</label>
                <input id="name" type="text" onChange = {e => setName(e.target.value)}/>

                <label htmlFor="phoneNumber">Phone Number</label>
                <input id="phoneNumber" type="text"onChange = {e => setPhoneNumber(e.target.value)}/>

                <label htmlFor="email">Email</label>
                <input id="email" type="text" onChange = {e => setEmail(e.target.value)}/>
                
                <label htmlFor="description">Description</label>
                <input id="description" type="text"  value={props.description} onChange = {e => setDescription(e.target.value)}/>

                <label htmlFor="ocassion">Ocassion</label>
                <input id="ocassion" type="text"  value={props.ocassion} onChange = {e => setOcassion(e.target.value)}/>

                <label htmlFor="type">Type (Cake/Cupcake/Brownie etc)</label>
                <input id="type" type="text" value={props.type} onChange = {e => setType(e.target.value)}/>


                <label htmlFor="date">Date Needed: </label>
                <input id="date" type="text" onChange = {e => setDate(e.target.value)}/>
                {/* <label htmlFor="file">Upload Image</label>
                <input type="file" id="file"
                       name="image"  required
                       
                       onChange = {e => {const file = e.target.files[0]; 
                    setFile(file);} }
                       ></input>
                 */}
                <input type = "submit" className="order-submit" value="Submit" />
            </form>
        </div>
    );
}
