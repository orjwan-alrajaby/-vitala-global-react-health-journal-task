const validateText = (text, type, length) => {
  if (text.length > length) {
    return {
      status: "fail",
      message: `${type} cannot exceed ${length} characters.`,
      type,
    };
  }

  const trimmed_text = text.trim();

  const specialCharactersRegex = /[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]/;
  if (specialCharactersRegex.test(trimmed_text)) {
    return {
      status: "fail",
      message: `${type} contains special characters that are not allowed.`,
      type,
    };
  }
  return {
    status: "success",
    message: `${type} adheres to all rules!`,
    type,
  };
}

export default validateText;