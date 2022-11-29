import React from "react";
import { Link } from "react-router-dom";

type Props = {};

const Products = (props: Props) => {
  return (
    <>
      <div className="blue_bg">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="titlepage">
                <h2>Sản phẩm nổi bật</h2>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="project" className="project">
        <div className="container">
          <div className="row">
            <div className="product_main">
              <div className="project_box ">
                <div className="dark_white_bg">
                  <img src="/src/assets/images/shoes1.png" alt="#" />
                </div>
                <h3>Short Openwork Cardigan $120.00</h3>
              </div>
              <div className="project_box ">
                <div className="dark_white_bg">
                  <img src="/src/assets/images/shoes2.png" alt="#" />
                </div>
                <h3>Short Openwork Cardigan $120.00</h3>
              </div>
              <div className="project_box">
                <div className="dark_white_bg">
                  <img src="/src/assets/images/shoes3.png" alt="#" />
                </div>
                <h3>Short Openwork Cardigan $120.00</h3>
              </div>
              <div className="project_box">
                <div className="dark_white_bg">
                  <img src="/src/assets/images/shoes4.png" alt="#" />
                </div>
                <h3>Short Openwork Cardigan $120.00</h3>
              </div>
              <div className="project_box">
                <div className="dark_white_bg">
                    <Link to = "/products/detail"><img src="/src/assets/images/shoes5.png" alt="#" /></Link>
                  
                </div>
                <Link to = "/products/detail"> <h3>Short Openwork Cardigan $120.00</h3></Link>
               
              </div>

              <div className="col-md-12">
                <a className="read_more" href="#">
                  See More
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Products;
