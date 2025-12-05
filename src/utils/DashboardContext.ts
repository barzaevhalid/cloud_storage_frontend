import { createContext } from "react";
import type { FileItem } from "../api/dto/files.dto";

export interface DashboardContextType {
  files: FileItem[];
  setFiles: React.Dispatch<React.SetStateAction<FileItem[]>>;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
  selectedIds: number[];
  setSelectedIds: React.Dispatch<React.SetStateAction<number[]>>;
}

export const DashboardContext = createContext<DashboardContextType | null>(
  null
);
