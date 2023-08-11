import express from 'express'
import { render } from '../../lib/render'
import Home from '../../pages'

export * from './todo'

const view = express.Router()

view.get('/', (_, res) => {
  res.send(render(Home))
})

export default view
