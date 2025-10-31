import { Outlet, useNavigate } from "react-router";
import { useAuthStore } from "../stores/useAuthStore";
import { useEffect, useState } from "react";

function UnauthenticatedLayout() {
  const navigate = useNavigate();
  const user = useAuthStore((state) => state.user);
  const [show, setShow] = useState(false);
  useEffect(() => {
    if (user) {
      navigate("/");
    } else {
      setShow(true);
    }
  }, [navigate, user]);

  return <>{show && <Outlet />}</>;
}

export default UnauthenticatedLayout;
