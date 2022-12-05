import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { addToCart } from "../../app/cartSlice";
import { ICategory } from "../../interfaces/category";
import { useGetCategorysQuery } from "../../services/categorys";
import { useGetProductsQuery } from "../../services/product";


const Products = () => {
  const { data: listProducs, isLoading } = useGetProductsQuery();
  const dispatch = useDispatch();

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
              {listProducs?.map((item: any, index: number) => {
                return (
                  <div className="project_box" data-id={22} title={item.name}>
                    <Link to={`/products/${item.id}/detail`}>
                      <div className="dark_white_bg">
                        <img src={item?.img} alt="#" />
                      </div>
                      <h3
                        className="text-center"
                        style={{ textTransform: "uppercase" }}
                      >
                        <b>{item?.name}</b>
                      </h3>
                      <p className="text-warning">
                        {item?.price.toLocaleString("vi-VN", {
                          style: "currency",
                          currency: "VND",
                        })}
                      </p>
                    </Link>
                    <button
                      className="btn btn-success mb-2 mx-1 add-cart"
                      onClick={() => dispatch(addToCart(item))}
                    >
                      Thêm vào giỏ hàng
                    </button>
                    <div
                      className="success"
                      style={{ position: "fixed", right: 0, top: 0 }}
                    >
                      <div className="alert" />
                    </div>
                  </div>
                );
              })}

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
