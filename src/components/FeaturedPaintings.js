import React from 'react'
import { useGalleryContext } from '../context/gallery_context'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import Error from './Error'
import Loading from './Loading'
import Painting from './Painting'

const FeaturedPaintings = () => {
	const {
		gallery_loading:loading, 
		gallery_error: error, 
		featured_painting: featured,
	} = useGalleryContext()
	if (loading) {
		return <Loading/>
	}
	if (error) {
		return <Error/>
	}

  return (
		<Wrapper className='section'>
			<div className='title'>
				<h2>представленные картины</h2>
			</div>
			<div className='section-center featured' >
				{featured.map((painting) => {
					return <Painting key={painting.id} {...painting}/>
				})}
			</div>
		</Wrapper>
	)	
}

const Wrapper = styled.section`
  background: var(--clr-grey-10);
  .featured {
    margin: 4rem auto;
    display: grid;
    gap: 2.5rem;
    img {
      height: 225px;
    }
  }
  .btn {
    display: block;
    width: 148px;
    margin: 0 auto;
    text-align: center;
  }
  @media (min-width: 576px) {
    .featured {
      grid-template-columns: repeat(auto-fit, minmax(360px, 1fr));
    }
  }
`

export default FeaturedPaintings
