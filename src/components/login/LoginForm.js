import { Form, FormBody, LogoBody } from "./loginFormStyle";
import { Col, Row } from "antd";
import logoImg from "../../assets/images/logo.png";

const LoginForm = function () {
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
                ورود | ثبت نام
              </label>
              <span>شماره موبایل خود را وارد کنید</span>
              <div>
                <input />
                <button>X</button>
              </div>
              <button className="btn">ورود به سایت</button>
            </FormBody>
          </Form>
        </Col>
      </Row>
    </>
  );
};

export default LoginForm;
