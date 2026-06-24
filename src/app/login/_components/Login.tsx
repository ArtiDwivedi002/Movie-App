"use client";
import { Button, Form } from "react-bootstrap";
import Image from "next/image";
import {  useFormik } from "formik";
import { useRouter } from "next/navigation";
import * as Yup from "yup";
import { useEffect } from "react";
import { useAuthStore } from "@/hooks/authHook";
import { toast } from "react-toastify";
export default function Login() {
  const routes = useRouter();
  const { error, isAuthenticated, login,currentUser } = useAuthStore();
  const formik = useFormik({
  initialValues: {
    email: "",
    password: "",
  },
  validationSchema: Yup.object({
    email: Yup.string().email().required("Required"),
    password: Yup.string().min(6).required("Required"),
  }),
  onSubmit: (values) => {
    const success:boolean | any = login(values);

    if (success) {
      toast.success("Login Successfully!!");
      routes.replace("/home");
    } else {
      toast.error("Invalid credentials");
    }
  },
});
// useEffect(() => {
//   if (isAuthenticated && currentUser) {
//     toast.success("Login Successfully!!");
//     routes.replace("/chat");
//   }

//   if (error) {
//     toast.error(error);
//   }
// }, [isAuthenticated, error]);
  return (
  <div className=" vh-100 vw-100 d-flex justify-content-center align-items-center bg-blue text-white">

    <Form 
      onSubmit={formik.handleSubmit} 
      className="p-5 border-3 rounded-4 shadow-lg text-primary fw-bold bg-black text-white" 
    >
      <h3 className="mb-4 text-center text-white display-6 fw-bold">
        Login</h3>
      <Form.Group className="mb-3">
        <Form.Label>Email Address</Form.Label>
        <Form.Control
          name="email"
          type="email"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.email}
          placeholder="Enter your email"
          isInvalid={!!(formik.touched.email && formik.errors.email)}
        />
        <Form.Control.Feedback type="invalid">{formik.errors.email}</Form.Control.Feedback>
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Password</Form.Label>
        <Form.Control
          name="password" 
          type="password"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.password}
          isInvalid={!!(formik.touched.password && formik.errors.password)}
        />
        <Form.Control.Feedback type="invalid">{formik.errors.password}</Form.Control.Feedback>
      </Form.Group>
      <div className="d-grid">
        <Button size="lg" type="submit">
          Login
        </Button>
      </div>
    </Form>
  </div> 
);
}
