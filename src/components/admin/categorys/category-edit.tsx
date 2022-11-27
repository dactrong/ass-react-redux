import React, { useEffect } from "react";
import { Button, Checkbox, Form, Input, message } from "antd";
import { ICategory } from "../../../interfaces/category";
import {
  useEditCategorysMutation,
  useGetCategoryQuery,
} from "../../../services/categorys";
import { useNavigate, useParams } from "react-router-dom";

type Props = {};

const CategoryEdit = (props: Props) => {
  const [form] = Form.useForm();
  const { id  } = useParams();
  const navigate = useNavigate();

  const { data: getCategory, isLoading } = useGetCategoryQuery(id as any);
  const [editCategory] = useEditCategorysMutation();
  form.setFieldsValue(getCategory);

  const onFinish = (value: ICategory) => {
    const data1 = {
      name:value.name,
      id,
    };
    // console.log(data1,id);

    editCategory(data1)
      .then((result) => {
        message.success("Sửa thành công");
        navigate("/admin/categorys");
      })
      .catch((err) => {
        message.error("Lỗi");
      });

    
  };
  return (
    <div>
      <Form
        name="name"
        labelCol={{ span: 3 }}
        wrapperCol={{ span: 16 }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        form={form}
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

export default CategoryEdit;
