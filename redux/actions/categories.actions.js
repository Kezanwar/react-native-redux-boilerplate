import { CATEGORIES } from './types.actions'
import store from '../store'

export const getCategories = () => {
  try {
    store.dispatch({ type: CATEGORIES.GET_CATEGORIES, payload: 'categories' })
  } catch (error) {
    console.log(error)
  }
}
