import React from 'react'
import { Formik, Form } from 'formik'
import * as Yup from 'yup'
import FormikControl from '../FormikControl'
import { Button } from '@chakra-ui/react'

const initialValues = {
  email: '',
  password: ''
}

const validationSchema = Yup.object({
  email: Yup.string()
    .email('Invalid e-mail format')
    .required('Required'),
  password: Yup.string().required('Required')
})

const onSubmit = (values, onSubmitProps) => {
  console.log('Login Form data', values)
  alert(` Login Form Submitted successfully`)
  onSubmitProps.resetForm()
}

function LoginForm () {
  
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
     {
      (formikProps) => {
        return (
          <Form>
            <FormikControl
              control='input'
              type='email'
              name='email'
              label='E-mail'
            />

            <FormikControl
              control='input'
              type='password'
              name='password'
              label='Password'
            />

            <Button
             type='submit'
             disabled={!formikProps.isValid}
             colorScheme='blue'
            >
              Submit
            </Button>

          </Form>
        )
      }
    }
    </Formik>
  )
}

export default LoginForm
