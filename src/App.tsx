import { Route, Routes } from "react-router-dom";
import Auth from "./pages/auth";
import "./styles/global.css";
import DashboardPage from "./pages/dashboard";
import ProtectedRoute from "./components/ProtectedRoute";
import ProfilePage from "./pages/profile";
import Layout from "./layouts/Layout";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route element={<ProtectedRoute />}>
          <Route path="/dashboard/" element={<DashboardPage />} />
          <Route path="/profile" element={<ProfilePage />} />
        </Route>
        <Route path="/auth" element={<Auth />} />
      </Route>
      <Route path="*" element={<h2>Page not found</h2>} />
    </Routes>
  );
}
