import React, { useState, useContext } from 'react'
import {useHistory} from 'react-router-dom';
import Axios from 'axios';
import UserContext from '../../context/UserContext';
import ErrorNotice from '../../misc/ErrorNotice';
import ControlPanel from '../pages/ControlPanel';
const PORT = process.env.PORT || 'http://localhost:5000' ;

export default function ProjectUpload() {

    const [title, setTitle] = useState();
    const [description, setDescription] = useState();
    const [ocassion, setOcassion] = useState();
    const [type,setType] = useState();
    const [error, setError] = useState();
    const [imageURL, setImageURL] = useState();

    const {setUserData} = useContext(UserContext);
    const history = useHistory();

    const submit = async (e) => {
        e.preventDefault();
        let token = localStorage.getItem("auth-token");
        
        try{
        const newProject = {
            title,
            description,
            ocassion,
            type,
            imageURL,
        };

        await Axios.post(
            `${PORT}/projects`, newProject, { 
            headers: {
                "x-auth-token" : token,
            },
    
        }
        );

    
        setError("Upload Successful!");
        window.location.reload(false);
        
    
       
    }catch (err) {
        console.log(err);
        err.response.data.msg && setError(err.response.data.msg);
    }

    };


    return (
        <div className="page">
            <ControlPanel />
            <h1 className="control-panel-heading">Upload New Project</h1>
            {error && <ErrorNotice message={error} clearError={ () => setError(undefined)} /> }
            <form className="form" onSubmit={submit}  enctype="multipart/form-data">
                <label htmlFor="title">Title</label>
                <input id="title" type="text" onChange = {e => setTitle(e.target.value)}/>
                
                <label htmlFor="description">Description</label>
                <input id="description" type="text" onChange = {e => setDescription(e.target.value)}/>

                <label htmlFor="ocassion">Ocassion</label>
                <input id="ocassion" type="text" onChange = {e => setOcassion(e.target.value)}/>

                <label htmlFor="type">Type</label>
                <input id="type" type="text" onChange = {e => setType(e.target.value)}/>


                <label htmlFor="iamgeURL">Image URL: </label>
                <input id="imageURL" type="text" onChange = {e => setImageURL(e.target.value)}/>
                {/* <label htmlFor="file">Upload Image</label>
                <input type="file" id="file"
                       name="image"  required
                       
                       onChange = {e => {const file = e.target.files[0]; 
                    setFile(file);} }
                       ></input>
                 */}
                <input type = "submit" value="Upload" />
            </form>
        </div>
    );
}
