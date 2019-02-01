export const imports = {
  'src/index.mdx': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "src-index" */ 'src/index.mdx'),
  'src/components/form.mdx': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "src-components-form" */ 'src/components/form.mdx'),
  'src/components/show-form-global-errors.mdx': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "src-components-show-form-global-errors" */ 'src/components/show-form-global-errors.mdx'),
  'src/hocs/with-form-context.mdx': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "src-hocs-with-form-context" */ 'src/hocs/with-form-context.mdx'),
}
