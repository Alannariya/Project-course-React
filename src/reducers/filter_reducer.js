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

  if (action.type === UPDATE_SORT){
		return {...state, sort: action.payload}
	}



	if (action.type === SORT_GALLERY){
		const {sort, filtered_gallery} = state;
		let tempGallery = [...filtered_gallery]
		if (sort === 'year-lowest'){
			tempGallery = tempGallery.sort((a,b) => a.year - b.year)
		}
		if (sort === 'year-highest'){
			tempGallery = tempGallery.sort((a,b) => b.year - a.year)
		}
		if (sort === 'name-a'){
			tempGallery = tempGallery.sort((a,b) => {
				return a.title.localeCompare(b.title)
			})
		}
		if (sort === 'name-z'){
			tempGallery = tempGallery.sort((a,b) => {
				return b.title.localeCompare(a.title)
			})
		}
		return {...state, filtered_gallery:tempGallery}
	}




	if (action.type === UPDATE_FILTERS){
		const {name,value} = action.payload
		return {...state, filters:{...state.filters,[name]:value}}
	}
	if(action.type === FILTER_GALLERY){
		// console.log('filtering')
		const {all_gallery} = state
		const {text, author, style } = state.filters
		let tempGallery = [...all_gallery]
		if(text){
			tempGallery = tempGallery.filter((painting) => 
				painting.title.toLowerCase().startsWith(text)
			)
		}
		if(style !=='all'){
			tempGallery = tempGallery.filter(
        (painting) => painting.style === style
      )
		}
		if (author !== 'all') {
      tempGallery  = tempGallery .filter((painting) => 
			painting.author === author
      )
    }
		return{...state,filtered_gallery:tempGallery}
	}



	if (action.type === CLEAR_FILTERS){
		return {
			...state,
			filters:{
				text:'',
				author:'all',
				style:'all',
			}
		}
	}


  throw new Error(`No Matching "${action.type}" - action type`)
}

export default filter_reducer
