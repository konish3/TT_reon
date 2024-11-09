export const setLocalStorage = (newEmail, newPassword) => {
  const storedData = localStorage.getItem("dataUser");

  if (!storedData) {
    if (newEmail && newPassword) {
      localStorage.setItem(
        "dataUser",
        JSON.stringify({
          email: newEmail,
          password: newPassword,
          createAt: new Date().getTime(),
        })
      );
      return { newEmail, newPassword };
    }
    return;
  }

  if (storedData) {
    const data = JSON.parse(storedData);
    const { email, password, createAt } = data;
    if (
      data.email &&
      data.password &&
      new Date().getTime() - createAt > 1000 * 60 * 60
    ) {
      localStorage.removeItem("dataUser");
    } else {
      return { email, password };
    }
  }
};
