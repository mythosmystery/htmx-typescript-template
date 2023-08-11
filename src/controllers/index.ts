import express from 'express'
import * as views from './view'
import * as apis from './api'

export const controllers = express.Router()

for (let view in views) {
  const key = view as keyof typeof views
  controllers.use(`/${view === 'default' ? '' : key}`, views[key])
}

for (let api in apis) {
  const key = api as keyof typeof apis
  controllers.use(`/api/${key}`, apis[key])
}
