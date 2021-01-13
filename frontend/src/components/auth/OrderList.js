import axios from 'axios';
import React, { Component } from 'react'
import ControlPanel from '../pages/ControlPanel';

const PORT = process.env.PORT || 'http://localhost:5000' ;


export default class OrderList extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            orders: [],
        }

        this.deleteOrder = this.deleteOrder.bind(this);
    }

    componentDidMount() {
        let token = localStorage.getItem("auth-token");
        const url = `${PORT}/orders`;
      
        axios.get(url, { 
            headers: {
                "x-auth-token" : token,
            }})
        .then((res) => {
            this.setState({
                orders: res.data
            });
        })
        .catch((err) => {
            console.log(err);
        });
    }


    deleteOrder = async (id) => {
        let token = localStorage.getItem("auth-token");

        console.log(`${id} will now be deleted`);

        const url = `${PORT}/orders/${id}`;
        
        axios.delete(url ,{ 
            headers: {
                "x-auth-token" : token,
            }
        }
        )
        .then((res) => {
            this.setState({
                orders: res.data
            });
        })
        .catch((err) => {
            console.log(err);
        });

        window.location.reload(false);
    }
    
    render() {
        return (
            <>
            <ControlPanel />
            <div className="email-list">
                <h1 className="control-panel-heading">Order List:</h1>
                {this.state.orders.map( (item,key) => (
                    <div key={item.key}>
                        <h2>{item.name}</h2>
                        <p>{item.phoneNumber} - {item.email}</p>
                        <p>Date Needed: {item.date}</p>
                        <p>Ocassion: {item.ocassion}</p>
                        <p>Type: {item.type}</p>
                        <p>"{item.description}"</p>
                        <button onClick={() => {this.deleteOrder(item._id)}}>Delete Order</button>
                    </div>
                )

                )}                
            </div>
            </>
        )
    }
}
