"use client";

import { Button, Form } from "react-bootstrap";
import { useEffect } from "react";
import { facebook, google } from "@/assets/index";
import Image from "next/image";
import * as Yup from "yup";
import { useFormik } from "formik";
import { useAuthStore } from "@/hooks/authHook";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

export default function RegisterPage() {
  const error = useAuthStore((state) => state.error);
  const isRegistered = useAuthStore((state) => state.isRegistered);
  const registerUser = useAuthStore((state) => state.registerUser);
  const clearError = useAuthStore((state) => state.clearError);
  const resetRegister = useAuthStore((state) => state.resetRegister);

  const router = useRouter();

  useEffect(() => {
    let timer: NodeJS.Timeout;

    if (isRegistered) {
      toast.success("Registration Successful!");

      timer = setTimeout(() => {
        resetRegister();
        router.push("/login");
      }, 2000);
    }

    if (error) {
      toast.error(error);
      clearError();
    }

    return () => {
      if (timer) clearTimeout(timer);
    };
  }, [isRegistered, error, router, resetRegister, clearError]);

  const formik = useFormik({
    initialValues: {
      fullName: "",
      email: "",
      password: "",
      acceptanceMessage: false,
    },

    validationSchema: Yup.object({
      fullName: Yup.string()
        .max(10, "Must be 10 characters or less")
        .required("Required"),

      email: Yup.string()
        .email("Invalid email")
        .required("Required"),

      password: Yup.string()
        .min(8, "Min 8 characters")
        .required("Required"),

      acceptanceMessage: Yup.boolean()
        .oneOf([true], "Please confirm first")
        .required("Required"),
    }),

    onSubmit: (values) => {
      registerUser({
        email: values.email,
        fullName: values.fullName,
        password: values.password,
        acceptanceMessage: values.acceptanceMessage,
      });
    },
  });

  return (
    <div className="min-vh-100 d-flex justify-content-center align-items-center bg-blue text-white py-4 px-3">
      <Form
        onSubmit={formik.handleSubmit}
        className="p-4 p-md-5 rounded-4 shadow-lg bg-dark text-white w-100"
        style={{ maxWidth: "500px" }}
      >
        <h3 className="text-center fw-bold mb-4">
          Create Account
        </h3>

        {/* Full Name */}
        <Form.Group className="mb-3">
          <Form.Label>Full Name</Form.Label>

          <Form.Control
            name="fullName"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.fullName}
            onBlur={formik.handleBlur}
            autoComplete="name"
            placeholder="Enter your full name"
            isInvalid={
              !!(formik.touched.fullName && formik.errors.fullName)
            }
          />

          <Form.Control.Feedback type="invalid">
            {formik.errors.fullName}
          </Form.Control.Feedback>
        </Form.Group>

        {/* Email */}
        <Form.Group className="mb-3">
          <Form.Label>Email Address</Form.Label>

          <Form.Control
            name="email"
            type="email"
            onChange={formik.handleChange}
            value={formik.values.email}
            onBlur={formik.handleBlur}
            autoComplete="email"
            placeholder="Enter your email address"
            isInvalid={
              !!(formik.touched.email && formik.errors.email)
            }
          />

          <Form.Control.Feedback type="invalid">
            {formik.errors.email}
          </Form.Control.Feedback>
        </Form.Group>

        {/* Password */}
        <Form.Group className="mb-3">
          <Form.Label>Password</Form.Label>

          <Form.Control
            name="password"
            type="password"
            onChange={formik.handleChange}
            value={formik.values.password}
            onBlur={formik.handleBlur}
            autoComplete="new-password"
            placeholder="Enter your password"
            isInvalid={
              !!(formik.touched.password && formik.errors.password)
            }
          />

          <Form.Control.Feedback type="invalid">
            {formik.errors.password}
          </Form.Control.Feedback>
        </Form.Group>

        {/* Terms */}
        <Form.Group className="mb-4">
          <Form.Check
            name="acceptanceMessage"
            type="checkbox"
            checked={formik.values.acceptanceMessage}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            label={
              <>
                I agree to the{" "}
                <a
                  href="/terms"
                  className="text-info text-decoration-none"
                >
                  Terms and Conditions
                </a>{" "}
                and{" "}
                <a
                  href="/privacy"
                  className="text-info text-decoration-none"
                >
                  Privacy Policy
                </a>
                .
              </>
            }
          />

          {formik.touched.acceptanceMessage &&
            formik.errors.acceptanceMessage && (
              <div className="text-danger small mt-1">
                {formik.errors.acceptanceMessage}
              </div>
            )}
        </Form.Group>

        {/* Register */}
        <div className="d-grid">
          <Button size="lg" type="submit">
            Register
          </Button>
        </div>

        {/* Divider */}
        <div className="d-flex align-items-center my-4">
          <hr className="flex-grow-1 border-secondary" />

          <span className="mx-3 text-secondary">
            or continue with
          </span>

          <hr className="flex-grow-1 border-secondary" />
        </div>

        {/* Google */}
        <div className="d-grid gap-2">
          <a
            href="https://www.google.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-light d-flex align-items-center justify-content-center py-2"
          >
            <Image
              src={google}
              alt="Google"
              width={20}
              height={20}
              className="me-2"
            />

            Continue with Google
          </a>

          {/* Facebook */}
          <a
            href="https://www.facebook.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline-light d-flex align-items-center justify-content-center py-2"
          >
            <Image
              src={facebook}
              alt="Facebook"
              width={20}
              height={20}
              className="me-2"
            />

            Continue with Facebook
          </a>
        </div>

        {/* Login */}
        <div className="text-center mt-4">
          <span className="text-secondary">
            Already have an account?{" "}
          </span>

          <button
            type="button"
            className="btn btn-link p-0 text-info text-decoration-none"
            onClick={() => router.push("/login")}
          >
            Login
          </button>
        </div>

        {/* Home */}
        <div className="text-center mt-2">
          <button
            type="button"
            className="btn btn-link text-light text-decoration-none"
            onClick={() => router.push("/")}
          >
            ← Back to Home
          </button>
        </div>
      </Form>
    </div>
  );
}