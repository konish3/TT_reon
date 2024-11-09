import React, { useState } from "react";
import {
  Card,
  Typography,
  Box,
  FormControl,
  FormLabel,
  TextField,
  Button,
  Link,
  FormControlLabel,
  Checkbox,
  Divider,
} from "@mui/material";
import { GoogleIcon } from "../../../components/_shared/icons/GoogleIcon/GoogleIcon";
import { validForm } from "../../../features/isValidForm/isValidForm";

export const LoginView = ({ handleSubmitForm, errorSignIn }) => {
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
        Вход
      </Typography>
      <Box
        component="form"
        onSubmit={(e) => handleSubmitForm(emailValue, passwordValue, e)}
        sx={{
          display: "flex",
          flexDirection: "column",
          width: "100%",
          gap: 2,
          borderRadius: "20px",
        }}
      >
        <FormControl sx={{ borderRadius: "20px" }}>
          <FormLabel htmlFor="email">Email</FormLabel>
          <TextField
            error={!!emailErrorMessage.length}
            helperText={emailErrorMessage}
            value={emailValue}
            onChange={(e) => {
              validForm(e, setEmailValue, setEmailErrorMessage);
            }}
            name="email"
            placeholder="your@email.com"
            required
            variant="standard"
            size="Normal"
            color={emailErrorMessage.length ? "error" : "primary"}
          />
        </FormControl>
        <FormControl>
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <FormLabel htmlFor="password">Пароль</FormLabel>
            <Link
              component="button"
              type="button"
              // onClick={handleClickOpen}
              variant="body2"
              sx={{ alignSelf: "baseline" }}
            >
              Забыли пароль?
            </Link>
          </Box>
          <TextField
            error={!!passwordErrorMessage.length}
            helperText={passwordErrorMessage}
            value={passwordValue}
            onChange={(e) => {
              validForm(e, setPasswordValue, setPasswordErrorMessage);
            }}
            name="password"
            placeholder="••••••"
            required
            variant="standard"
            size="Normal"
            color={passwordErrorMessage.length ? "error" : "primary"}
          />
        </FormControl>
        <FormControlLabel
          control={<Checkbox value="remember" color="primary" />}
          label="Запомнить меня"
        />
        {/* <ForgotPassword open={open} handleClose={handleClose} /> */}
        <Button
          type="submit"
          fullWidth
          variant="contained"
          disabled={!!emailErrorMessage.length || !!passwordErrorMessage.length}
        >
          Войти
        </Button>

        {errorSignIn && (
          <Typography sx={{ color: "red", textAlign: "center" }}>
            Такого пользователя не существует
          </Typography>
        )}
        <Typography sx={{ textAlign: "center" }}>
          Нет аккаунта?{" "}
          <span>
            <Link
              href="/registration"
              variant="body2"
              sx={{ alignSelf: "center" }}
            >
              Зарегистрироваться
            </Link>
          </span>
        </Typography>
      </Box>
      <Divider>ИЛИ</Divider>
      <Box sx={{ display: "flex", flexDirection: "column", marginTop: "15px" }}>
        <Button
          fullWidth
          variant="outlined"
          onClick={() => alert("Sign in with Google")}
          startIcon={<GoogleIcon />}
        >
          Войти через Google
        </Button>
      </Box>
    </Card>
  );
};
