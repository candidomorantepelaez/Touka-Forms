import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { isNil, omit } from 'ramda'
import FormContext from 'contexts/form-context'
import {
  getFieldData, getValueForFieldData, getInitialValue, getErrorsForFieldData, insertValueInFieldData,
  cleanErrorsInFieldData, checkRequiredFieldData, insertErrorsInFieldData,
} from 'functions/input-functions'


const withFormContext = WrappedComponent => class WithFormContext extends Component {
  static contextType = FormContext

  static propTypes = {
    name: PropTypes.string.isRequired,
    onValidate: PropTypes.func,
    onChange: PropTypes.func,
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.array, PropTypes.number]),
  }

  static defaultProps = {
    onValidate: () => (null),
    onChange: value => value,
    value: '',
  }

  constructor(props) {
    super(props)
    this.handleOnValidate = this.handleOnValidate.bind(this)
    this.handlerOnChange = this.handlerOnChange.bind(this)
    this.fieldName = props.name
  }

  componentDidMount() {
    const { onFieldMount } = this.context
    onFieldMount(this.props)
  }

  handleOnValidate(value, fieldData) {
    const { onValidate } = this.props
    const result = onValidate(value)
    if (isNil(result)) {
      return fieldData
    }
    return insertErrorsInFieldData(result, fieldData)
  }

  handlerOnChange(value, fieldData) {
    const { onChange } = this.props
    if (onChange) {
      onChange(value)
    }
    const { onFieldChange } = this.context
    const cleanedFieldData = cleanErrorsInFieldData(fieldData)
    const updatedFieldData = insertValueInFieldData(value, cleanedFieldData)
    const checkedRequiredFieldData = checkRequiredFieldData(value, updatedFieldData)
    const validatedFieldData = this.handleOnValidate(value, checkedRequiredFieldData)
    onFieldChange(validatedFieldData)
  }

  render() {
    const {
      initialValue, globalErrors, fields, onSubmit,
    } = this.context
    const safeProps = omit(['onChange', 'value', 'onValidate'], this.props)
    const fieldData = getFieldData(this.fieldName, fields)
    if (isNil(fieldData)) {
      return (<p>Loading</p>)
    }
    return (
      <WrappedComponent
        initial_value={getInitialValue(this.fieldName, initialValue)}
        value={getValueForFieldData(fieldData)}
        global_errors={globalErrors}
        errors={getErrorsForFieldData(fieldData)}
        error={fieldData.error}
        onChange={value => this.handlerOnChange(value, fieldData)}
        onSubmit={onSubmit}
        {...safeProps}
      />
    )
  }
}

export default withFormContext
