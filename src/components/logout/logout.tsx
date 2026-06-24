"use client";

import { useRouter } from "next/navigation";
import { Button } from "react-bootstrap";
import { useAuthStore } from "@/hooks/authHook";

export default function LogoutButton() {
  const router = useRouter();
  const logout = useAuthStore((state) => state.logout);

  const handleLogout = () => {
    logout();           // ✅ state clear
    router.push("/login"); // ✅ redirect
  };

  return (
    <Button
      style={{ padding: "0.375rem 0.75rem", margin: "1rem 1rem 1rem 1rem" }}
      size="sm"
      onClick={handleLogout}
      variant="danger"
    >
      Logout
    </Button>
  );
}