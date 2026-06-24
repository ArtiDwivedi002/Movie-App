"use client";

import { useAuthStore } from "@/hooks/authHook";
import { useFormik } from "formik";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { toast } from "react-toastify";
import * as Yup from "yup";
export const UseRegister = () => {
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
        fullName: "",
        email: "",
        password: "",
        acceptanceMessage: false,
        enableReinitialize: true,
      },
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
  return {
    formik,
    router, 
  };
};
