import { Menu } from "antd";
import s from "../../styles/Home.module.scss";
import {
  DeleteOutlined,
  FileImageOutlined,
  FileOutlined,
} from "@ant-design/icons";
import UploadButton from "../../components/UploadButton";
export default function DashboardPage() {
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
              label: `Files`,
              onClick: () => {},
            },
            {
              key: `/dashboard/photos`,
              icon: <FileImageOutlined />,
              label: `Photos`,
              onClick: () => {},
            },
            {
              key: `/dashboard/trash`,
              icon: <DeleteOutlined />,
              label: `Trash`,
              onClick: () => {},
            },
          ]}
        />
      </div>
      <div className="container">
        <h1>Files</h1>
      </div>
    </div>
  );
}
