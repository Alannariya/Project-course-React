import React from 'react'
import styled from 'styled-components'
import { Filters, PaintingList, Sort, PageHero } from '../components'

const GalleryPage = () => {
  return (
		<main>
			<PageHero title='галерея'/>
			<Wrapper className='page'>
				<div className='section-center gal'>
					<Filters />
					<div>
						<Sort />
						<PaintingList />
					</div>
				</div>
			</Wrapper>
		</main>
	)	
}

const Wrapper = styled.div`
  .gal {
    display: grid;
    gap: 3rem 1.5rem;
    margin: 4rem auto;
  }
  @media (min-width: 768px) {
    .gal {
      grid-template-columns: 200px 1fr;
    }
  }
`

export default GalleryPage
