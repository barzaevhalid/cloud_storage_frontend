import { useEffect, useRef, useState } from "react";
import Selecto from "react-selecto";

import type { FileItem } from "../../api/dto/files.dto";
import FileCard from "../FileCard";
import s from "./FileList.module.scss";
import axios from "../../core/axios";
import { useOutletContext } from "react-router-dom";
import type { DashboardContext } from "../../layouts/DashboardLayout";

export type FileSelectype = "select" | "unselect";
type FileListProps = {
  type: string;
};

export default function FileList({ type = "all" }: FileListProps) {
  const [loading, setLoading] = useState(true);
  const { files, setFiles, onFileSelect } =
    useOutletContext<DashboardContext>();

  const containerRef = useRef<HTMLDivElement>(null);

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
    <div ref={containerRef} className={s.root}>
      {files.map((item) => (
        <div data-id={item.id} className="file" key={item.id}>
          <FileCard filename={item.filename} originalName={item.originalName} />
        </div>
      ))}
      <Selecto
        container={containerRef.current}
        selectableTargets={[".file"]}
        selectByClick
        hitRate={10}
        selectFromInside
        toggleContinueSelect={["shift"]}
        continueSelect={false}
        onSelect={(e) => {
          e.added.forEach((el) => {
            el.classList.add("active");
            onFileSelect(Number(el.dataset["id"]), "select");
          });
          e.removed.forEach((el) => {
            el.classList.remove("active");
            onFileSelect(Number(el.dataset["id"]), "unselect");
          });
        }}
      />
    </div>
  );
}
