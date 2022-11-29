import { Link } from "react-router-dom";
import { useGetProductsQuery, useRemoveProductMutation } from "../../../services/product";
import { Button, Table, Popconfirm, message, Avatar, Image } from "antd";
import Column from "antd/es/table/Column";
import { IProduct } from "../../../interfaces/product";

type Props = {};

const Product = () => {
  const { data: products = [], isLoading, error } = useGetProductsQuery();
  const [removeProduct ] = useRemoveProductMutation();
  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error</div>;

  const removeItem = (id: IProduct) => {
    removeProduct(id)
    message.success("Xóa thành công");
  };
  return (
    <>
      <Link to="add">Thêm sản phẩm</Link>

      <Table
        dataSource={products.map((item) => ({
          key: item.id,
          name: item.name,
          price: item.price,
          quantity: item.quantity,
          img: item.img,
          desc: item.desc,
        }))}
      >
        <Column title="Tên sản phẩm" dataIndex="name" key="name" />
        <Column title="Giá sản phẩm" dataIndex="price" key="price" />
        <Column title="Số lượng" dataIndex="quantity" key="quantity" />
        <Column title="Ảnh sản phẩm" dataIndex="img" key="img" render={
          (images) =>{
          return(
            <Image
            width={100}
            src={images}
          />
          )
          }
        } />
        <Column title="Mô tả" dataIndex="desc" key="desc" />

        <Column
          title="Action"
          key="action"
          render={(product) => {
            return (
              <>
              <Popconfirm
                placement="top"
                title="Bạn có muốn xóa không?"
                onConfirm={() => removeItem(product.key)}
                okText="Có"
                cancelText="Không"
              >
                <Button type="primary" danger>
                  Xóa
                </Button>
              </Popconfirm>
              <Link to ={`${product.key}/edit`}>Sửa</Link></>
            );
          }}
        ></Column>
      </Table>
    </>
  );
};
export default Product;
