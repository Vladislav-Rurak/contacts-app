import * as yup from 'yup';

export const CONTACT_VALIDATION_SCHEMA = yup.object({
  name: yup
    .string()
    .min(2)
    .max(40)
    .matches(
      /^(?=.*[a-z].*)[\w \d]*$/,
      'Name must contain at least 1 small letter'
    )
    .required(),
  telNumber: yup
    .string()
    .min(13)
    .max(13)
    .matches(
      /^\+380(\d){9}$/,
      'Tel number must mathes to pattern +380XXXXXXXXX'
    )
    .required(),
  birthday: yup
    .date()
    .min('1900-01-01')
    .max(new Date()),
});
