export const validForm = (e, setValue, setErrorMessage) => {
  const name = e.target.name;
  const value = e.target.value.trim().replace(/\s{2,}/g, " ");
  switch (name) {
    case "email":
      {
        const isValidate = !value || !/\S+@\S+\.\S+/.test(value);
        setValue(value);
        setErrorMessage(
          isValidate ? "Некорректный адрес электронной почты" : ""
        );
      }
      break;
    case "password":
      {
        const isValidate = !value || value.length < 6;
        setValue(value);
        setErrorMessage(
          isValidate ? "Пароль должен содержать более 5 символов" : ""
        );
      }
      break;
    case "name":
      {
        const isValidate = !value || value.length < 1;
        setValue(value);
        setErrorMessage(isValidate ? "Введите ваше имя" : "");
      }
      break;
    default:
      console.log("прочее");
  }
};
