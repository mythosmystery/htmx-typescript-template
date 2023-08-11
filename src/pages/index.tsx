import * as elements from 'typed-html'
import { Counter } from '../client/counter'
import { UseClient } from '../client'

export default function Home() {
  return (
    <div class="flex min-h-screen flex-col items-center justify-center gap-4">
      <h1 class="bg-gradient-to-br from-blue-400 to-pink-400 bg-clip-text py-2 text-5xl font-bold text-transparent">
        Cool!
      </h1>
      <UseClient>
        <Counter />
      </UseClient>
      <button
        class="rounded-lg bg-pink-300 p-3"
        hx-post="/api/todo"
        hx-swap="outerHTML"
      >
        Click me!
      </button>
    </div>
  )
}
