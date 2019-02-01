import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { isEmpty, addIndex, map } from 'ramda'
import FormContext from 'contexts/form-context'


class ShowFormGlobalErrors extends Component {
  static contextType = FormContext

  static propTypes = {
    /**
     * Clase css para la etiqueta ul
     */
    ulStyle: PropTypes.string,

    /**
     * Clase css para cada etiqueta li
     */
    liStyle: PropTypes.string,
  }

  static defaultProps = {
    ulStyle: '',
    liStyle: '',
  }

  render() {
    const { globalErrors } = this.context
    const { ulStyle, liStyle } = this.props

    if (isEmpty(globalErrors)) {
      return null
    }

    return (
      <ul className={ulStyle}>
        {addIndex(map)((error, index) => (
          <li key={index} className={liStyle}>{error}</li>
        ), globalErrors)}
      </ul>
    )
  }
}

export default ShowFormGlobalErrors
