import React from 'react'
import { Formik, Form } from 'formik'
import * as Yup from 'yup'
import FormikControl from '../FormikControl'
import { Button } from '@chakra-ui/react'

const initialValues = {
  email: '',
  password: '',
  confirmPassword: '',
  modeOfContact: '',
  phone: ''
}

const options = [
  { key: 'Email', value: 'emailModeOfContact' },
  { key: 'Telephone', value: 'telephoneModeOfContact' }
]

const validationSchema = Yup.object({
  email: Yup.string()
    .email('Invalid email format')
    .required('Required'),

  password: Yup.string().required('Required'),

  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password'), ''], 'Passwords must match')
    .required('Required'),

  modeOfContact: Yup.string().required('Required'),

  phone: Yup.string().when('modeOfContact', {
    is: 'telephoneModeOfContact',
    then: Yup.string().required('Required')
  })
})

const onSubmit = (values, onSubmitProps) => {
  console.log('Registration Form data', values)
  alert(`Registration Form Submitted Successfully`)
  onSubmitProps.resetForm()
}

function RegistrationForm () {
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
              label='Email'
            />

            <FormikControl
              control='input'
              type='password'
              name='password'
              label='Password'
            />

            <FormikControl
              control='input'
              type='password'
              name='confirmPassword'
              label='Confirm Password'
            />

            <FormikControl
              control='radio'
              name='modeOfContact'
              label='Mode of contact'
              options={options}
            />

            <FormikControl
              control='input'
              type='text'
              name='phone'
              label='Phone Number'
            />

            <Button
             type='submit'
             disabled={!formikProps.isValid}
             colorScheme='pink'
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

export default RegistrationForm
