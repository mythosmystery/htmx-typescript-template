import express from 'express'
import { render } from '../../lib/render'
import { Todo } from '../../components/Todo'

export const todo = express.Router()

todo.post('/', (_, res) => {
  res.send(render(Todo))
})
