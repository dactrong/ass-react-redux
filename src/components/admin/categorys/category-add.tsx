import React from "react";
import { Button, Checkbox, Form, Input, message } from "antd";
import { ICategory } from "../../../interfaces/category";
import { useAddCategoryMutation } from "../../../services/categorys";
import { useNavigate } from "react-router-dom";

type Props = {};
const CategoryAdd = (props: Props) => {
  const [addCategory, isLoading] = useAddCategoryMutation();
  const navigate = useNavigate();

  const onFinish = (data: ICategory) => {
    try {
      addCategory(data);
      message.success("Thêm thành công");
      navigate("/admin/categorys");
    } catch (error) {
      message.error("Lỗi!");
    }
  };
  return (
    <div>
      <Form
        name="basic"
        labelCol={{ span: 3 }}
        wrapperCol={{ span: 16 }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        autoComplete="off"
      >
        <Form.Item
          label="Tên danh mục"
          name="name"
          rules={[{ required: true, message: "Không được để trống!" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default CategoryAdd;
