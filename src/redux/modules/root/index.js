import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import { intlReducer } from 'react-intl-redux'
import products from '../products'

export default combineReducers({
  products,
  intl: intlReducer,
  routing: routerReducer
})
