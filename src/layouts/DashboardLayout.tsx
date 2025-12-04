import {
  FileOutlined,
  FileImageOutlined,
  DeleteOutlined,
} from "@ant-design/icons";
import { Menu } from "antd";
import s from "../styles/Home.module.scss";
import UploadButton from "../components/UploadButton";
import { Link, Outlet } from "react-router-dom";

export default function DashboardLayout() {
  return (
    <div className={s.dashboardContainer}>
      <div className={s.sidebar}>
        <UploadButton />
        <Menu
          className={s.menu}
          mode="inline"
          items={[
            {
              key: `/dashboard`,
              icon: <FileOutlined />,
              label: <Link to="/dashboard/">Files</Link>,
              onClick: () => {},
            },
            {
              key: `/dashboard/photos`,
              icon: <FileImageOutlined />,
              label: <Link to="/dashboard/photos"> Photos</Link>,
            },
            {
              key: `/dashboard/trash`,
              icon: <DeleteOutlined />,
              label: <Link to="/dashboard/trash"> Trash</Link>,
            },
          ]}
        />
      </div>
      <div className="container">
        <h1>Files</h1>
        <Outlet />
      </div>
    </div>
  );
}
