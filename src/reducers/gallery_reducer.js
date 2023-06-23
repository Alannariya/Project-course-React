import {
  SIDEBAR_OPEN,
  SIDEBAR_CLOSE,
  GET_GALLERY_BEGIN,
  GET_GALLERY_SUCCESS,
  GET_GALLERY_ERROR,
  GET_SINGLE_PAINTING_BEGIN,
  GET_SINGLE_PAINTING_SUCCESS,
  GET_SINGLE_PAINTING_ERROR,
} from '../actions'

const gallery_reducer = (state, action) => {
	if (action.type === SIDEBAR_OPEN) {
		return {...state,isSidebarOpen: true}
	}
	if (action.type === SIDEBAR_CLOSE) {
		return {...state,isSidebarOpen: false}
	}
  if (action.type === GET_GALLERY_BEGIN) {
		return {...state,gallery_loading: true}
	}
	if (action.type === GET_GALLERY_SUCCESS) {
		const featured_painting = action.payload.filter((painting) => painting.featured === true)
		return {...state,gallery_loading: false, featured_painting, gallery: action.payload}
	}
	if (action.type === GET_GALLERY_ERROR) {
		return {...state,gallery_loading: false,gallery_error: true}
	}
	if (action.type === GET_SINGLE_PAINTING_BEGIN) {
		return {...state,single_painting_loading: true,single_painting_error: false}
	}
	if (action.type === GET_SINGLE_PAINTING_SUCCESS) {
		return {...state,single_painting_loading: false, single_painting: action.payload}
	}
	if (action.type === GET_SINGLE_PAINTING_ERROR) {
		return {...state,single_painting_loading: false, single_painting_error: true}
	}

  throw new Error(`No Matching "${action.type}" - action type`)
}

export default gallery_reducer
