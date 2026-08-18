"use client";

import { Button } from "react-bootstrap";
import { useRouter } from "next/navigation";

export default function MainPage() {
  const router = useRouter();

  return (
    <div
      className="d-flex flex-column justify-content-center align-items-center text-center"
      style={{
        minHeight: "100vh",
        background:
          "linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #334155 100%)",
        color: "white",
      }}
    >
      <h1 className="display-3 fw-bold mb-3">
        🎬 Welcome to Cine Browser App
      </h1>

      <p className="lead mb-5">
        Discover movies, create your account and enjoy the experience.
      </p>

      <div className="d-flex gap-3">
        <Button
          size="lg"
          variant="primary"
          onClick={() => router.push("/login")}
        >
          Login
        </Button>

        <Button
          size="lg"
          variant="outline-light"
          onClick={() => router.push("/register")}
        >
          Register
        </Button>
      </div>
    </div>
  );
}