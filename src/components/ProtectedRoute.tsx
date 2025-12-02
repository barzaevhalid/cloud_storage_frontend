import { Navigate } from "react-router-dom";
import { parseCookies } from "nookies";
import { useEffect, useState } from "react";
import axios from "../core/axios";

interface ProtectedRouteProps {
  children: React.ReactNode;
}

export default function ProtectedRoute({ children }: ProtectedRouteProps) {
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
    return <Navigate to="/dashboard/auth" replace />;
  }

  return <>{children}</>;
}
