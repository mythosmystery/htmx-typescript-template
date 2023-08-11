import * as elements from 'typed-html'

export const Counter = () => {
  return (
    <div x-data="{ count: 0 }">
      <button x-on:click="count++" class="rounded-lg bg-pink-300 p-3">
        Increment
      </button>
      <p x-text="count" class="py-2 text-center text-2xl"></p>
    </div>
  )
}
