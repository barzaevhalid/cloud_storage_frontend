import { Navigate, Outlet } from "react-router-dom";
import { parseCookies } from "nookies";
import { useEffect, useState } from "react";
import axios from "../core/axios";

export default function ProtectedRoute() {
  const { _token } = parseCookies();
  const [loading, setLoading] = useState(true);
  const [authorized, setAuthorized] = useState(false);

  useEffect(() => {
    if (!_token) {
      setAuthorized(false);
      setLoading(false);
      return;
    }

    axios
      .get("/me")
      .then(() => {
        setAuthorized(true);
      })
      .catch(() => {
        setAuthorized(false);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [_token]);

  if (loading) return <div>Loading...</div>;

  if (!authorized) {
    return <Navigate to="/auth" replace />;
  }

  return <Outlet />;
}
