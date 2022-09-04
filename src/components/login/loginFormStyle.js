import styled from "styled-components";

export const FormBody = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 20px 35px;

  #label {
    text-align: right;
    font-weight: 700;
  }

  div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: row;
    border: 1px solid #cecece;
    height: 48px;
    width: 100%;
    margin: 1rem auto;
    border-radius: 8px;
  }

  .btn {
    background-color: #ecf1fb;
    height: 48px;
    border: 1px solid #cecece;
    width: 100%;
    margin: 2rem auto;
    border-radius: 8px;
    color: #33475b;
    font-size: 14px;
  }

  input {
    border: none;
    padding-right: 1rem;
  }

  button {
    border: none;
    margin-left: 1rem;
    border-radius: 50%;
    width: 20px;
    height: 20px;
    background-color: #717171;
    color: #fff;
    font-size: 10px;
    font-weight: 700;
  }

  p {
    text-align: right;
  }
`;

export const LogoBody = styled.div`
  border-bottom: 1px solid #ccc;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  background-color: #f8f8f8;
  border-radius: 8px 8px 0 0;

  img {
    width: 80px;
    height: auto;
    margin: 1rem;
  }

  p {
    margin: 1rem;
  }
`;

export const Form = styled.form`
  margin: 10rem auto;
  max-width: 700px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  position: relative;
  border-radius: 8px;
  border: 1px solid #cecece;
`;
