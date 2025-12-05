import { CloudDownloadOutlined } from "@ant-design/icons";
import { Button, notification, Upload, type UploadFile } from "antd";
import { useContext, useState } from "react";

import * as Api from "../../api/";
import s from "../../styles/Home.module.scss";

import { DashboardContext } from "../../utils/DashboardContext";

export default function UploadButton() {
  const [fileList, setFileList] = useState<UploadFile[]>([]);
  const ctx = useContext(DashboardContext);

  if (!ctx) return null;

  const { setFiles, setLoading } = ctx;
  const onUploadSuccess = async (options: any) => {
    try {
      setLoading(true);
      const file = await Api.files.uploadFile(options);
      console.log(file, "file");

      setFiles((prev) => [...prev, file]);

      setFileList([]);
    } catch (err) {
      console.log(err);
      notification.error({
        title: "Error!",
        description: "Cand load file",
        duration: 2,
      });
    } finally {
      setLoading(false);
    }
  };
  return (
    <Upload
      className={s.upload}
      fileList={fileList}
      customRequest={onUploadSuccess}
      onChange={({ fileList }) => setFileList(fileList)}
    >
      <Button type="primary" icon={<CloudDownloadOutlined />} size="large">
        Load file
      </Button>
    </Upload>
  );
}
