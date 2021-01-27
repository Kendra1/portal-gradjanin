export const extractFieldErrors = (errorMessages, key) =>
  errorMessages.filter((message) => message.startsWith(key));

export const extractNonFieldErrors = (errorMessages, keys) =>
  errorMessages.filter((message) => !keys.find((key) => message.startsWith(key)));
