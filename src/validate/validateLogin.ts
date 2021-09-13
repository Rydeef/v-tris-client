interface valuesType {
  username: string;
}
interface errorType {
  username?: string;
}

export const validate = (values: valuesType) => {
  const errors: errorType = {};

  // EMAIL
  if (!values.username) errors.username = "Required";
  else if (values.username.length > 15)
    errors.username = "Must have a maximum of 15 characters";
  else if (!values.username.match(/^[A-Z]/))
    errors.username = "First letter must be in upper case";

  return errors;
};
