# Bienvenidos a Touka-Forms

Modulo Touka para la gestión de formularios.

Touka-Form se basa en el nuevo contexto de react para controlar el valor del formulario.

La idea es muy simple, la etiqueta [Form](/form) crea un contexto al cual se puede acceder desde cualquier componente hijo usando la funcion HOC [withFormContext](/with-form-context).

## instalación
```js
yarn add touka-forms
```

## uso
```js
import { Form, withFormContext, ShowFormGlobalErrors } from 'touka-forms'
...
  <Form
    onSubmit={value => console.log(value)}
  >
    <ShowFormGlobalErrors />
    ...
    inputs and buttons with withFormContext
    ...
  </Form>
...
```
