import { useForm, SubmitHandler } from "react-hook-form";
import { IProduct } from "../../../interfaces/product";
import { useAddProductMutation } from "../../../services/product";
import {
  Button,
  Checkbox,
  Form,
  Input,
  InputNumber,
  message,
  Select,
  Upload,
  UploadFile,
  UploadProps,
} from "antd";
import { useNavigate } from "react-router-dom";
import { useGetCategorysQuery } from "../../../services/categorys";
import { RcFile } from "antd/es/upload";
import { useState } from "react";
import { uploadImage } from "../../../utils/upload";
import Dragger from "antd/es/upload/Dragger";

type Props = {};

const ProductAdd = (props: Props) => {
  const { data: getCategory } = useGetCategorysQuery();
  const [addProduct, { isLoading }] = useAddProductMutation();

  const navigate = useNavigate();
  const onFinish: SubmitHandler<IProduct> = async (values) => {
    console.log(values);
    const imgLink = await uploadImage(fileList[0]);

    const valueAdd = {
      img: imgLink,
      name: values.name,
      price: values.price,
      desc: values.desc,
      quantity: values.quantity,
      categoryId: values.categoryId,
    };
    
    try {
      addProduct(valueAdd);
      message.success("Thêm thành công");
      navigate("/admin/products");
    } catch (error) {
      message.error("Lỗi !");
    }
  };
  const layout = {
    labelCol: { span: 3 },
    wrapperCol: { span: 16 },
  };
  const validateMessages = {
    required: "${label} không được để trống!",
    types: {
      number: "${label} không phải là một con số hợp lệ!",
    },
    number: {
      range: "${label} phải lớn hơn  ${min} ",
    },
  };

  const [fileList, setFileList] = useState<UploadFile[]>([]);

  const onChange: UploadProps["onChange"] = ({ fileList: newFileList }) => {
    setFileList(newFileList);
  };

  const onPreview = async (file: UploadFile) => {
    let src = file.url as string;
    if (!src) {
      src = await new Promise((resolve) => {
        const reader = new FileReader();
        reader.readAsDataURL(file.originFileObj as RcFile);
        reader.onload = () => resolve(reader.result as string);
      });
    }
    const image = new Image();
    image.src = src;
    const imgWindow = window.open(src);
    imgWindow?.document.write(image.outerHTML);
  };
  return (
    <div>
      <Form
        {...layout}
        name="nest-messages"
        onFinish={onFinish}
        validateMessages={validateMessages}
      >
        <Form.Item
          name={["name"]}
          label="Tên sản phẩm"
          rules={[{ required: true }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name={["price"]}
          label="Giá sản phẩm"
          rules={[
            { required: true, type: "number", min: 0, max: 999999999999999999 },
          ]}
        >
          <InputNumber style={{ width: 1082.66 }} />
        </Form.Item>
        <Form.Item
          name={["quantity"]}
          label="Số lượng"
          rules={[
            { required: true, type: "number", min: 0, max: 999999999999999999 },
          ]}
        >
          <InputNumber style={{ width: 1082.66 }} />
        </Form.Item>
        <Form.Item
          name="image"
          label="Ảnh"
          rules={[{ required: true, message: "Hãy thêm 1 ảnh" }]}
        >
          <Dragger
            listType="picture"
            multiple={false}
            maxCount={1}
            beforeUpload={() => {
              return false;
            }}
            onChange={onChange}
            onPreview={onPreview}
            fileList={fileList}
          >
            <p>Thêm ảnh!</p>
          </Dragger>
        </Form.Item>
        <Form.Item
          name="categoryId"
          label="Danh mục"
          rules={[
            { required: true, message: "Vui lòng chọn danh mục sản phẩm" },
          ]}
        >
          <Select placeholder="Danh mục sản phẩm">
            {getCategory &&
              getCategory.map((item, index) => {
                console.log(getCategory);

                return (
                  <Select.Option value={item.id} key={index}>
                    {item.name}
                  </Select.Option>
                );
              })}
          </Select>
        </Form.Item>
        <Form.Item name={["desc"]} label="Mô tả">
          <Input.TextArea />
        </Form.Item>
        <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default ProductAdd;
