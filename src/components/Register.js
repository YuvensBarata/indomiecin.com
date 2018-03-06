import React, {Component} from "react";
import "../styles/Register.css";

class Register extends Component {
    render() {
      return (
        <div className = "container">
        <div className = "panel panel-default col-md-offset-3 col-md-6 col-lg-offset-3 col-lg-6">
            <div className = "panel-heading">
                <h3 className = "panel-title">Register</h3>
            </div>
            
            <div className = "panel-body">
                <form className = "form-horizontal">
                    <div className = "form-group">
                            <label htmlFor = "regname" className = "control-label col-sm-3">Username</label> &nbsp;
                            <div className = "regname col-sm-8">
                                <input type = "text" ref = "nama" className = "form-control" placeholder = "Username" />
                            </div>
                    </div>

                    <div className = "form-group">
                            <label htmlFor = "regpass" className = "control-label col-sm-3">Password</label> &nbsp;
                            <div className = "regpass col-sm-8">
                                <input type = "password" ref = "regpass" className = "form-control" placeholder = "Password" />
                            </div>
                    </div>

                    <div className = "form-group">
                            <label htmlFor = "regpass2" className = "control-label col-sm-3">Re-enter Password</label> &nbsp;
                            <div className = "regpass2 col-sm-8">
                                <input type = "password" ref = "regpass2" className = "form-control" placeholder = "Password" />
                            </div>
                    </div>

                    <div className = "form-group">
                            <label htmlFor = "regmail" className = "control-label col-sm-3">E-mail</label> &nbsp;
                            <div className = "regmail col-sm-8">
                                <input type = "email" ref = "regmail" className = "form-control" placeholder = "E-mail" />
                            </div>
                    </div>

                    <div>
                        <center>
                            <button className = "btn btn-reg">Register</button>
                        </center>
                    </div>
                </form>
            </div>
        </div>
        </div>
      );
    }
  }
  
export default Register;