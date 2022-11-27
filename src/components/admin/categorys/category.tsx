import { Button, message, Popconfirm, Table } from "antd";
import Column from "antd/es/table/Column";
import React from "react";
import { Link } from "react-router-dom";
import { ICategory } from "../../../interfaces/category";
import {
  useGetCategorysQuery,
  useRemoveCategorysMutation,
} from "../../../services/categorys";

const Category = () => {
  const { data: categorys, isLoading } = useGetCategorysQuery();
  const [deleteCategory] = useRemoveCategorysMutation();
  const removeCategory = (id: ICategory) => {
    deleteCategory(id);
    message.success("Xóa thành công");
  };
  return (
    <div>
      <Link to="add">Thêm danh mục</Link>
      <Table
        dataSource={categorys?.map((item, index) => ({
          key: item.id,
          name: item.name,
        }))}
      >
        <Column title="STT" dataIndex="key " key="id" />
        <Column title="Tên sản phẩm" dataIndex="name" key="name" />
        <Column
          title="Action"
          key="action"
          render={(category) => {
            return (
              <Popconfirm
                placement="top"
                title="Bạn có muốn xóa không?"
                onConfirm={() => removeCategory(category.key)}
                okText="Có"
                cancelText="Không"
              >
                <Button type="primary" danger>
                  Xóa
                </Button>
              </Popconfirm>
            );
          }}
        ></Column>
        <Column
          title="Action"
          key="action"
          render={(category) => {
            
            return (
              <Link to = {`/admin/categorys/${category.key}/edit`}>Sửa</Link>
            );
          }}
        ></Column>
      </Table>
    </div>
  );
};

export default Category;
