import React from 'react'
// import { useFormik } from 'formik'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'

const initialValues = {
  name: '',
  email: '',
  channel: ''
}

const onSubmit = (values) => {
  console.log('Form data', values)
  alert(`Name:${values.name}, Email:${values.email}, Channel:${values.channel}`)
}

// new validation concept using Yup library
const validationSchema = Yup.object({
  name: Yup.string().required('Name is Required'),
  email: Yup.string()
    .email('Invalid email format')
    .required('Email is required'),
  channel: Yup.string().required('Channel name is required')
})

function NewYoutubeFormTwo () {
  //   const formik = useFormik({
  //     initialValues,
  //     onSubmit,
  //     validationSchema
  //   })

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      {/* <form onSubmit={formik.handleSubmit}> */}
      <Form>
        <div className='form-control'>
          <label htmlFor='name'> Name </label>
          {/* <input */}
          <Field
            type='text'
            id='name'
            name='name'
            // {...formik.getFieldProps('name')}
          />
          {/* {formik.touched.name && formik.errors.name ? (
            <div className='error'> {formik.errors.name} </div>
          ) : null} */}
          <ErrorMessage name='name' />
        </div>

        <div className='form-control'>
          <label htmlFor='email'> E-mail </label>
          <Field
            type='email'
            id='email'
            name='email'
          />
          <ErrorMessage name='email' />
        </div>

        <div className='form-control'>
          <label htmlFor='channel'> Channel </label>
          <Field
            type='text'
            id='channel'
            name='channel'
          />
          <ErrorMessage name='channel' />
        </div>

        <button type='submit'> Submit </button>
      </Form>
      {/* </form> */}
    </Formik>
  )
}

export default NewYoutubeFormTwo
