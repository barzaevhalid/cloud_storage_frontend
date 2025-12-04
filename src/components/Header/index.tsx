import { Avatar, Button, Layout, Menu, Popover } from "antd";
import { Link } from "react-router-dom";
import { CloudOutlined } from "@ant-design/icons";

import s from "./Header.module.scss";
import * as Api from "../../api";
export const Header = () => {
  const onClickLogout = () => {
    if (window.confirm("Are you really want to exit ?")) {
      Api.auth.logout();
      location.href = "/dashboard/auth";
    }
  };
  return (
    <Layout.Header className={s.root}>
      <div className={s.headerInner}>
        <div className={s.headerLeft}>
          <h2 className={s.title}>
            <CloudOutlined />
            Cloud Storage
          </h2>
          <Menu
            className={s.topMenu}
            theme="dark"
            mode="horizontal"
            items={[
              {
                key: "/dashboard",
                label: <Link to="dashboard">Main</Link>,
              },
              {
                key: "/dashboard/profile",
                label: <Link to="profile">Profile</Link>,
              },
            ]}
          />
        </div>
        <div className={s.headerRight}>
          <Popover
            trigger="click"
            content={
              <Button onClick={onClickLogout} type="primary" danger>
                Logout
              </Button>
            }
          >
            <Avatar>A</Avatar>
          </Popover>
        </div>
      </div>
    </Layout.Header>
  );
};
