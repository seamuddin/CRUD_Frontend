import React, {Component} from 'react'
import MyForm from "./Myform"
import CustomerList from "./CustomerList"
import Loader from './loader';
import "./css/app.css";
import "./css/global.css";   
import axios from 'axios';


class App extends Component {
    state = {
        customers: [],
        loader: false,
        url:"http://localhost/railway-backend/public/api/customers"
    };
    getCustomers = async () =>{
        this.setState({loader:true})
        const customers = await axios.get(this.state.url)
        this.setState({customers :customers.data, loader:false})
    };
    componentDidMount(){
        this.getCustomers();

    }
    render(){
        return(
            <>
            <div className="container" >
               <div className="p-5">
                   <a name="" id="" className="btn btn-primary" href="/#" role="button">React JS Crud with Laravel API</a>
               </div>
            </div>
            <div className="main-container">
                <div className="container pl-5 pr-5">
                    <MyForm/>
                    {/* <Loader/> */}
                        {this.state.loader ? <Loader/> : ""}
                    <CustomerList customers={this.state.customers}/>

                    
                </div>
            </div>
            </>
        );
    }
}

export default App;