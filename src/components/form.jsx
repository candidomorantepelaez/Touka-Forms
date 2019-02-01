import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { isNil, omit } from 'ramda'
import FormContextManager from 'managers/form-context-manager'
import FormContext from 'contexts/form-context'


class Form extends Component {
  static propTypes = {
    /**
     * define el valor inicial del formulario, en caso de tener conflicto con el
     * valor inicial de un input en concreto, tiene preferencia este valor.
     */
    initialValue: PropTypes.shape({}),

    /**
     * funcion que se ejecuta al enviar el formulario,
     * recibe como parametro un objecto con el valor del formulario.
     */
    onSubmit: PropTypes.func.isRequired,

    /**
     * son los hijos del componente Form
     */
    children: PropTypes.node.isRequired,

    /**
     * funcion que se ejecuta en cada cambio de valor del formulario.
     * recibe como parametro el nuevo valor, en caso de error se debe
     * retornar un objeto error.
     *
     */
    onValidate: PropTypes.func,

  }

  static defaultProps = {
    initialValue: {},
    onValidate: () => null,
  }

  constructor(props) {
    super(props)
    this.formManager = new FormContextManager(props.initialValue)
    this.onFieldChange = this.onFieldChange.bind(this)
    this.onFieldMount = this.onFieldMount.bind(this)
    this.handlerOnValidate = this.handlerOnValidate.bind(this)
    this.handlerSubmit = this.handlerSubmit.bind(this)
    this.state = {
      initialValue: props.initialValue,
      fields: {},
      errorsInForm: [],
    }
  }

  onFieldChange(fieldData) {
    this.setState({
      fields: this.formManager.onFieldChange(fieldData),
    }, () => this.handlerOnValidate())
  }

  onFieldMount(fieldData) {
    this.setState({ fields: this.formManager.onFieldMount(fieldData) })
  }

  handlerOnValidate() {
    const { onValidate } = this.props
    const result = onValidate(this.formManager.getValues())
    const newFieldvalue = this.formManager.onValidationForm(result)
    const newErrorsInForm = this.formManager.globalErrorsInForm
    return new Promise((resolve) => {
      this.setState({
        fields: newFieldvalue,
        errorsInForm: newErrorsInForm,
      }, () => resolve())
    })
  }

  handlerSubmit(evt) {
    const { onSubmit } = this.props
    if (!isNil(evt)) {
      evt.preventDefault()
    }
    this.handlerOnValidate().then(() => {
      const value = this.formManager.onSubmitForm()
      if (!isNil(value)) {
        onSubmit(value)
      }
    })
  }

  render() {
    const { children } = this.props
    const {
      initialValue, errorsInForm, fields,
    } = this.state
    const safeProps = omit(['initialValue', 'onValidate', 'onSubmit'], this.props)
    return (
      <FormContext.Provider
        value={{
          initialValue,
          globalErrors: errorsInForm,
          fields,
          onFieldChange: this.onFieldChange,
          onFieldMount: this.onFieldMount,
          onSubmit: this.handlerSubmit,
        }}
      >
        <form
          onSubmit={evt => this.handlerSubmit(evt)}
          {...safeProps}
        >
          {children}
        </form>
      </FormContext.Provider>
    )
  }
}

export default Form
