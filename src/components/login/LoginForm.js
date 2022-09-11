import { Form, LogoBody } from "./loginFormStyle";
import logoImg from "../../assets/images/logo.png";
import { useForm } from "react-hook-form";
// import "./loginForm.css";

const LoginForm = function () {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <>
      <Form>
        <LogoBody>
          <img src={logoImg} alt="" />
          <span>فروشگاه اینترنتی ویرا</span>
        </LogoBody>
        <input defaultValue="شماره موبایل" {...register("example")} />

        {errors.exampleRequired && <span>شماره موبایل معتبر وارد کنید</span>}
        <input type="submit" />
      </Form>
    </>
  );
};

export default LoginForm;
