import React, { Component } from 'react';
import { Link } from "react-router-dom";

import jsondata from "../json/deskripsi.json";

import "../styles/Goreng.css";

class Goreng extends Component {

    constructor() {
        super();
        this.state = {produk:[]};
      }

      componentDidMount() {
        this.setState({produk : jsondata});
      }

    render() {
        const hasil = this.state.produk.filter(x => x.category === "Mie Goreng");

        const product = hasil.map((item) => {
            return(
                <tbody>
                    <tr key = {item.id}>
                        <td rowSpan = "3">
                            <Link to = {`/deskripsi/${item.id}`}>  
                                <img src = {item.img} alt = "Mie Goreng" className = "foto-produk" />
                            </Link>
                        </td>
                        <td>Nama Produk : </td>
                        <td>{item.name}</td>
                    </tr>
                    <tr key = "Row2 {item.id}">
                        <td>Harga : </td>
                        <td>{item.price}</td>
                    </tr>
                    <tr key = "Row3 {item.id}">
                        <td colSpan = "2"><button className = "btn-cart btn">Add to cart</button></td>
                    </tr>
                </tbody>
            )
        })
      return (
        <div className = "container">
        <div className = "col-md-10 col-md-offset-1 table">
        <center>
            <table className = "table">
                <thead />
                {product}
            </table>
        </center>
        </div>
        </div>
      );
    }
  }
  
  export default Goreng;