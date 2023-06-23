import React from 'react'
import styled from 'styled-components'
import Painting from './Painting'

const GridView = ({gallery}) => {
  return (
		<Wrapper>
			<div className='gal-container'>
				{gallery.map((painting) => {
					return <Painting key={painting.id} {...painting} />
				})}
			</div>
		</Wrapper>
	)	
}

const Wrapper = styled.section`
  img {
    height: 450px;
  }

  .gal-container {
    display: grid;
    gap: 2rem 1.5rem;
  }

  @media (min-width: 992px) {
    .gal-container {
      grid-template-columns: repeat(2, 1fr);
    }
  }
  @media (min-width: 1170px) {
    .gal-container {
      grid-template-columns: repeat(3, 1fr);
    }
  }
`

export default GridView
