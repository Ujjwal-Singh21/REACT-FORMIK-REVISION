import React from 'react'
import { Field } from 'formik'
import {
  Input,
  FormControl,
  FormLabel,
  FormErrorMessage,
} from '@chakra-ui/react'

function ChakraInput (props) {
  const { label, name, ...rest } = props
  return (
    <Field name={name}>
      {props => {
        const { field, form } = props

        return (
          <FormControl isInvalid={form.erros[name] && form.touched[name]}>
            <FormLabel htmlFor={name}> {label} </FormLabel>
            <Input id={name} {...rest} {...field} />
            <FormErrorMessage> {form.errors[name]} </FormErrorMessage>
          </FormControl>
        )
      }}
    </Field>
  )
}

export default ChakraInput