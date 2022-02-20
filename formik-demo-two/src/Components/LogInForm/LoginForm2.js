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

function LoginFormTwo (props) {
  const { label, name, ...rest } = props
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {
            (formikProps) => {
                return <Form>

                    <FormikControl
                     control='chakrainput'
                     type='email'
                     name='email'
                     label='E-mail'
                    />

                   <FormikControl
                     control='chakrainput'
                     type='password'
                     name='password'
                     label='Password'
                    />   <br />

                    <Button
                     type='submit'
                     colorScheme='red'
                     disabled={!formikProps.isValid}
                     >
                     Submit </Button>

                </Form>
            }
        }
    </Formik>
  )
}

export default LoginFormTwo
