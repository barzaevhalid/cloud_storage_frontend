import { CloudDownloadOutlined } from "@ant-design/icons";
import { Button, notification, Upload, type UploadFile } from "antd";
import { useState } from "react";

import * as Api from "../../api/";
import s from "../../styles/Home.module.scss";

export default function UploadButton() {
  const [fileList, setFileList] = useState<UploadFile[]>([]);

  const onUploadSuccess = async (options: any) => {
    try {
      const file = await Api.files.uploadFile(options);
      setFileList([]);
    } catch (err) {
      console.log(err);
      notification.error({
        title: "Error!",
        description: "Cand load file",
        duration: 2,
      });
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
