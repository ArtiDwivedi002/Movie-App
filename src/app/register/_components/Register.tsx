"use client";
import { Button, Form} from "react-bootstrap";
import { useEffect } from "react";
import  {facebook,google,movie1} from  '@/assets/index';
import Image from "next/image";
import    *  as Yup from 'yup';
import  {useFormik} from  'formik';
import { useAuthStore } from "@/hooks/authHook";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
export default function RegisterPage() {
  const error = useAuthStore((state) => state.error);
  const isRegistered = useAuthStore((state) => state.isRegistered);
  const registerUser = useAuthStore((state) => state.registerUser);
  const clearError = useAuthStore((state) => state.clearError);
  const resetRegister = useAuthStore((state) => state.resetRegister);
  const  router = useRouter();


useEffect(() => {
  let timer: NodeJS.Timeout;

  if (isRegistered) {
    toast.success("Registration Successful!");

    timer = setTimeout(() => {
      resetRegister(); // reset state
      router.push("/login");
    }, 2000);
  }

  if (error) {
    toast.error(error);
    clearError();
  }

  return () => {
    if (timer) clearTimeout(timer); // ✅ cleanup
  };
}, [isRegistered, error, router, resetRegister, clearError]);
  
  const formik = useFormik({
      initialValues: {
        fullName  : "",
        email: "",
        password: "",
        acceptanceMessage: false,
      },
        enableReinitialize: true,
      validationSchema: Yup.object({
        fullName: Yup.string().max(10, "Must be 10 characters or less").required("Required"),
        email: Yup.string().email("Invalid email").required("Required"),
        password: Yup.string().min(8, "Min 8 characters").required("Required"),
        acceptanceMessage: Yup.boolean()
          .oneOf([true], "Please confirm first")
          .required("Required"),
      }),
     onSubmit: (values) => {
        registerUser({
          email: values.email,
          fullName: values.fullName,
          password: values.password,
          acceptanceMessage:values.acceptanceMessage
        });
      },
    }); 
  return (
     <div className="  vh-100 vw-100 d-flex justify-content-center align-items-center bg-blue text-white">
   
  <Form
  onSubmit={formik.handleSubmit}
  className="p-4 p-md-5 rounded-4 shadow-lg bg-dark text-white w-100"
  style={{ maxWidth: "500px" }}
>
        <h3 className="text-center">
          Register</h3>
        <Form.Group className="mb-3">
          <Form.Label>Full Name</Form.Label>
          <Form.Control
            name="fullName"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.fullName}
            onBlur={formik.handleBlur}
            autoComplete="none"
            placeholder="Enter  the Full Name"
            isInvalid={!!(formik.touched.fullName && formik.errors.fullName)}
          />
          <Form.Control.Feedback type="invalid">
            {formik.errors.fullName}
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Email Address</Form.Label>
          <Form.Control
            name="email"
            type="email"
            onChange={formik.handleChange}
            value={formik.values.email}
            onBlur={formik.handleBlur}
            autoComplete="none"
            placeholder="Enter the  email  Address"
            isInvalid={!!(formik.touched.email && formik.errors.email)}
          />
          <Form.Control.Feedback type="invalid">
            {formik.errors.email}
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Password</Form.Label>
          <Form.Control
            name="password"
            type="password"
            onChange={formik.handleChange}
            placeholder="Enter the password"
            onBlur={formik.handleBlur}
            value={formik.values.password}
            autoComplete="none"
            isInvalid={!!(formik.touched.password && formik.errors.password)}/>
          <Form.Control.Feedback type="invalid">
            {formik.errors.password}
          </Form.Control.Feedback>
        </Form.Group>
           <Form.Group className="mb-3">
          <Form.Check
            name="acceptanceMessage"
            type="checkbox"
            autoComplete="none"
            checked={formik.values.acceptanceMessage}
            onChange={formik.handleChange}
            label= "I agree to the Terms and Conditions and Privacy Policy."
            isInvalid={!!(formik.touched.acceptanceMessage && formik.errors.acceptanceMessage)}
          />
          <Form.Control.Feedback type="invalid">
            {formik.errors.acceptanceMessage}
          </Form.Control.Feedback>
        </Form.Group>
        <div className="d-flex justify-content-center">
          <Button size="lg" type="submit">
            Register
          </Button>
        </div>
        <div className="d-flex align-items-center my-4">
          <hr className="grow" />
          <span className="mx-2 text-white">or continue with</span>
          <hr className="grow"/>
        </div>
        <div className="d-grid gap-2">
          <Button
            variant="outline-dark"
            className="d-flex align-items-center justify-content-center py-2 text-white  "
            onClick={() => router.push("https://www.google.com/")}
          >
            <img src={google.src} alt="Google" width="20" className="me-2" />
            Continue with Google
          </Button>
          <Button
            variant="primary"
            style={{ borderColor: "#1877F2" }}
            className="d-flex align-items-center justify-content-center py-2 text-white bg-black"
            onClick={() => router.push("https://www.facebook.com/")}
          >
            <img
              src={facebook.src}
              alt="Facebook"
              width="20"
              className="me-2"
            />
            Continue with Facebook
          </Button>
        </div>
      </Form>
    </div>
  );
}
