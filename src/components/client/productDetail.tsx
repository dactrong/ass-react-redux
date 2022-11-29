import React from 'react'

type Props = {}

const ProductDetail = (props: Props) => {
  return (
    <div className="container">
  <div className="row justify-content-center">
    <div className="col-md-12 mt-3">
      <div className="detail d-flex">
        <div className="body-image">
          <img src="assets/img/thumb_dien-thoai-oppo-cph1969-f11-pro-128gb-den-c1VIAS.png"  />
        </div>
        <div className="body-form mt-3 ml-3">  
          Điện thoại/Oppo/<span className="text-bought">Oppo A50</span>
          <h2>Oppo A50</h2>
          <p className="text-primary price">9,800,000 ₫</p>
          <span>Số lượng</span>
          <input type="hidden" name="id" className="id" defaultValue={22} />
          <input type="number" name="qty"  min={1} defaultValue={1} style={{width: 50, textAlign: 'center'}} className="qty" /><br />
          <span>Kho: </span><span className="text-primary">45</span><br />
          <span>Đã bán: </span><span className="text-primary">4 </span> <span>sản phẩm</span><br />
          <span>Lượt xem: </span><span className="text-success">418 <i className="fas fa-eye text-success" /></span><br />
          <button type="button" className="btn btn-warning mt-3 add">Thêm vào giỏ hàng</button>
          <div className="success" style={{position: 'fixed', right: 0, top: 0}}> 
            <div className="alert" />
          </div>
        </div>
      </div>
      <div className="mt-4">
        <h6 className="h6 border-bottom border-dark text-uppercase text-center">Chi tiết sản phẩm</h6>
        <p>ghrhrrhjrrjh</p>
      </div>
      <div >
        <span className="icon-like" title="Lượt thích"><i className="fas fa-thumbs-up text-primary" /> </span>
        <span className="count-like text-primary">3</span>
      </div>
      <div style={{border: '2px solid rgb(195, 192, 192)', padding: 10}} className="col-6 mt-3">
        <h2 className="text-uppercase text-success">Đánh giá sản phẩm</h2>
        <a className="text-primary" href="/dang-nhap">Đăng nhập để đánh giá và bình luận! </a>
        <div className="ratting d-flex justify-content-around">
          <div className="d-block">
            <div className="ratting-item">
              <i className="far fa-frown text-warning" /> <span>0 đánh giá</span>
            </div>
            <div className="ratting-item">
              <i className="far fa-meh text-warning" /> <span>1 đánh giá</span>
            </div>
            <div className="ratting-item">
              <i className="far fa-smile text-warning" /> <span>2 đánh giá</span>
            </div>
            <div className="ratting-item">
              <i className="far fa-kiss-wink-heart text-warning" /> <span>0 đánh giá</span>
            </div>
          </div>
          <div className="d-block">
            <i className="fa fa-star" />
            <i className="fa fa-star" />
            <i className="fa fa-star" />
            <i className="fa fa-star" />
            <i className="far fa-star" />
          </div>
        </div>
        <div className="comment-body mt-3">
          <div className="form-group div-comment">
            <p className="name text-primary">Album 2</p>
            <span className="blockquote-footer">
              2022-11-03 13:56:03
            </span>
            <p className="content ml-3 text-muted">hay</p>
            <div style={{width: '100%', height: '.1px', background: 'rgb(246, 243, 243)'}} />
          </div>
        </div>     
      </div>
    </div>
  </div>
</div>


  )
}

export default ProductDetail