import React from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { addToCart } from "../../app/cartSlice";
import { IProduct } from "../../interfaces/product";
import { useGetProductQuery } from "../../services/product";

type Props = {};

const ProductDetail = (props: Props) => {
  const { id } = useParams();
  const { data: listProduct, isLoading } = useGetProductQuery(id as any);
  const dispatch = useDispatch();
  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-12 mt-3">
          <div className="detail d-flex">
            <div className="body-image">
              <img src={listProduct?.img} />
            </div>
            <div className="body-form mt-3 ml-3">
              Điện thoại/Oppo/<span className="text-bought">Oppo A50</span>
              <h2>{listProduct?.name}</h2>
              <p className="text-primary price">
                {listProduct?.price.toLocaleString("vi-VN", {
                  style: "currency",
                  currency: "VND",
                })}
              </p>
              <span>Số lượng : </span>
              <input
                type="number"
                name="qty"
                defaultValue={listProduct?.quantity}
                style={{ width: 100, textAlign: "center" }}
                className="qty"
              />
              <br />
              <button
                type="button"
                className="btn btn-warning mt-3 add"
                onClick={() => dispatch(addToCart(listProduct))}
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
          </div>
          <div className="mt-4">
            <h6 className="h6 border-bottom border-dark text-uppercase text-center">
              Chi tiết sản phẩm
            </h6>
            <p>{listProduct?.desc}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
