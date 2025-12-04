import { useEffect, useState } from "react";
import type { FileItem } from "../../api/dto/files.dto";
import FileCard from "../FileCard";
import s from "./FileList.module.scss";
import axios from "axios";
type FileListProps = {
  type: string;
};
export default function FileList({ type = "all" }: FileListProps) {
  const [files, setFiles] = useState<FileItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getFiles = async () => {
      try {
        const { data } = await axios.get("/files?type=" + type);
        setFiles(data);
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    };
    getFiles();
  }, [type]);
  return (
    <div className={s.root}>
      {files.map((item) => (
        <div className="file" key={item.id}>
          <FileCard filename={item.filename} originalName={item.originalName} />
        </div>
      ))}
    </div>
  );
}
