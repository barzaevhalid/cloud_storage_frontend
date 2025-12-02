import { Tabs } from "antd";
import LoginForm from "../../../components/auth/LoginForm";
import RegisterForm from "../../../components/auth/RegisterForm";

export default function Auth() {
  return (
    <div style={{ width: 400, margin: "50px auto" }}>
      <Tabs
        items={[
          {
            label: "Войти",
            key: "1",
            children: <LoginForm />,
          },
          {
            label: "Регистрация",
            key: "2",
            children: <RegisterForm />,
          },
        ]}
      />
    </div>
  );
}
