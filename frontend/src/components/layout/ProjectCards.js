import axios from 'axios';
import React, { Component } from 'react'
import ProjectPage from '../pages/ProjectPage';

const PORT = process.env.PORT || 'http://localhost:5000' ;

export default class ProjectCards extends Component {

    

    constructor(props) {
        super(props);
        this.state = {
            projects: [],
        }
  
    }

    componentDidMount() {
        const url = `${PORT}/projects`;
        console.log(url);
        axios.get(url)
        .then((res) => {
            this.setState({
                projects: res.data
            });
        })
        .catch((err) => {
            console.log(err);
        });
    }


    render() {
        return (
            <>
                  <div className="project-card-row">
                    
                {this.state.projects.map((item,key) => (
                    <div className="project-card-col" >
                    <div id={key} className="img__wrap" >
                        {/* <h1 id={key}>{item.title}</h1> */}
                            <a href={`/project/${item._id}`}>
                            <img className="img__img" src={item.imageData} />
                            <h2 className="img__description">{item.title}</h2>
                            </a>
                    </div>
                    </div>
                    ))}

</div>
            </>
                );
}
}

