import React from 'react'
import DateView from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import { Field, ErrorMessage } from 'formik'
import TextError from './TextError'

function DatePicker (props) {
  const { label, name, ...rest } = props
  console.log('Cheking props', props)
  
  return (
    <div className='form-control'>
      <label htmlFor={name}> {label} </label>
      <Field name={name}>
        {
            (props) => {
                console.log(props);
                const { field, form } = props
                const { value } = field
                const { setFieldValue } = form
                return <DateView
                        id={name}
                        {...field}
                        {...rest}
                        selected={value}
                        onChange={(updatedDate) => setFieldValue(name, updatedDate)} />
            }
        }
      </Field>

      <ErrorMessage name={name} component={TextError} />
    </div>
  )
}

export default DatePicker
