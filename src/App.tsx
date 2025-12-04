import { Route, Routes } from "react-router-dom";
import Auth from "./pages/auth";
import "./styles/global.css";
import ProtectedRoute from "./components/ProtectedRoute";
import ProfilePage from "./pages/profile";
import Layout from "./layouts/Layout";
import DashboardLayout from "./layouts/DashboardLayout";
import Photos from "./pages/Photos";
import Trash from "./pages/trash";
import DashboardPage from "./pages/dashboard";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route element={<ProtectedRoute />}>
          <Route path="profile" element={<ProfilePage />} />

          <Route path="dashboard" element={<DashboardLayout />}>
            <Route index element={<DashboardPage />} />
            <Route path="photos" element={<Photos />} />
            <Route path="trash" element={<Trash />} />
          </Route>
        </Route>
        <Route path="/auth" element={<Auth />} />
      </Route>
      <Route path="*" element={<h2>Page not found</h2>} />
    </Routes>
  );
}
