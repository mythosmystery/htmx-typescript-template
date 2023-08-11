import express from 'express'

export const todo = express.Router()

todo.get('/', (_, res) => {
  res.send('Hello todo')
})
