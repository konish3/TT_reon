export const getFetch = async (url, options = {}) => {
  try {
    const response = await fetch(url, options);
    console.log(response);
    return await response.json();
  } catch (error) {
    console.error(error);
  }
};
