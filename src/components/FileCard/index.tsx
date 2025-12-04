import { FileTextOutlined } from "@ant-design/icons";
import { getColorByExtension } from "../../utils/getColorByExtension";
import { getExtensionFromFileName } from "../../utils/getExtensionFromFileName";
import { isImage } from "../../utils/isImage";
import s from "./FileCard.module.scss";
interface FileCardProps {
  filename: string;
  originalName: string;
}
export default function FileCard({ filename, originalName }: FileCardProps) {
  const ext = getExtensionFromFileName(filename);
  const imageUrl =
    ext && isImage(ext) ? `http://localhost:8080/uploads/${filename}` : "";
  const color = getColorByExtension(ext);
  const classColor = s[color];

  return (
    <div className={s.root}>
      <div className={s.icon}>
        <i className={classColor}>{ext}</i>
        {isImage(ext) ? (
          <img className={s.image} src={imageUrl} alt="file" />
        ) : (
          <FileTextOutlined />
        )}
      </div>
      <span>{originalName}</span>
    </div>
  );
}
