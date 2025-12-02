import { Button, Form, Input, notification } from "antd";
import s from "./Auth.module.scss";
import type { LoginFormDTO } from "../../api/dto/auth.dto";

import * as Api from "../../api";
import { setCookie } from "nookies";

export default function LoginForm() {
  const onSubmit = async (values: LoginFormDTO) => {
    try {
      const { access_token } = await Api.auth.login(values);
      console.log(access_token, "token111");

      notification.success({
        title: "Success!",
        description: "Redirect to admin panel",
        duration: 2,
        onClose: () => (window.location.href = "/dashboard"),
      });
      setCookie(null, "_token", access_token, {
        path: "/",
      });
    } catch (err) {
      console.warn("LoginForm", err);

      notification.error({
        title: "Error!",
        description: "Wrong password or email",
        duration: 2,
      });
    }
  };

  return (
    <div className={s.formBlock}>
      <Form
        onFinish={onSubmit}
        name="basic"
        labelCol={{
          span: 8,
        }}
      >
        <Form.Item
          label="E-mail"
          name="email"
          rules={[{ required: true, message: "Please input your email!" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Password"
          name="password"
          rules={[{ required: true, message: "Please input your password!" }]}
        >
          <Input.Password />
        </Form.Item>
        <Form.Item label={null}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}
