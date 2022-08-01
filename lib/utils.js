export const range = (n) => {
  return [...Array(n).keys()]
}

export const pluralize = (n, single, few, many) => {
  if (n % 10 === 1 && n % 100 !== 11) {
    return single
  } else if (n % 10 >= 2 && n % 10 <= 4 && (n % 100 < 10 || n % 100 >= 20)) {
    return few
  } else {
    return many
  }
}

export const validateForm = (form) => {
  if (!form.checkValidity()) {
    return false
  }

  return Array.from(form).every((field) => field.checkValidity())
}