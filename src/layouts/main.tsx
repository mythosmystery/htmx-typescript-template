import { html } from '@/lib/html'
import { Children } from 'typed-html'

/**
 * The main layout for the app. This is where you include HTMX, and other things like icons, or maybe Alpine.js.
 * This is also where Tailwind is included.
 *
 * ### Recommendations
 * * If you need to include other frontend JS libraries, we recommend creating more specific layouts to include them, and only putting the minimal amount of imports possible in this main layout.
 */
export function Layout({ children, title }: Children & { title?: string }) {
  return html`
    <html>
      <head>
        <meta charset="utf-8" />
        <title>${title || 'HTMX App'}</title>
        <link href="/styles.css" rel="stylesheet" />
        <script src="https://unpkg.com/htmx.org@1.9.2"></script>
      </head>
      <body class="dark:bg-slate-900 dark:text-white">
        ${children}
      </body>
    </html>
  `
}
