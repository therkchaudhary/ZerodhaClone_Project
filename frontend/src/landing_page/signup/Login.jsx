import React from "react";
import Hero from "./Hero";
import InvestmentOptions from "./InvestmentOptions";
import Steps from "./Steps";
import Benefits from "./Benefits";
import AccountTypes from "./AccountTypes";
import OpenAcc from "./OpenAcc";
import LoginForm from "./LoginForm";

const Login = () => {
  return (
    <>
      <Hero>
        <LoginForm />
      </Hero>
      <InvestmentOptions />
      <Steps />
      <Benefits />
      <AccountTypes />
      <OpenAcc />
    </>
  );
};

export default Login;
