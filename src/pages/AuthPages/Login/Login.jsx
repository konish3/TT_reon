import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { LoginView } from "./Login.view";
import { getFetch } from "../../../api/getFetch";
import { setLocalStorage } from "../../../features/setLocalStorage/setLocalStorage";
import { UrlConstans } from "../../../constans/urlConstants/urlConstans";
import { ExchangeRoutes } from "../../../constans/routesConstants/routesContants";

export const Login = () => {
  const [errorSignIn, setErrorSignIn] = useState(false);
  const navigate = useNavigate();

  const navigateToFeed = () => {
    navigate(`/${ExchangeRoutes.EXCHANGE}/${ExchangeRoutes.FEED}`, {
      replace: true,
    });
  };

  const handleSubmitForm = async (emailValue, passwordValue, e) => {
    e.preventDefault();
    const users = await getFetch(UrlConstans.USERS);

    const foundUser = users.find(
      (user) => user.email === emailValue && user.password === passwordValue
    );
    if (foundUser) {
      setLocalStorage(emailValue, passwordValue);
      navigateToFeed();
    }
    setErrorSignIn(!foundUser);
  };

  useEffect(() => {
    const data = setLocalStorage();
    if (data?.email && data?.password) {
      navigateToFeed();
    }
  }, []);

  return (
    <LoginView errorSignIn={errorSignIn} handleSubmitForm={handleSubmitForm} />
  );
};
