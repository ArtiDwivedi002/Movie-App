import { useAuthStore } from "@/hooks/authHook";
import { useFormik } from "formik";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import * as Yup from "yup";

export  const UseLogin =()=>{
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
    return {
        formik,
        }
}