import { useState } from "react";
import {
  Card,
  Typography,
  Box,
  FormControl,
  FormLabel,
  TextField,
  Button,
  Link,
} from "@mui/material";
import { validForm } from "../../../features/isValidForm/isValidForm";

export const RegistrationView = ({ handleSubmit, isUserExists }) => {
  const [nameValue, setNameValue] = useState("");
  const [nameErrorMessage, setNameErrorMessage] = useState("");
  const [emailValue, setEmailValue] = useState("");
  const [emailErrorMessage, setEmailErrorMessage] = useState("");
  const [passwordValue, setPasswordValue] = useState("");
  const [passwordErrorMessage, setPasswordErrorMessage] = useState("");

  return (
    <Card
      variant="outlined"
      sx={{
        borderRadius: "30px",
        padding: "32px",
        width: "100%",
        maxWidth: "450px",
        boxShadow: "4px 12px 25px 9px rgba(34, 60, 80, 0.2)",
      }}
    >
      <Typography
        component="h1"
        variant="h4"
        sx={{
          width: "100%",
          fontSize: "clamp(2rem, 10vw, 2.15rem)",
          marginBottom: "20px",
        }}
      >
        Регистрация
      </Typography>
      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{ display: "flex", flexDirection: "column", gap: 2 }}
      >
        <FormControl>
          <FormLabel htmlFor="name" sx={{ marginBottom: "5px" }}>
            Ваше имя
          </FormLabel>
          <TextField
            name="name"
            required
            placeholder="Имя"
            error={!!nameErrorMessage.length}
            helperText={nameErrorMessage}
            color={!!nameErrorMessage.length ? "error" : "primary"}
            value={nameValue}
            onChange={(e) => {
              validForm(e, setNameValue, setNameErrorMessage);
            }}
          />
        </FormControl>
        <FormControl>
          <FormLabel htmlFor="email" sx={{ marginBottom: "5px" }}>
            Email
          </FormLabel>
          <TextField
            required
            placeholder="your@email.com"
            name="email"
            variant="outlined"
            error={!!emailErrorMessage.length}
            helperText={emailErrorMessage}
            color={!!emailErrorMessage.length ? "error" : "primary"}
            value={emailValue}
            onChange={(e) => {
              validForm(e, setEmailValue, setEmailErrorMessage);
            }}
          />
        </FormControl>
        <FormControl>
          <FormLabel htmlFor="password" sx={{ marginBottom: "5px" }}>
            Пароль
          </FormLabel>
          <TextField
            required
            name="password"
            placeholder="••••••"
            variant="outlined"
            error={!!passwordErrorMessage.length}
            helperText={passwordErrorMessage}
            color={!!passwordErrorMessage.length ? "error" : "primary"}
            value={passwordValue}
            onChange={(e) => {
              validForm(e, setPasswordValue, setPasswordErrorMessage);
            }}
          />
        </FormControl>

        <Button
          type="submit"
          fullWidth
          variant="contained"
          disabled={
            !!nameErrorMessage.length ||
            !!emailErrorMessage.length ||
            !!passwordErrorMessage.length
          }
        >
          Зарегистрироваться
        </Button>
        {isUserExists && (
          <Typography sx={{ color: "red", textAlign: "center" }}>
            Пользователь уже существует
          </Typography>
        )}
        <Typography sx={{ textAlign: "center" }}>
          Уже есть аккаунт?{" "}
          <span>
            <Link href="/" variant="body2" sx={{ alignSelf: "center" }}>
              Войти
            </Link>
          </span>
        </Typography>
      </Box>
    </Card>
  );
};
