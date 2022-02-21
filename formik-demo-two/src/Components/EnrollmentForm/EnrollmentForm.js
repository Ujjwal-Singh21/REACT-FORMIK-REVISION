import React from 'react'
import { Formik, Form } from 'formik'
import * as Yup from 'yup'
import FormikControl from '../FormikControl'
import { Button } from '@chakra-ui/react'

const initialValues = {
  email: '',
  bio: '',
  course: '',
  skills: [],
  courseDate: null
}

const dropDownOptions = [
  { key: '-- Select a course --', value: '' },
  { key: 'React', value: 'react' },
  { key: 'Angular', value: 'angular' },
  { key: 'Vue', value: 'vue' }
]

const checkboxOptions = [
  { key: 'HTML', value: 'html' },
  { key: 'CSS', value: 'css' },
  { key: 'JavaScript', value: 'javascript' }
]

const validationSchema = Yup.object({
  email: Yup.string()
    .email('Invalid email format')
    .required('Required'),

  bio: Yup.string().required('Required'),
  course: Yup.string().required('Required'),
  skills: Yup.array().min(1, 'Atleast One skill Required'),

  courseDate: Yup.date()
    .required('Required')
    .nullable()
})

const onSubmit = (values, onSubmitProps) => {
  console.log('Course Enrollment Form data', values)
  alert(`Enrollment form submitted successfully`)
  onSubmitProps.resetForm()
}

function EnrollmentForm () {
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

            <FormikControl control='textarea' name='bio' label='Bio' />

            <FormikControl
              control='select'
              name='course'
              label='Course'
              options={dropDownOptions}
            />

            <FormikControl
              control='checkbox'
              name='skills'
              label='Your SkillSet'
              options={checkboxOptions}
            />

            <FormikControl
              control='date'
              type='email'
              name='courseDate'
              label='Course Date'
            />

            <Button
             type='submit'
             disabled={!formikProps.isValid}
             colorScheme='yellow'
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

export default EnrollmentForm
