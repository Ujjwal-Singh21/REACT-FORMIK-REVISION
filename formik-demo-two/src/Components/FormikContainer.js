import React from 'react'
import { Formik, Form, yupToFormErrors } from 'formik'
import * as Yup from 'yup'
import FormikControl from './FormikControl'

function FormikContainer () {

  const dropDownOptions = [
    { key: 'Select an option', value: '' },
    { key: 'option 1', value: 'option1' },
    { key: 'option 2', value: 'option2' },
    { key: 'option 3', value: 'option3' }
  ]

  const radioOptions = [
    { key: 'Option 1', value: 'rOption1' },
    { key: 'Option 2', value: 'rOption2' },
    { key: 'Option 3', value: 'rOption3' }
  ]

  const checkboxOptions = [
    { key: 'Option 1', value: 'cOption1' },
    { key: 'Option 2', value: 'cOption2' },
    { key: 'Option 3', value: 'cOption3' }
  ]

  const initialValues = {
    email: '',
    description: '',
    selectOption: '',
    radioOption: '',
    checkboxOption: []
  }

  const validationSchema = Yup.object({
    email: Yup.string().required('Required'),
    description: Yup.string().required('Required'),
    selectOption: Yup.string().required('Required'),
    radioOption: Yup.string().required('Required'),
    checkboxOption: Yup.array().required('Required')
  })

  const onSubmit = (values) => {
    console.log('Form values', values)
  }

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {props => {
        return (
          <Form>
            <FormikControl
              control='input'
              type='email'
              name='email'
              label='Email'
            />

            <FormikControl
              control='textarea'
              name='description'
              label='Description'
            />

            <FormikControl
              control='select'
              name='selectOption'
              label='Select a Topic'
              options={dropDownOptions}
            />

            <FormikControl
              control='radio'
              name='radioOption'
              label='Radio Topic'
              options={radioOptions}
            />

            <FormikControl
              control='checkbox'
              name='checkboxOption'
              label='CheckBox Topics'
              options={checkboxOptions}
            />

            <button type='submit'> Submit </button>
          </Form>
        )
      }}
    </Formik>
  )
}

export default FormikContainer
