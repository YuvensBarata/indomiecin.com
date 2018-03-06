import React, {Component} from "react";
import { Link } from "react-router-dom";

import "../styles/Header.css";

class Header extends Component {
    render() {
      return (
        <div className = "header">
            <div className = "top-header">
                 <div className = "register">
                     <Link to = "/login">Login</Link> &nbsp; &nbsp;
                     <Link to = "/signin">Sign In</Link>
                 </div>
             </div>

            <div className = "mid-header">
                <center>
                    <h1 className = "logo">Indomiecin.com</h1>
                </center>
            </div>

            <div className = "dropdown bot-header">
                <center>
                    <Link to = "/home"><button className = "btn btn-header"><span className = "glyphicon glyphicon-home"></span> Home</button></Link>

                    <button className="btn btn-header dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                    <span className = "glyphicon glyphicon-tags"></span> Product <div className = "caret"></div>
                    </button>
                    <ul className="dropdown-menu" aria-labelledby="dropdownMenu1">
                        <li><Link to = "/miegoreng"><h4>Indomie Goreng</h4></Link></li>
                        <li><Link to = "/miekuah"><h4>Indomie Kuah</h4></Link></li>
                        <li><Link to = "/mierealmeat"><h4>Indomie Real Meat</h4></Link></li>
                    </ul>

                    <Link to = "/cart"><button className = "btn btn-header"><span className = "glyphicon glyphicon-shopping-cart"></span> Cart</button></Link> &nbsp; &nbsp;
                    <input type="text" className = "search-bar"  placeholder = "Search" />
                    <button className = "btn-search">
                        <span className="glyphicon glyphicon-search"></span>
                    </button>
                </center>
            </div>
        </div>

      );
    }
  }
  
  export default Header;