import {
  find, findIndex, append, update, has, mergeRight, none, reduce, objOf, map, isNil, concat, is,
} from 'ramda'


export const selectField = (fieldName, fields) => find(obj => obj.name === fieldName, fields)

export const getIndexOfFieldData = (fieldData, fields) => findIndex(obj => obj.name === fieldData.name, fields)

export const insertFieldDataInFields = (fieldData, fields) => {
  const indexField = getIndexOfFieldData(fieldData, fields)
  if (indexField < 0) {
    return append(fieldData, fields)
  }
  return update(indexField, fieldData, fields)
}

export const insertInitialDataInFieldData = (fieldData, initialValue) => {
  if (has(fieldData.name, initialValue)) {
    return mergeRight(fieldData, { value: initialValue[fieldData.name] })
  }
  return fieldData
}

export const isAllFieldsCorrect = fields => none(obj => obj.error === true, fields)

export const getValuesForSubmit = fields => reduce((acc, obj) => mergeRight(acc, objOf(obj.name)(obj.value)), {}, fields)

export const updateFieldDataInFields = (fieldData, fields) => {
  const indexField = getIndexOfFieldData(fieldData, fields)
  if (indexField < 0) {
    return fields
  }
  return update(indexField, fieldData, fields)
}

export const resetFieldsToInitialValue = (fields, initialValue) => map(fieldData => insertInitialDataInFieldData(fieldData, initialValue), fields)

export const insertErrorsInFieldData = (field, errors) => {
  const errorForThisField = find(error => error.name === field.name, errors)
  if (isNil(errorForThisField)) {
    return field
  }
  if (isNil(field.errors) || !is(Array, field.errors)) {
    return mergeRight(field, { error: true, errors: errorForThisField.errors })
  }
  return mergeRight(field, { error: true, errors: concat(errorForThisField.errors, field.errors) })
}

export const handlerGlobalErrorsOfValidation = (result) => {
  if (isNil(result.global)) {
    return []
  }
  return result.global
}

export const handlerFieldsDataErrorsOfValidation = (result, fields) => {
  if (isNil(result.fields)) {
    return fields
  }
  return map(obj => insertErrorsInFieldData(obj, result.fields), fields)
}
