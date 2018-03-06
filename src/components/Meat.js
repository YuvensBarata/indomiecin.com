import React, { Component } from 'react';
import { Link } from "react-router-dom";

import jsondata from "../json/deskripsi.json";
import "../styles/Meat.css";

class Meat extends Component {

    constructor() {
        super();
        this.state = {produk:[]};
      }

      componentDidMount() {
        this.setState({produk : jsondata});
      }

    render() {
        const hasil = this.state.produk.filter(x => x.category === "Mie Real Meat");

        const product = hasil.map((item) => {
            return(
                <tbody>
                    <tr key = {item.id}>
                        <td rowSpan = "3">
                            <Link to = {`/deskripsi/${item.id}`}>
                                <img src = {item.img} alt = "Mie Real Meat" className = "foto-produk" />
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
                    <hr />
                </tbody>
            )
        })
      return (
          <div className = "container">
        <div className = "col-md-10 col-md-offset-1 table-responsive">
            <table className = "table">
                <thead />
                {product}
            </table>
        </div>
        </div>
      );
    }
  }
  
  export default Meat;