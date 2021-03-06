import React from 'react'
import { Formik, Form, Field, ErrorMessage, FieldArray, FastField } from 'formik'
import * as Yup from 'yup'
import TextError from './TextError'

const initialValues = {
  name: 'Ujjwal',
  email: '',
  channel: '',
  comments: '',
  address: '',
  social: {
    facebook: '',
    instagram: '',
    twitter: ''
  },
  phoneNumbers: ['', ''],
  phNumbers: ['']
}

const onSubmit = (values, onSubmitProps) => {
  console.log('Form data', values)
  console.log('submit Props', onSubmitProps);
  onSubmitProps.setSubmitting(false)
//   alert(`Form Submitted SuccessFully`)
}

// new validation concept using Yup library
const validationSchema = Yup.object({
  name: Yup.string().required('Name is Required'),
  email: Yup.string()
    .email('Invalid email format')
    .required('Email is required'),
  channel: Yup.string().required('Channel name is required')
})

// Field level Validation for Commnets Field
const validateComments = (value) => {
  let errors
  if (!value) {
    errors = ' Comments Required'
  }
  return errors
}

function DisableSubmitFormTwo () {
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    //   validateOnMount
    >
        {
            (formik) => {
                console.log(formik)  
                return  <Form>
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
                  <ErrorMessage name='channel' component={TextError} />
                </div>
        
                <div className='form-control'>
                  <label htmlFor='comments'> Comments </label>
                  <Field
                    as='textarea'
                    type='text'
                    id='comments'
                    name='comments'
                    validate={validateComments}
                  />
                  <ErrorMessage name='comments' component={TextError} />
                </div>
        
                <div className='form-control'>
                  <label htmlFor='address'> Address </label>
                  <FastField type='text' name='address'>
                    {
                    (props) => {
                      const { field, form, meta } = props
                      return (
                        <div>
                          <input type='text' id='address' {...field} />
                          {meta.touched && meta.error ? (
                            <div> {meta.error} </div>
                          ) : null}
                        </div>
                      )
                    }
                    }
                  </FastField>
                </div>
        
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
        
                <div className='form-control'>
                  <label htmlFor='primaryph'> Primary Phone number </label>
                  <Field type='text' id='primaryph' name='phoneNumbers[0]' />
                </div>
        
                <div className='form-control'>
                  <label htmlFor='secondaryph'> Secondary Phone number </label>
                  <Field type='text' id='secondaryph' name='phoneNumbers[1]' />
                </div>
        
                <div className='form-control'>
            <label> List of Phone Numbers </label>
            <FieldArray name='phNumbers'>
                {
                    (fieldArrayProps) => {
                        const { push, remove, form } = fieldArrayProps
                        const { values } = form
                        const { phNumbers } = values
                        return <div> 
                            {
                               phNumbers.map((phNumber, index) => (
                                 <div key={index}>
                                  <Field name={`phNumbers[${index}]`} />
                                  {
                                      index > 0 && 
                                      <button type='button' onClick={() => remove(index)}> - </button>
                                  }
                                 
                                  <button type='button' onClick={() => push('')}> + </button>
                                 </div>
                               ))
                            } 
                            </div>
                    }
                }
            </FieldArray>
        </div>

        <button type='button'
         onClick={ () => formik.validateField('comments')}> 
         Validate Comments 
         </button>

         <button type='button'
         onClick={ () => formik.validateForm()}> 
         Validate All 
         </button>

         <button type='button'
         onClick={ () => formik.setFieldTouched('comments')}> 
        Visit Comments
         </button>

         <button type='button'
         onClick={ () => formik.setTouched({
             name: true,
             email: true,
             channel: true,
             comments: true
         })}> 
         Visit Fields 
         </button>
        
                <button type='submit'
                 disabled={!formik.isValid || formik.isSubmitting}>
                  {/* disabled={formik.isSubmitting}> */}
                      Submit
                </button>
              </Form>          
            }
        }
     
    </Formik>
  )
}

export default DisableSubmitFormTwo 

