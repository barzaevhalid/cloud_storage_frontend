import { Button, Popconfirm } from "antd";
import s from "./FileActions.module.scss";
interface FileActionsProps {
  onClickRemove: VoidFunction;
  onClickShare: VoidFunction;
  isActive: boolean;
}
export default function FileActions({
  onClickRemove,
  onClickShare,
  isActive,
}: FileActionsProps) {
  return (
    <div className={s.root}>
      <Button onClick={onClickShare} disabled={!isActive}>
        Share
      </Button>

      <Popconfirm
        title="Remove the file(s)?"
        description="All files in bin"
        okText="Yes"
        cancelText="No"
        onConfirm={onClickRemove}
      >
        <Button disabled={!isActive} type="primary" danger>
          Delete
        </Button>
      </Popconfirm>
    </div>
  );
}
