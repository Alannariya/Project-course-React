import axios from 'axios'
import React, { useContext, useEffect, useReducer } from 'react'
import reducer from '../reducers/gallery_reducer'
import { gallery_url as url } from '../utils/constants'
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

const initialState = {
	isSadebarOpen: false,
	gallery_loading: false,
	gallery_error: false,
	gallery: [],
	featured_painting: [],
	single_painting_loading: false,
	single_painting_error: false,
	single_painting: {},
}

const GalleryContext = React.createContext()

export const GalleryProvider = ({ children }) => {
	const [state,dispatch] = useReducer(reducer,initialState)

	const openSidebar = () => {
		dispatch({ type: SIDEBAR_OPEN})
	}
	const closeSidebar = () => {
		dispatch({ type: SIDEBAR_CLOSE})
	}

	const fetchGallery = async(url) => {
		dispatch({type:GET_GALLERY_BEGIN})
		try {
			const response = await axios.get(url)
			const gallery = response.data
			dispatch({ type: GET_GALLERY_SUCCESS, payload: gallery})
		}
		catch (error) {
			dispatch ({type: GET_GALLERY_ERROR})
		}
	}	

	const fetchSinglePainting = async(url) => {
		dispatch({type:GET_SINGLE_PAINTING_BEGIN})
		try {
			const response = await axios.get(url)
			const singlePainting = response.data
			dispatch({ type: GET_SINGLE_PAINTING_SUCCESS, payload: singlePainting})
		}
		catch (error) {
			dispatch ({type: GET_SINGLE_PAINTING_ERROR})
		}
	}	
	

		useEffect(()=>{
			fetchGallery(url)
		},[])

  return (
    <GalleryContext.Provider value={{...state, openSidebar, closeSidebar, fetchSinglePainting}}>
      {children}
    </GalleryContext.Provider>
  )
}

export const useGalleryContext = () => {
  return useContext(GalleryContext)
}
