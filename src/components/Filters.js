import React from 'react'
import styled from 'styled-components'
import { useFilterContext } from '../context/filter_context'
import { getUniqueValues } from '../utils/helpers'


const Filters = () => {
	const {
		filters:{
			text,	author,	style
		},
		updateFilters,
		clearFilters,
		all_gallery
	} = useFilterContext()

	const authors = getUniqueValues (all_gallery,'author')
	const styles = getUniqueValues (all_gallery,'style')
	// console.log(styles)
  return (
		<Wrapper>
			<div className='content'>
				<form onSubmit={(e)=> e.preventDefault()} >
					<div className='form-control'>
						<input 
							type='text' 
							name='text' 
							placeholder='поиск' 
							className='search-input'
							value={text}
							onChange={updateFilters} />
					</div >
					<div className='form-control'>
						<h5>стиль</h5>
						<div>
							{styles.map((s, index) => {
								return <button 
								key={index}
								onClick={updateFilters}
								type='button'
								name='style'
								className={`${
									style === s.toLowerCase() ? 'active' : null
								}`}
								>{s}</button>
							})}
						</div>
					</div>
					<div className='form-control'>
							<h5>художник</h5>
							<select 
								name='author' 
								value={author}
								onChange={updateFilters}
								className='authors' >
									{authors.map((a, index) => {
										return (
											<option key={index} value={a}>
											{a}
										</option>
										)
									})}
								</select>
					</div>
				</form>
				<button 
					type='button' 
					className='clear-btn' 
					onClick={clearFilters}
					>
						очистить
				</button>
			</div>
		</Wrapper>
	)	
}

const Wrapper = styled.section`
  .form-control {
    margin-bottom: 1.25rem;
    h5 {
      margin-bottom: 0.5rem;
    }
  }
  .search-input {
    padding: 0.5rem;
    background: var(--clr-grey-10);
    border-radius: var(--radius);
    border-color: transparent;
    letter-spacing: var(--spacing);
  }
  .search-input::placeholder {
    text-transform: capitalize;
  }

  button {
    display: block;
    margin: 0.25em 0;
    padding: 0.25rem 0;
    text-transform: capitalize;
    background: transparent;
    border: none;
    border-bottom: 1px solid transparent;
    letter-spacing: var(--spacing);
    color: var(--clr-grey-5);
    cursor: pointer;
  }
  .active {
    border-color: var(--clr-grey-5);
  }
  .authors {
    background: var(--clr-grey-10);
    border-radius: var(--radius);
    border-color: transparent;
    padding: 0.25rem;
		width: 10rem;
  }
 
  .clear-btn {
    background: var(--clr-red-dark);
    color: var(--clr-white);
    padding: 0.25rem 0.5rem;
    border-radius: var(--radius);
  }
  @media (min-width: 768px) {
    .content {
      position: sticky;
      top: 1rem;
    }
  }
`

export default Filters
