import React, {Component} from "react";

class Customer extends Component{
    render(){
        const { id, firstname, lastname, email } = this.props.customer;
        return(
            <tr>
            <td>{id}</td>
            <td>{`${firstname} ${lastname}`}</td>
            <td>{email}</td>
            <td style={{width:"160px"}}>
                <button className="btn btn-info text-white mr-10">Edit</button>
                <button className="btn btn-danger text-white ">Delete</button>
            </td>
        </tr>
        )
    }
}

export default Customer;