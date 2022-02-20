import './App.css'
import EnrollmentForm from './Components/EnrollmentForm/EnrollmentForm'
import FormikContainer from './Components/FormikContainer'
import LoginForm from './Components/LogInForm/LoginForm'
import RegistrationForm from './Components/RegistrationForm.js/RegistrationForm'
import { theme, ThemeProvider } from '@chakra-ui/react'

function App () {
  return (
    <ThemeProvider theme={theme}>
      <div className='App'>
        {/* <EnrollmentForm /> */}
        {/* <RegistrationForm /> */}
        <LoginForm />
        {/* <FormikContainer /> */}
      </div>
    </ThemeProvider>
  )
}

export default App
