import {
  isNil, find, has, mergeRight, is, isEmpty, concat,
} from 'ramda'


export const getFieldData = (fieldName, fields) => find(obj => obj.name === fieldName, fields)

export const getValueForFieldData = (fieldData) => {
  if (isNil(fieldData) || isNil(fieldData.value)) {
    return ''
  }
  return fieldData.value
}

export const getErrorsForFieldData = (fieldData) => {
  if (isNil(fieldData) || isNil(fieldData.errors)) {
    return []
  }
  return fieldData.errors
}

export const getInitialValue = (fieldName, initialValue) => {
  if (has(fieldName, initialValue)) {
    return initialValue[fieldName]
  }
  return ''
}

export const insertValueInFieldData = (value, fieldData) => mergeRight(fieldData, { value })

export const insertErrorsInFieldData = (errors, fieldData) => {
  if (is(Array, errors)) {
    return mergeRight(fieldData, { errors: concat(fieldData.errors, errors), error: true })
  }
  if (is(String, errors)) {
    return mergeRight(fieldData, { errors: concat(fieldData.errors, [errors]), error: true })
  }
  return fieldData
}

export const cleanErrorsInFieldData = fieldData => mergeRight(fieldData, { error: false, errors: [] })

export const checkRequiredFieldData = (value, fieldData) => {
  if (fieldData.required === true && (isNil(value) || isEmpty(value))) {
    return mergeRight(fieldData, { error: true, errors: [`the field ${fieldData.name} is required`] })
  }
  return fieldData
}
