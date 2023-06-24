import React from 'react'
import { useFilterContext } from '../context/filter_context'
import GridView from './GridView'
import ListView from './ListView'

const PaintingList = () => {
	const {filtered_gallery: gallery, grid_view} = useFilterContext()

	if(gallery.length < 1){
		return (
		<h5 style={{textTransform:'none'}}>
			Извините, искомая картина не найдена...
		</h5>
		)
	}
	if (grid_view === false){
		return (
			<ListView gallery={gallery} />
		)
	}

  return (
		<GridView gallery={gallery}>
		</GridView>
	)	
}

export default PaintingList
