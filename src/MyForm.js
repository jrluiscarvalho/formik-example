import React from 'react'
import { withFormik, Form, Field, ErrorMessage } from 'formik'

const enhanceWithFormik = withFormik({
  mapPropsToValues: () => ({ name: '', surname: '', email: '', password: '' }),
  handleSubmit: (values, formikBag) => {
    console.log(values)
  },
  isInitialValid: false,
  validateOnChange: true,
  validateOnBlur: true,
  displayName: 'MyForm',
  validate: values => {
    const { name, surname, email } = values
    const errors = {}
    if (!name) {
      errors.name = 'Informe o nome!'
    } else if (name.length < 5) {
      errors.name = 'O nome deve conter mais de 5 letras!'
    } else if (name.length > 100) {
      errors.name = 'O nome deve conter menos de 100 letras!'
    } else if (name === 'admin' || name === 'administrador') {
      errors.name = 'Esse nome não pode camarada!'
    }

    if (!surname) {
      errors.surname = 'Informe o sobrenome!'
    }

    if (!email) {
      errors.email = 'Informe o email!'
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) {
      errors.email = 'Informe um email válido!'
    }

    return errors
  }
})

const MyForm = props => {
  return (
    <Form>
      <h1>Validação Nativa</h1>
      <div>
        <Field name="name" placeholder="Nome" /> <br />
        <ErrorMessage name="name" />
      </div>
      <div>
        <Field name="surname" placeholder="Sobrenome" />
        <br />
        <ErrorMessage name="surname" />
      </div>
      <div>
        <Field name="email" placeholder="Email" />
        <br />
        <ErrorMessage name="email" className="errorMessage" />
      </div>
      <button type="submit">Enviar</button>
    </Form>
  )
}

export default enhanceWithFormik(MyForm)
