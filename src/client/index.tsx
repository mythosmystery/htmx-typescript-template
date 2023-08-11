import { Children } from 'typed-html'
import { html } from '../lib/html'

export const UseClient = ({ children }: Children) => {
  return html`
    <head>
      <script
        defer
        src="https://cdn.jsdelivr.net/npm/alpinejs@3.x.x/dist/cdn.min.js"
      ></script>
    </head>
    ${children}
  `
}
