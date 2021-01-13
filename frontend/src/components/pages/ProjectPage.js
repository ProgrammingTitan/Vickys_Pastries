import React, { Component } from 'react';
import axios from 'axios';
import SocialBar from '../layout/SocialBar';
import OrderSubmit from '../layout/OrderSubmit';

const PORT = process.env.PORT || 'http://localhost:5000' ;


export default class ProjectPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            project: {},
            projectID:  this.props.match.params.id,
            gotData: false,
            orderRequest: false,
        }

        this.orderRequestFunction = this.orderRequestFunction.bind(this);
    }


    componentDidMount() {
        const url = `${PORT}/projects/${this.state.projectID}`;
       
        
        axios.get(url)
        .then((res) => {
            this.setState({
                project: res.data,
                gotData: true
            });
        })
        .catch((err) => {
            console.log(err);
        });
    }

    orderRequestFunction = async () =>
    {
        this.setState({
            orderRequest: true
        });

        console.log(this.state.orderRequest);

    }


    render() {
       
        return (
            <>
            {this.state.gotData ?
                <div className="project-page-row">
                    <div className="project-page-col">
                        <img src={this.state.project.imageData} alt={this.state.project.title}/>
                    </div>
                    <div className="project-page-col">
                        <div className="project-page-content">
                            <h1>{this.state.project.title}</h1>
                            <h3>{this.state.project.type} - (Ocassion: {this.state.project.ocassion})</h3>
                            <p>{this.state.project.description}</p>
                            <button onClick={() => this.orderRequestFunction()}>Order One Like This!</button>
                        </div>
                    </div>
                    
                </div>
                :
                <h1>This Project Does Not Exist</h1>
    }
    {this.state.orderRequest && 
        <OrderSubmit 
            description={this.state.project.description}
            ocassion = {this.state.project.ocassion}
            type = {this.state.project.type}
        />}
    <SocialBar />

            </>
        )
    }
}
