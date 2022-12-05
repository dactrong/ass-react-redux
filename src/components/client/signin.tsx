import React from "react";
import { Button, Checkbox, Form, Input, message } from "antd";
import { useSigninMutation, useSignupMutation } from "../../services/user";
import { useNavigate } from "react-router-dom";
type Props = {};

const Signin = (props: Props) => {
  const [signin, isLoading] = useSigninMutation();
  const navigate = useNavigate();

  const onFinish = (values: any) => {
    signin(values)
      .unwrap()
      .then((response) => {
        localStorage.setItem("user", JSON.stringify(response));
        message.success("Đăng nhập thành công");
        navigate("/");
      })
      .catch((error) =>{
        message.error("Đăng nhập thất bại");
      })

    
  };

  return (
    <div className="row justify-content-center">
      <div className="col-md-8 mt-4">
        <div className="card  border">
          <div className="card-header h6 text-center bg-warning">
            Đăng ký tài khoản
          </div>
          <div>
            {" "}
            <div className="mt-5">
              <Form
                name="basic"
                labelCol={{ span: 4 }}
                wrapperCol={{ span: 16 }}
                initialValues={{ remember: true }}
                onFinish={onFinish}
                autoComplete="off"
              >
                <Form.Item
                  label="Email"
                  name="email"
                  rules={[
                    { required: true, message: "Please input your password!" },
                  ]}
                >
                  <Input />
                </Form.Item>
                <Form.Item
                  label="Password"
                  name="password"
                  rules={[
                    { required: true, message: "Please input your password!" },
                  ]}
                >
                  <Input.Password />
                </Form.Item>

                <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                  <Button type="primary" htmlType="submit">
                    Sign Up
                  </Button>
                </Form.Item>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signin;
