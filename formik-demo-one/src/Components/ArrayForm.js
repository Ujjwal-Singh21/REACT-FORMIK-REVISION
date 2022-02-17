import React from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import TextError from './TextError'

const initialValues = {
  name: '',
  email: '',
  channel: '',
  comments: '',
  address: '',
  social: {
    facebook: '',
    instagram: '',
    twitter: ''
  },
  phoneNumbers: ['','']
}

const onSubmit = values => {
  console.log('Form data', values)
  alert(`Form Submitted SuccessFully`)
}

// new validation concept using Yup library
const validationSchema = Yup.object({
  name: Yup.string().required('Name is Required'),
  email: Yup.string()
    .email('Invalid email format')
    .required('Email is required'),
  channel: Yup.string().required('Channel name is required'),
  comments: Yup.string().required('Enter Comments'),
  address: Yup.string().required('Address field is necessary to be filled')
})

function ArrayForm () {
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
          <ErrorMessage name='name' component={TextError} />
        </div>

        <div className='form-control'>
          <label htmlFor='email'> E-mail </label>
          <Field type='email' id='email' name='email' />
          <ErrorMessage name='email'>
          {
              (errorMsg) => {
                return <div className='error'> {errorMsg} </div>
              } 
            }
          </ErrorMessage>
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
          <ErrorMessage name='comments' />
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
      
       <h2 className='heading'>  Newly added nested objects </h2>
        <div className='form-control'>
          <label htmlFor='facebook'> FaceBook </label>
          <Field type='text' id='facebook' name='social.facebook' />
        </div>

        <div className='form-control'>
          <label htmlFor='instagram'> Instagram </label>
          <Field type='text' id='instagram' name='social.instagram' />
        </div>

        <div className='form-control'>
          <label htmlFor='twitter'> Twitter </label>
          <Field type='text' id='twitter' name='social.twitter' />
        </div>

        <h2 className='heading1'>  Newly added Array Fields</h2>
        <div className='form-control'>
          <label htmlFor='primaryph'> Primary PhoneNumber </label>
          <Field type='text' id='primaryph' name='phoneNumbers[0]' />
        </div>

        <div className='form-control'>
          <label htmlFor='secondaryph'> Secondary PhoneNumber </label>
          <Field type='text' id='secondaryph' name='phoneNumbers[1]' />
        </div>

        <button type='submit'> Submit </button>
      </Form>
    </Formik>
  )
}

export default ArrayForm
