// src/pages/Cart.js
import { Key } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  incrementQuantity,
  decrementQuantity,
  removeItem,
} from "../../app/cartSlice";
function Cart() {
  // src/pages/Cart.js
  const { cart } = useSelector((state: any) => state.cart);
  console.log('cảrt', cart );
  
  const dispatch = useDispatch();

  return (
    // src/pages/Cart.js
    <div>
      <div className="col-md-12 mt-3">
        <div className="card">
          <h3 className="card-header text-center bg-warning ">
            Giỏ hàng của bạn
          </h3>
          <div className="empty"></div>

          <table className="table table-striped">
            <thead>
              <tr className="text-center">
                
                <th scope="col">STT</th>
                <th scope="col">Sản phẩm</th>
                <th scope="col">Ảnh</th>
                <th scope="col">Giá</th>
                <th scope="col">Số lượng</th>
                <th scope="col">Thành tiền</th>
                <th scope="col">Hành động</th>
              </tr>
            </thead>
            {cart?.map(
              (
                item: {
                  id: Key | null | undefined;
                  img: any;
                  name: any;
                  price: number;
                  quantity: number ;
                },
                index: any
              ) => (
                <tbody>
                  <form action="dat-hang" method="post" />
                 
                  <tr data-id="8eb747b95b9862e9d83031beb9938720">
                   
                    <th className="text-center">{index + 1}</th>
                    <td className="">
                      <a href="/san-pham/21">
                        <span className="ml-3">{item?.name}</span>
                      </a>
                    </td>
                    <td className="">
                      <img src={item?.img} alt="" />
                    </td>
                    <td className="text-center">
                      <span>{item?.price}</span>
                    </td>
                    <td className="text-center">
                      <button
                        onClick={() => dispatch(decrementQuantity(item.id))}
                      >
                        -
                      </button>
                      <p>{item.quantity}</p>
                      <button
                        onClick={() => dispatch(incrementQuantity(item.id))}
                      >
                        +
                      </button>
                    </td>
                    <td className="text-center">
                      <span
                        className="text-primary  tt"
                        id="tt-8eb747b95b9862e9d83031beb9938720"
                      >
                        {item?.price * item.quantity}
                      </span>
                    </td>
                    <td className="text-center">
                      <button
                        type="button"
                        className="btn btn-danger btn-sm delete"
                        name="delete"
                        value="8eb747b95b9862e9d83031beb9938720"
                        onClick={() => dispatch(removeItem(item.id))}
                      >
                        Xóa
                      </button>
                     
                    </td>
                  </tr>
                </tbody>
              )
            )}
          </table>

          <div
            className="text-danger d-flex justify-content-end mr-3 mb-3"
            id="sum"
          >
            Tổng tiền: <span>{cart.price}đ</span>
          </div>
          <div className="d-flex justify-content-end mb-2 mr-2">
            <button
              type="submit"
              className="btn btn-success col-1  text-end add"
            >
              Đặt hàng
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
