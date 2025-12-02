import { Route, Routes } from "react-router-dom";
import Auth from "./pages/dashboard/auth";
import "./global.css";
import DashboardPage from "./pages/dashboard";
import ProtectedRoute from "./components/ProtectedRoute";

export default function App() {
  return (
    <Routes>
      <Route path="/dashboard/auth" element={<Auth />} />
      <Route
        path="/dashboard/"
        element={
          <ProtectedRoute>
            <DashboardPage />
          </ProtectedRoute>
        }
      />

      <Route path="*" element={<h2>Page not found</h2>} />
    </Routes>
  );
}
