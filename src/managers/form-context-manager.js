import {
  isNil, isEmpty, reduce, mergeRight, objOf,
} from 'ramda'
import {
  insertInitialDataInFieldData, insertFieldDataInFields,
  isAllFieldsCorrect, updateFieldDataInFields, resetFieldsToInitialValue,
  handlerGlobalErrorsOfValidation, handlerFieldsDataErrorsOfValidation,
} from 'functions/form-functions'


class FormContextManager {
  constructor(initialValue) {
    this.onFieldChange = this.onFieldChange.bind(this)
    this.onFieldMount = this.onFieldMount.bind(this)
    this.onResetForm = this.onResetForm.bind(this)
    this.onSubmitForm = this.onSubmitForm.bind(this)
    this.onValidationForm = this.onValidationForm.bind(this)
    this.getValues = this.getValues.bind(this)
    this.fields = []
    this.initialValue = initialValue
    this.globalErrorsInForm = []
  }

  onFieldChange(fieldData) {
    this.fields = updateFieldDataInFields(fieldData, this.fields)
    return this.fields
  }

  onFieldMount(fieldData) {
    const fieldDataWithInitialValue = insertInitialDataInFieldData(fieldData, this.initialValue)
    this.fields = insertFieldDataInFields(fieldDataWithInitialValue, this.fields)
    return this.fields
  }

  onResetForm() {
    this.fields = resetFieldsToInitialValue(this.fields, this.initialValue)
    return this.fields
  }

  onSubmitForm() {
    const isFieldCorrect = isAllFieldsCorrect(this.fields)
    const isFormCorrect = isEmpty(this.globalErrorsInForm)
    if (isFieldCorrect === true && isFormCorrect === true) {
      return this.getValues()
    }
    return null
  }

  onValidationForm(result) {
    if (isNil(result)) {
      this.globalErrorsInForm = []
      return this.fields
    }
    this.fields = handlerFieldsDataErrorsOfValidation(result, this.fields)
    this.globalErrorsInForm = handlerGlobalErrorsOfValidation(result)
    return this.fields
  }

  getValues() {
    const valueForFields = reduce((acc, obj) => mergeRight(acc, objOf(obj.name)(obj.value)), {}, this.fields)
    return mergeRight(this.initialValue, valueForFields)
  }
}

export default FormContextManager
