import React, {Component} from "react";
import { Link } from "react-router-dom";
import jsondata from "../json/produk.json";

import "../styles/Home.css";

class Home extends Component {
  constructor() {
    super();
    this.state = {produk:[]};
  }

  componentDidMount() {
    this.setState({produk : jsondata});
  }

    render() {

      const product = this.state.produk.map((item) => {
        return (
          <li id = "listProduk" key = {item.id}>
            <div>
              <img src = {item.img} className = "productImgHome"  alt = {item.name}/>
            </div>
            <div>
              <center>
                <Link to = {item.link}><button className = "btn-buy btn">{item.name}</button></Link>
              </center>
            </div>
          </li>
        )
      });

      return (
        <div> 
          <div className = "carousel slide carouselcss" id = "iniCarousel" data-ride = "carousel">

            <ol className = "carousel-indicators">
              <li data-target = "#iniCarousel" data-slide-to = "0" className = "active"></li>
              <li data-target = "#iniCarousel" data-slide-to = "1"></li>
              <li data-target = "#iniCarousel" data-slide-to = "2"></li>
            </ol>

            <div className = "carousel-inner gambar-carousel">
              <div className = "item active">
                <center><img src = "images/carousel1.jpg" alt = "carousel-1" /></center>
              </div>
              <div className = "item">
                <center><img src = "images/carousel2.jpg" alt = "carousel-2" /></center>
              </div>
              <div className = "item">
                <center><img src = "images/carousel3.jpg" alt = "carousel-3" /></center>
              </div>
            </div>

            <a className = "left carousel-control" href = "#iniCarousel" data-slide = "prev">
              <span className = "glyphicon glyphicon-chevron-left"></span>
            </a>
            <a className = "right carousel-control" href = "#iniCarousel" data-slide = "next">
              <span className = "glyphicon glyphicon-chevron-right"></span>
            </a>
          </div>

          <div className = "container">
            <div className = "panel panel-default col-md-10 col-md-offset-1 col-lg-10 col-lg-offset-1">
              <div className = "panel-heading">
                <h3 className = "panel-title"><center><h2>About Us</h2></center></h3>
              </div>

              <div className = "panel-body">
                <p>Berdiri pertama kali pada tahun 2018 di Indonesia, Indomiecin.com merupakan sebuah marketplace yang menjual berbagai macam kebutuhan mie instant
                   lokal maupun internasional. Kami memiliki hubungan langsung dengan berbagai supplier mie instant di berbagai belahan dunia, oleh
                   karena itu, kami dapat menyediakan mie instant dengan harga yang sangat kompetitif dan stock supply yang memadai. Kami juga bekerja sama
                   dengan banyak logistik pengiriman, sehingga kami dapat memberikan service maksimal dalam pengiriman secara cepat dan tepat dengan biaya
                   sekecil-kecilnya dan jangkauan seluas-luasnya.
                </p>
              </div>

              <div className = "panel-heading">
                <h3 className = "panel-title"><center><h2>Our Vision</h2></center></h3>
              </div>

              <div className = "panel-body">
                <p>Visi kami adalah menjadi supplier mie instant terbesar baik dalam pasar lokal maupun internasional.</p>
              </div>

              <div className = "panel-heading">
                <h3 className = "panel-title"><center><h2>Our Mission</h2></center></h3>
              </div>

              <div className = "panel-body">
                <ul>
                  <li>Menjadikan mie instant sebagai bahan makanan pokok primer pengganti beras,roti,jagung,dll.</li>
                  <li>Memajukan produk lokal Indonesia menuju pasar internasional.</li>
                  <li>Membuka lapangan usaha baru dengan cara memberikan supply mie instant yang memadai.</li>
                  <li>Memakmurkan kehidupan masyarakat kurang mampu terutama kaum mahasiswa dengan ada nya sumber makanan murah dan bergizi.</li>
                </ul>
              </div>
            </div>



            <div className = "panel panel-default col-md-10 col-md-offset-1col-lg-10 col-lg-offset-1">
              <div className = "panel-heading">
                <h3 className = "panel-title"><center><h2>Our Product</h2></center></h3>
              </div>

              <div className = "panel-body">
                <ul className = "ourProduct list-inline">
                    {product}
                </ul>

              </div>
            </div>
          </div>
        </div>

      );
    }
  }
  
export default Home;