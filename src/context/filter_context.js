import React, { useEffect, useContext, useReducer } from 'react'
import reducer from '../reducers/filter_reducer'
import {
  LOAD_GALLERY,
  SET_GRIDVIEW,
  SET_LISTVIEW,
  UPDATE_SORT,
  SORT_GALLERY,
  UPDATE_FILTERS,
  FILTER_GALLERY,
  CLEAR_FILTERS,
} from '../actions'
import { useGalleryContext } from './gallery_context'

const initialState = {
	filtered_gallery:[],
	all_gallery:[],
	grid_view: true,
	sort:'year-lowest'
}

const FilterContext = React.createContext()

export const FilterProvider = ({ children }) => {
	const {gallery} = useGalleryContext();
	const [state,dispatch] = useReducer (reducer, initialState)

	useEffect(()=>{
		dispatch({type:LOAD_GALLERY, payload: gallery})
	},[gallery])

	const setGridView = () => {
		dispatch({type: SET_GRIDVIEW})
	}
	const setListView = () => {
		dispatch({type: SET_LISTVIEW})
	}

  return (
    <FilterContext.Provider value={{...state, setGridView, setListView}}>
      {children}
    </FilterContext.Provider>
  )
}

export const useFilterContext = () => {
  return useContext(FilterContext)
}
