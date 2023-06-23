import {
  LOAD_GALLERY,
  SET_LISTVIEW,
  SET_GRIDVIEW,
  UPDATE_SORT,
  SORT_GALLERY,
  UPDATE_FILTERS,
  FILTER_GALLERY,
  CLEAR_FILTERS,
} from '../actions'

const filter_reducer = (state, action) => {
	if (action.type === LOAD_GALLERY){
		return {...state, all_gallery:[...action.payload], filtered_gallery:[...action.payload]}
	}
	if (action.type === SET_GRIDVIEW){
		return {...state, grid_view: true}
	}
	if (action.type === SET_LISTVIEW){
		return {...state, grid_view: false}
	}
  
  throw new Error(`No Matching "${action.type}" - action type`)
}

export default filter_reducer
