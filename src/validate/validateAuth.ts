interface valuesType {
  username?: string;
  email?: string;
  password?: string;
  confirmPassword?: string;
}
interface errorType {
  username?: string;
  email?: string;
  password?: string;
  confirmPassword?: string;
}

export const validateLogin = (values: valuesType) => {
  const errors: errorType = {};

  if (!values.username) errors.username = "Required";
  else if (values.username.length > 15)
    errors.username = "Must have a maximum of 15 characters";
  else if (!values.username.match(/^[A-Z]/))
    errors.username = "First letter must be in upper case";

  if (!values.password) errors.password = "Required";
  else if (values.password.length < 8)
    errors.password = "Password must be at least 8 characters";
  else if (values.password.length > 16)
    errors.password = "Password must be maximum 16 characters";

  return errors;
};

export const validateRegister = (values: valuesType) => {
  const errors: errorType = {};

  if (!values.username) errors.username = "Required";
  else if (values.username.length > 15)
    errors.username = "Must have a maximum of 15 characters";
  else if (!values.username.match(/^[A-Z]/))
    errors.username = "First letter must be in upper case";

  if (!values.email) errors.email = "Required";
  else if (!/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(values.email.toLowerCase()))
    errors.email = "Invalid email";

  if (!values.password) errors.password = "Required";
  else if (values.password.length < 8)
    errors.password = "Password must be at least 8 characters";
  else if (values.password.length > 16)
    errors.password = "Password must be maximum 16 characters";

  if (!values.confirmPassword) errors.confirmPassword = "Required";
  else if (values.password !== values.confirmPassword)
    errors.password = "Passwords must match";

  return errors;
};

export const validateEmail = (values: valuesType) => {
  const errors: errorType = {};

  if (!values.email) errors.email = "Required";
  else if (!/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(values.email.toLowerCase()))
    errors.email = "Invalid email";

  return errors;
};
export const validatePasswords = (values: valuesType) => {
  const errors: errorType = {};

  if (!values.password) errors.password = "Required";
  else if (values.password.length < 8)
    errors.password = "Password must be at least 8 characters";
  else if (values.password.length > 16)
    errors.password = "Password must be maximum 16 characters";

  if (!values.confirmPassword) errors.confirmPassword = "Required";
  else if (values.password !== values.confirmPassword)
    errors.password = "Passwords must match";

  return errors;
};
