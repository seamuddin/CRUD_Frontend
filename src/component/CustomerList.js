import React, { Component } from "react";
import './css/customerlist.css'
import Customer from "./Customer";
class CustomerList extends Component {
    render() {
        const customers = this.props.customers;
        return (
            <div className="data">
                <table className="table r-table table-bordered">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>E-mail</th>
                            <th style={{width:"160px"}}>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            customers.map((customer)=>{
                                return (
                                    <Customer customer={customer} key={customer.id}/>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
        )
    }
}


export default CustomerList;