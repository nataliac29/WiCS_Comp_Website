/* eslint-disable no-unused-vars */
import * as yup from 'yup'
import {
  EMAIL_REQUIRED,
  EMAIL_VALID,
  PASSWORD_REQUIRED,
  PASSWORD_LENGTH,
  FIRST_NAME_REQUIRED,
  LAST_NAME_REQUIRED,
  GENERIC_REQUIRED,
  YEAR_VALID,
} from './errorMessages'

const email = yup
  .string()
  .trim()
  .required(EMAIL_REQUIRED)
  .email(EMAIL_VALID)

const password = yup
  .string()
  .required(PASSWORD_REQUIRED)

const firstName = yup
  .string()
  .trim()
  .required(FIRST_NAME_REQUIRED)

const lastName = yup
  .string()
  .trim()
  .required(LAST_NAME_REQUIRED)

const nulledString = yup
  .string()
  .transform(v => (v === '' ? null : v))

const year = yup
  .number()
  .typeError('Valid year is required')
  .min(2021)
  .lessThan(10000)
  .required(GENERIC_REQUIRED)

export const LoginYupSchema = yup.object().shape({
  email,
  password: yup.string().required(PASSWORD_REQUIRED),
})
export const RegisterYupSchema = yup.object().shape({
  email,
  password,
  firstName,
  lastName,
  year,
})
