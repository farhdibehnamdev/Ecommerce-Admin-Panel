import { Form, FormBody, LogoBody } from "./loginFormStyle";
import { Col, Row } from "antd";
import logoImg from "../../assets/images/logo.png";
import { Link } from "react-router-dom";

const PasswordForm = function () {
  return (
    <>
      <Row>
        <Col xs={6} xl={6}>
          <Form>
            <LogoBody>
              <img src={logoImg} alt="" />
              <p>فروشگاه اینترنتی ویرا</p>
            </LogoBody>
            <FormBody>
              <label id="label" htmlFor="">
                رمز عبور خود را وارد کنید
              </label>
              <span>رمز عبور حساب کاربری خود را وارد کنید</span>
              <div>
                <input />
              </div>
              <p>ورود با رمز یکبار مصرف </p>
              <p>فراموشی رمز عبور</p>
              <button className="btn">ورود به سایت</button>
            </FormBody>
          </Form>
        </Col>
      </Row>
    </>
  );
};

export default PasswordForm;
