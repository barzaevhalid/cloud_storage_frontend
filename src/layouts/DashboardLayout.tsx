import {
  FileOutlined,
  FileImageOutlined,
  DeleteOutlined,
} from "@ant-design/icons";
import { Menu } from "antd";
import s from "../styles/Home.module.scss";
import UploadButton from "../components/UploadButton";
import { Link, Outlet, useLocation } from "react-router-dom";
import { useState } from "react";
import type { FileSelectype } from "../components/FileList";
import type { FileItem } from "../api/dto/files.dto";
import type { User } from "../api/dto/auth.dto";
import FileActions from "../components/FileActions";
import * as Api from "../api/";
import { DashboardContext } from "../utils/DashboardContext";

export interface DashboardContext {
  user: User | null;
  files: FileItem[];
  setFiles: React.Dispatch<React.SetStateAction<FileItem[]>>;
  onFileSelect: (id: number, type: FileSelectype) => void;
}

export default function DashboardLayout() {
  const [selectedIds, setSelectedIds] = useState<number[]>([]);
  const [files, setFiles] = useState<FileItem[]>([]);
  const [loading, setLoading] = useState(false);

  const location = useLocation();
  const hideButtons = location.pathname == "/dashboard/trash";
  const onFileSelect = (id: number, type: FileSelectype) => {
    if (type === "select") {
      setSelectedIds((prev) => [...prev, id]);
    } else {
      setSelectedIds((prev) => prev.filter((_id) => _id !== id));
    }
    console.log(selectedIds, "ids");
  };

  const onClickRemove = () => {
    setSelectedIds([]);
    setFiles((prev) => prev.filter((file) => !selectedIds.includes(file.id)));
    Api.files.remove(selectedIds);
  };
  const onClickShare = () => {};

  return (
    <DashboardContext.Provider
      value={{ files, setFiles, selectedIds, setSelectedIds, setLoading }}
    >
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
          {!hideButtons && (
            <FileActions
              onClickRemove={onClickRemove}
              onClickShare={onClickShare}
              isActive={selectedIds.length > 0}
            />
          )}

          <Outlet context={{ files, setFiles, onFileSelect }} />
        </div>
      </div>
    </DashboardContext.Provider>
  );
}
