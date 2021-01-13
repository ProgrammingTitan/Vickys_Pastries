import React, { Component } from 'react';
import axios from 'axios';
import SocialBar from '../layout/SocialBar';
import CategoryWidget from '../layout/CategoryWidget';

const PORT = process.env.PORT || 'http://localhost:5000' ;


export default class CategoryPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            projects: [],
            projectID:  this.props.match.params.id,
            gotData: false,
        }
    }


    componentDidMount() {
        const url = `${PORT}/projects/category/${this.state.projectID}`;
       
        
        axios.get(url)
        .then((res) => {
            this.setState({
                projects: res.data,
                gotData: true
            });
        })
        .catch((err) => {
            console.log(err);
        });

        console.log(this.state.projects)
    }

    render(){
    return (
        <>
                  <div className="project-card-row">
                    
                {this.state.gotData && this.state.projects.map((item,key) => (
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
<SocialBar />
<CategoryWidget />
            </>
    )

    }
}
