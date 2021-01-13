import axios from 'axios';
import React, { Component } from 'react'
import ControlPanel from '../pages/ControlPanel';
import ProjectPage from '../pages/ProjectPage';

const PORT = process.env.PORT || 'http://localhost:5000' ;


export default class ProjectDelete extends Component {


    constructor(props) {
        super(props);
        this.deletePress = this.deletePress.bind(this);
        this.deleteFinal = this.deleteFinal.bind(this);
        this.deleteCancel = this.deleteCancel.bind(this);
        this.state = {
            projects: [],
            showModal: false,
            projectName: '',
            projectID: '',
        }
  
    }

    deletePress = async (givenID, givenName) => {
    
        this.setState({
            showModal: true,
            projectName: givenName,
            projectID: givenID,
        });
    }

    deleteFinal = async () => {
        
        let token = localStorage.getItem("auth-token");

        console.log(`${this.state.projectID} will now be deleted`);

        const url = `${PORT}/projects/${this.state.projectID}`;
        axios.delete(url ,{ 
            headers: {
                "x-auth-token" : token,
            }
        }
        )
        .then((res) => {
            this.setState({
                projects: res.data
            });
        })
        .catch((err) => {
            console.log(err);
        });

        window.location.reload(false);

    }

    deleteCancel = () => {
    
        this.setState({
            showModal: false,
            projectName: '',
            projectID: '',
        });
    }


    componentDidMount() {
        const url = `${PORT}/projects`;
        
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
            <ControlPanel />
            <h1 className="control-panel-heading">Delete a Project</h1>
              { this.state.showModal && 
              <div className="delete-commit-option">
                  <h2>Are you sure you want to delete {this.state.projectName}?</h2>
              <button onClick={this.deleteFinal}variant="primary" >
        Delete 
      </button>
      <button onClick={this.deleteCancel} variant="primary" >
      Cancel
    </button> 
    </div>
    }
                  <div className="project-card-row">
                
                    
                {this.state.projects.map((item,key) => (
                    
                    <div className="project-card-col" >
                    <div id={key} className="img__wrap" >
                    <button onClick={() => this.deletePress(item._id,item.title)} >
                        
                            <img className="img__img" src={item.imageData} />
                            
                            <h2 className="img__description" id="delete-card">{item.title}</h2>
                            </button>
                           
                    </div>
                    
                    </div>
                     
                       
                    ))}

</div>

            </>
                );
}
}

