import React, { Component } from "react";
import "./css/myform.css"

class MyForm extends Component {
    render() {
        return (
            <>
                <form className="form">
                    <div className="display-flex flex-direction-row">
                        <div className=" col-3 form-input">
                            <label htmlFor="exampleFormControlInput1" className="form-label">First Name</label>
                            <input type="text" className="form-control" id="exampleFormControlInput1" name="first_name" placeholder="First Name" />
                        </div>
                        <div className=" col-3 form-input">
                            <label htmlFor="exampleFormControlInput1" className="form-label">Last Name</label>
                            <input type="text" className="form-control" id="exampleFormControlInput1" name="last_name" placeholder="Last Name" />
                        </div>
                        <div className=" col-3 form-input">
                            <label htmlFor="exampleFormControlInput1" className="form-label">Email address</label>
                            <input type="email" className="form-control" id="exampleFormControlInput1" name="email" placeholder="name@example.com" />
                        </div>
                        <div className="col-3 custom-btn-div">
                            <button type="button" name="" id="" className="btn btn-primary btn-md btn-block mt-10">Submit</button>
                        </div>
                    </div>

                </form>
            </>
        );
    }
}

export default MyForm;