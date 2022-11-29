import React from "react";
import Banner from "../../layouts/banner";

type Props = {};

const HomePage = (props: Props) => {
  return (
    <div>
      <Banner></Banner>
      <div id="project" className="project">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="titlepage">
                <h2>Featured Products</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="product_main">
              <div className="project_box ">
                <div className="dark_white_bg">
                  <img src="/src/assets/images/tisat5.png" alt="#" />
                </div>
                <h3>Short Openwork Cardigan $120.00</h3>
              </div>
              <div className="project_box ">
                <div className="dark_white_bg">
                  <img src="/src/assets/images/tisat5.png" alt="#" />
                </div>
                <h3>Short Openwork Cardigan $120.00</h3>
              </div>

              <div className="project_box ">
                <div className="dark_white_bg">
                  <img src="/src/assets/images/tisat5.png" alt="#" />
                </div>
                <h3>Short Openwork Cardigan $120.00</h3>
              </div>

              <div className="project_box ">
                <div className="dark_white_bg">
                  <img src="/src/assets/images/tisat5.png" alt="#" />
                </div>
                <h3>Short Openwork Cardigan $120.00</h3>
              </div>

              <div className="project_box ">
                <div className="dark_white_bg">
                  <img src="/src/assets/images/tisat5.png" alt="#" />
                </div>
                <h3>Short Openwork Cardigan $120.00</h3>
              </div>

              <div className="project_box ">
                <div className="dark_white_bg">
                  <img src="/src/assets/images/tisat5.png" alt="#" />
                </div>
                <h3>Short Openwork Cardigan $120.00</h3>
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
      <div className="news">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="titlepage">
                <h2>Letest News</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12 margin_top40">
              <div className="row d_flex">
                <div className="col-md-5">
                  <div className="news_img">
                    <figure>
                      <img src="images/news_img1.jpg" />
                    </figure>
                  </div>
                </div>
                <div className="col-md-7">
                  <div className="news_text">
                    <h3>Specimen book. It has survived not only five</h3>
                    <span>7 July 2019</span>
                    <div className="date_like">
                      <span>Like </span>
                      <span className="pad_le">Comment</span>
                    </div>
                    <p>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s, when an unknown
                      printer took a galley of type and scrambled it to make a
                      type specimen book.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-12 margin_top40">
              <div className="row d_flex">
                <div className="col-md-5">
                  <div className="news_img">
                    <figure>
                      <img src="images/news_img2.jpg" />
                    </figure>
                  </div>
                </div>
                <div className="col-md-7">
                  <div className="news_text">
                    <h3>Specimen book. It has survived not only five</h3>
                    <span>7 July 2019</span>
                    <div className="date_like">
                      <span>Like </span>
                      <span className="pad_le">Comment</span>
                    </div>
                    <p>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s, when an unknown
                      printer took a galley of type and scrambled it to make a
                      type specimen book.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-12 margin_top40">
              <div className="row d_flex">
                <div className="col-md-5">
                  <div className="news_img">
                    <figure>
                      <img src="images/news_img3.jpg" />
                    </figure>
                  </div>
                </div>
                <div className="col-md-7">
                  <div className="news_text">
                    <h3>Specimen book. It has survived not only five</h3>
                    <span>7 July 2019</span>
                    <div className="date_like">
                      <span>Like </span>
                      <span className="pad_le">Comment</span>
                    </div>
                    <p>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s, when an unknown
                      printer took a galley of type and scrambled it to make a
                      type specimen book.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="newslatter">
        <div className="container">
          <div className="row d_flex">
            <div className="col-md-5">
              <h3 className="neslatter">Subscribe To The Newsletter</h3>
            </div>
            <div className="col-md-7">
              <form className="news_form">
                <input
                  className="letter_form"
                  placeholder=" Enter your email"
                  type="text"
                  name="Enter your email"
                />
                <button className="sumbit">Subscribe</button>
              </form>
            </div>
          </div>
        </div>
        <div className="three_box">
          <div className="container">
            <div className="row">
              <div className="col-md-4">
                <div className="gift_box">
                  <i>
                    <img src="/src/assets/images/icon_mony.png" />
                  </i>
                  <span>Money Back</span>
                </div>
              </div>
              <div className="col-md-4">
                <div className="gift_box">
                  <i>
                    <img src="/src/assets/images/icon_gift.png" />
                  </i>
                  <span>Special Gift</span>
                </div>
              </div>
              <div className="col-md-4">
                <div className="gift_box">
                  <i>
                    <img src="/src/assets/images/icon_car.png" />
                  </i>
                  <span>Free Shipping</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
