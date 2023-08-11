import * as elements from 'typed-html'
import { Layout } from '../layouts/main'

/**
 * Render a typed-html component. This is used to avoid making route files .tsx
 *
 * Takes in the component and then the props for that component as arguments.
 *
 * ### Examples
 *
 * ```typescript
 * import * as elements from 'typed-html'
 *
 * export default function Home() {
 *   return <div>Hello, world!</div>
 * }
 *
 * ...
 *
 * view.get('/', (_, res) => {
 *   res.send(render(Home))
 * })
 * ```
 *
 * *With props:*
 *
 * ```typescript
 * import * as elements from 'typed-html'
 *
 * export default function Home({ name }: { name: string }) {
 *  return <div>Hello, {name}!</div>
 * }
 *
 * ...
 *
 * view.get('/', (_, res) => {
 *  res.send(render(Home, { name: 'world' }))
 * })
 * ```
 */
export function render<T extends (props: any) => string>(
  Component: T,
  ...props: Parameters<T>
) {
  return (
    <Layout>
      <Component {...props} />
    </Layout>
  )
}
