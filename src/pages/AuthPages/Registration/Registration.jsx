import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { RegistrationView } from "./Registration.view";
import { getFetch } from "../../../api/getFetch";
import { UrlConstans } from "../../../constans/urlConstants/urlConstans";
import { AuthRoutes } from "../../../constans/routesConstants/routesContants";

export const Registration = () => {
  const [isUserExists, setIsUserExists] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const users = await getFetch(UrlConstans.USERS);
    const foundUser = users.find((user) => user.email === data.get("email"));

    if (foundUser) {
      setIsUserExists(true);
      return;
    }
    await getFetch(UrlConstans.USERS, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: 1,
        name: data.get("name"),
        email: data.get("email"),
        password: data.get("password"),
      }),
    });
    navigate(`${AuthRoutes.LOGIN}`, { replace: true });
  };

  return (
    <RegistrationView isUserExists={isUserExists} handleSubmit={handleSubmit} />
  );
};
