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
	sort:'year-lowest',
	filters:{
		text:'',
		author:'all',
		style:'all',
	}
}

const FilterContext = React.createContext()

export const FilterProvider = ({ children }) => {
	const {gallery} = useGalleryContext();
	const [state,dispatch] = useReducer (reducer, initialState)

	useEffect(()=>{
		dispatch({type:LOAD_GALLERY, payload: gallery})
	},[gallery])

	useEffect(() => {
		dispatch({type: FILTER_GALLERY})
		dispatch({type: SORT_GALLERY})
	},[gallery, state.sort, state.filters])


	const setGridView = () => {
		dispatch({type: SET_GRIDVIEW})
	}
	const setListView = () => {
		dispatch({type: SET_LISTVIEW})
	}
	const updateSort = (e) => {
		// const name = e.target.name
		const value = e.target.value
		dispatch ({type:UPDATE_SORT, payload: value})
	}

	const updateFilters = (e) => {
		let name = e.target.name
		let value = e.target.value
		if (name === 'style') {
			value = e.target.textContent
		}
		dispatch ({type:UPDATE_FILTERS, payload: {name, value}})
	}
	const clearFilters = () => {
		dispatch ({ type: CLEAR_FILTERS})
	}


  return (
    <FilterContext.Provider value={{...state, setGridView, setListView, updateSort, updateFilters, clearFilters }}>
      {children}
    </FilterContext.Provider>
  )
}

export const useFilterContext = () => {
  return useContext(FilterContext)
}
