export const getInvalidTypeError = ({ expected, path, received = "undefined", message = "Required" }) => ({
    code: "invalid_type",
    expected,
    received,
    path,
    message,
})