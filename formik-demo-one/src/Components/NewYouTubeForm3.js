import React from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'

const initialValues = {
  name: '',
  email: '',
  channel: '',
  comments: '',
  address: ''
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

function NewYoutubeFormThree () {
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      <Form>
        <div className='form-control'>
          <label htmlFor='name'> Name </label>
          <Field type='text' id='name' name='name' />
          <ErrorMessage name='name' />
        </div>

        <div className='form-control'>
          <label htmlFor='email'> E-mail </label>
          <Field type='email' id='email' name='email' />
          <ErrorMessage name='email' />
        </div>

        <div className='form-control'>
          <label htmlFor='channel'> Channel </label>
          <Field
            type='text'
            id='channel'
            name='channel'
            placeholder='Enter channel name'
          />
          <ErrorMessage name='channel' />
        </div>

        <div className='form-control'>
          <label htmlFor='comments'> Comments </label>
          <Field as='textarea' type='text' id='comments' name='comments' />
        </div>

        <div className='form-control'>
          <label htmlFor='address'> Address </label>
          <Field type='text' name='address'>
              {
                  (props) => {
                      const { field, form, meta } = props
                      console.log(props)
                      return <div>
                          <input type='text' id='address' {...field} />
                          { meta.touched && meta.error ? <div> {meta.error} </div> : null}
                      </div>
                  }
              }
          </Field>
        </div>

        <button type='submit'> Submit </button>
      </Form>
    </Formik>
  )
}

export default NewYoutubeFormThree
