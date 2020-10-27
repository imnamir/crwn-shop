import { createStore } from 'redux'
import { logger } from 'redux-logger'
import { applyMiddleware } from 'redux'
import { rootReducer } from './rootReducer'

const store = createStore(rootReducer, applyMiddleware(logger))

export default store;