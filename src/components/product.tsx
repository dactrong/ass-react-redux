import { Link } from "react-router-dom";
import { useGetProductsQuery } from "../services/product";
import { Button, Table, Popconfirm, message, Avatar } from "antd";
import Column from "antd/es/table/Column";

type Props = {};

const Product = () => {
    const { data: products = [], isLoading, error } = useGetProductsQuery();

    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Error</div>;

    const removeItem = (id: number) => {
        console.log("id", id);
        message.info("Anh đúng đẹp trai");
    };
    return (
        <>
            <Link to = "add">Thêm sản phẩm</Link>

            <Table
                dataSource={products.map((item) => ({
                    key: item.id,
                    name: item.name,
                    price: item.price,
                    quantity: item.quantity,
                    image:item.image,
                    desc:item.desc
                }))}
            >
                <Column title="Tên sản phẩm" dataIndex="name" key="name"  />
                <Column title="Giá sản phẩm" dataIndex="price" key="price" />
                <Column title="Số lượng" dataIndex="quantity" key="quantity" />
                <Column title="Ảnh sản phẩm" dataIndex="image" key="image"  />
                <Column title="Mô tả" dataIndex="desc" key="desc"  />
                
                <Column
                    title="Action"
                    key="action"
                    render={(product) => {
                        return (
                            <Popconfirm
                                placement="top"
                                title="Bạn có muốn xóa không?"
                                onConfirm={() => removeItem(product.key)}
                                okText="Có"
                                cancelText="Không"
                            >
                                <Button type="primary" danger>
                                    Remove
                                </Button>
                            </Popconfirm>
                        );
                    }}
                ></Column>
            </Table>
        </>
    );
};
export default Product;
