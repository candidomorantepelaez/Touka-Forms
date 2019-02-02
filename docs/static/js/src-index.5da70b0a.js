(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{"./src/index.mdx":function(e,n,o){"use strict";o.r(n),o.d(n,"default",function(){return l});var t=o("./node_modules/react/index.js"),r=o.n(t),a=o("./node_modules/@mdx-js/tag/dist/index.js");function c(e){return(c="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function p(e,n){if(null==e)return{};var o,t,r=function(e,n){if(null==e)return{};var o,t,r={},a=Object.keys(e);for(t=0;t<a.length;t++)o=a[t],n.indexOf(o)>=0||(r[o]=e[o]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)o=a[t],n.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}function s(e,n){for(var o=0;o<n.length;o++){var t=n[o];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(e,t.key,t)}}function u(e,n){return!n||"object"!==c(n)&&"function"!==typeof n?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):n}function i(e){return(i=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function m(e,n){return(m=Object.setPrototypeOf||function(e,n){return e.__proto__=n,e})(e,n)}var l=function(e){function n(e){var o;return function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,n),(o=u(this,i(n).call(this,e))).layout=null,o}var o,t,c;return function(e,n){if("function"!==typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),n&&m(e,n)}(n,r.a.Component),o=n,(t=[{key:"render",value:function(){var e=this.props,n=e.components;p(e,["components"]);return r.a.createElement(a.MDXTag,{name:"wrapper",components:n},r.a.createElement(a.MDXTag,{name:"h1",components:n,props:{id:"bienvenidos-a-touka-forms"}},"Bienvenidos a Touka-Forms"),r.a.createElement(a.MDXTag,{name:"p",components:n},"Modulo Touka para la gesti\xf3n de formularios."),r.a.createElement(a.MDXTag,{name:"p",components:n},"Touka-Form se basa en el nuevo contexto de react para controlar el valor del formulario."),r.a.createElement(a.MDXTag,{name:"p",components:n},"La idea es muy simple, la etiqueta ",r.a.createElement(a.MDXTag,{name:"a",components:n,parentName:"p",props:{href:"/form"}},"Form")," crea un contexto al cual se puede acceder desde cualquier componente hijo usando la funcion HOC ",r.a.createElement(a.MDXTag,{name:"a",components:n,parentName:"p",props:{href:"/with-form-context"}},"withFormContext"),"."),r.a.createElement(a.MDXTag,{name:"h2",components:n,props:{id:"instalaci\xf3n"}},"instalaci\xf3n"),r.a.createElement(a.MDXTag,{name:"pre",components:n},r.a.createElement(a.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-js"}},"yarn add touka-forms\n")),r.a.createElement(a.MDXTag,{name:"h2",components:n,props:{id:"uso"}},"uso"),r.a.createElement(a.MDXTag,{name:"pre",components:n},r.a.createElement(a.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-js"}},"import { Form, withFormContext, ShowFormGlobalErrors } from 'touka-forms'\n...\n  <Form\n    onSubmit={value => console.log(value)}\n  >\n    <ShowFormGlobalErrors />\n    ...\n    inputs and buttons with withFormContext\n    ...\n  </Form>\n...\n")))}}])&&s(o.prototype,t),c&&s(o,c),n}();l.__docgenInfo={description:"",methods:[],displayName:"MDXContent"}}}]);
//# sourceMappingURL=src-index.5d3c492981889c725cc9.js.map