import React, {Component} from "react";

import jsondata from "../json/deskripsi.json";

class Deskripsi extends Component {


    render() {
        return(
            <div className = "container">
                <div className = "panel panel-default col-md-10 col-md-offset-1 col-lg-10 col-lg-offset-1">
                    <div className = "panel-heading">
                        <h3 className = "panel-title">{this.props.category}</h3>
                    </div>
                    <div className = "panel-body">
                        <table className = "table">
                            <thead/>
                            <tbody>
                                <tr>
                                    <td rowSpan = "4"><img src = {`../${this.props.img}`} alt = "Mie Goreng" className = "foto-produk" /></td>
                                    <td>Nama Produk : </td>
                                    <td>{this.props.name}</td>
                                </tr>
                                <tr>
                                    <td>Harga : </td>
                                    <td>{this.props.price}</td>
                                </tr>
                                <tr>
                                    <td>Deskripsi: </td>
                                    <td>{this.props.deskripsi}</td>
                                </tr>
                                <tr></tr>
                                <tr>
                                    <td>
                                        <center>
                                            <button className = "btn-cart btn">Add to cart</button>
                                        </center>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        )
    }
}

export default Deskripsi;

