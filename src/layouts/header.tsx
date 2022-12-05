import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { ShoppingCartOutlined } from "@ant-design/icons";

type Props = {};

const Header = (props: Props) => {
  const { cart } = useSelector((state: any) => state.cart);
  const getTotalQuantity = () => {
    let total = 0;
    cart.forEach((item: { quantity: number }) => {
      total += item.quantity;
    });
    return total;
  };
  const navigate = useNavigate();

  const a = JSON.parse(localStorage.getItem("user") as string);
  const handleClick = (event: React.MouseEvent<HTMLElement>, text: string) => {
    localStorage.removeItem("user");
    window.location.reload();
  };
  return (
    <div>
      <header>
        {/* header inner */}
        <div className="header">
          <div className="header_top d_none1">
            <div className="container">
              <div className="row">
                <div className="col-md-4">
                  <ul className="conta_icon ">
                    <li>
                      <a href="#">
                        <img src="/src/assets/images/call.png" alt="#" />
                        Phone:0963209332
                      </a>{" "}
                    </li>
                  </ul>
                </div>
                <div className="col-md-4">
                  <ul className="social_icon">
                    <li>
                      {" "}
                      <a href="#">
                        <i className="fa fa-facebook" aria-hidden="true" />
                      </a>
                    </li>
                    <li>
                      {" "}
                      <a href="#">
                        <i className="fa fa-twitter" />
                      </a>
                    </li>
                    <li>
                      {" "}
                      <a href="#">
                        {" "}
                        <i className="fa fa-linkedin" aria-hidden="true" />
                      </a>
                    </li>
                    <li>
                      {" "}
                      <a href="#">
                        <i className="fa fa-instagram" aria-hidden="true" />
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="col-md-4">
                  {a == null ? (
                    <div className="se_fonr1">
                      <Link to="/signup" className="time_o">
                        {" "}
                        Đăng ký
                      </Link>
                      <Link to="/signin" className="time_o">
                        {" "}
                        Đăng nhập
                      </Link>
                    </div>
                  ) : (
                    <div>
                      {a.user.role == 1 ? (
                        <div className="">
                          <NavLink
                            to="/admin"
                            tabIndex={1}
                            className="dropdown-item text-sm font-normal"
                            role="menuitem"
                          >
                            <span style={{paddingRight:'20px'}} >Admin</span>
                            <span >{a.user.email}</span>
                          </NavLink>
                        </div>
                      ) : (
                        <div> {a.user.email}</div>
                      )}
                      <button
                        value="1"
                        tabIndex={3}
                        className="dropdown-item text-sm font-normal"
                        role="menuitem"
                        id="logout"
                        onClick={(e) => handleClick(e, "clicked")}
                      >
                        Đăng xuất
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
          <div className="header_midil">
            <div className="container">
              <div className="row d_flex">
                <div className="col-md-4">
                  <ul className="conta_icon d_none1">
                    <li>
                      <a href="#">
                        <img src="/src/assets/images/email.png" alt="#" />{" "}
                        demo@gmail.com
                      </a>{" "}
                    </li>
                  </ul>
                </div>
                <div className="col-md-4">
                  <a className="logo" href="#">
                    <img src="/src/assets/images/logo.png" />
                  </a>
                </div>
                <div className="col-md-4">
                  <ul className="right_icon d_none1">
                    <li>
                      <a href="#">
                        <img
                          src="/src/assets/images/shopping.png"
                          alt="#"
                          onClick={() => navigate("/cart")}
                          id="cartIcon"
                        />
                        <span>{getTotalQuantity() || 0}</span>
                      </a>{" "}
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="header_bottom">
            <div className="container">
              <div className="row">
                <div className="col-xl-8 col-lg-8 col-md-8 col-sm-8">
                  <nav className="navigation navbar navbar-expand-md navbar-dark ">
                    <button
                      className="navbar-toggler"
                      type="button"
                      data-toggle="collapse"
                      data-target="#navbarsExample04"
                      aria-controls="navbarsExample04"
                      aria-expanded="false"
                      aria-label="Toggle navigation"
                    >
                      <span className="navbar-toggler-icon" />
                    </button>
                    <div
                      className="collapse navbar-collapse"
                      id="navbarsExample04"
                    >
                      <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                          <Link className="nav-link" to="/">
                            Home
                          </Link>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link" href="about.html">
                            About
                          </a>
                        </li>
                        <li className="nav-item">
                          <Link className="nav-link" to="/products">
                            Products
                          </Link>
                        </li>
                        <li className="nav-item">
                          <Link className="nav-link" to="/products/detail">
                            Fashion
                          </Link>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link" href="news.html">
                            News
                          </a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link" href="contact.html">
                            Contact Us
                          </a>
                        </li>
                      </ul>
                    </div>
                  </nav>
                </div>
                <div className="col-md-4">
                  <div className="search">
                    <form action="/action_page.php">
                      <input
                        className="form_sea"
                        type="text"
                        placeholder="Search"
                        name="search"
                      />
                      <button type="submit" className="seach_icon">
                        <i className="fa fa-search" />
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
