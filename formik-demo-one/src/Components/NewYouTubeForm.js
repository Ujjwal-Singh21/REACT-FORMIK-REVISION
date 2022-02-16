import React from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'

const initialValues = {
  name: '',
  email: '',
  channel: ''
}

const onSubmit = values => {
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

function NewYoutubeForm () {
  const formik = useFormik({
    initialValues: initialValues,
    onSubmit: onSubmit,
    validationSchema: validationSchema
  })

  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <div className='form-control'>
          <label htmlFor='name'> Name </label>
          <input
            type='text'
            id='name'
            name='name'
            // onChange={formik.handleChange}
            // onBlur={formik.handleBlur}
            // value={formik.values.name}
            {...formik.getFieldProps('name')}
          />
          {formik.touched.name && formik.errors.name ? (
            <div className='error'> {formik.errors.name} </div>
          ) : null}
        </div>

        <div className='form-control'>
          <label htmlFor='email'> E-mail </label>
          <input
            type='email'
            id='email'
            name='email'
            // onChange={formik.handleChange}
            // onBlur={formik.handleBlur}
            // value={formik.values.email}
            {...formik.getFieldProps('email')}
          />
          {formik.touched.email && formik.errors.email ? (
            <div className='error'> {formik.errors.email} </div>
          ) : null}
        </div>

        <div className='form-control'>
          <label htmlFor='channel'> Channel </label>
          <input
            type='text'
            id='channel'
            name='channel'
            // onChange={formik.handleChange}
            // onBlur={formik.handleBlur}
            // value={formik.values.channel}
            {...formik.getFieldProps('channel')}
          />
          {formik.touched.channel && formik.errors.channel ? (
            <div className='error'> {formik.errors.channel} </div>
          ) : null}
        </div>

        <button type='submit'> Submit </button>
      </form>
    </div>
  )
}

export default NewYoutubeForm
