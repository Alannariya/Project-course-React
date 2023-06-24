import React, { useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { useGalleryContext } from '../context/gallery_context'
import { single_painting_url as url } from '../utils/constants'
import {
  Loading,
  Error,
  PageHero,
} from '../components'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const SinglePaintingPage = () => {
	const { id } = useParams()
	const navigate = useNavigate()
	const {
		single_painting_loading: loading,
		single_painting_error: error,
		single_painting: painting,
		fetchSinglePainting,
	} = useGalleryContext()

	useEffect (() => {
		fetchSinglePainting(`${url}${id}`)
		// eslint-disable-next-line
	}, [id])

	useEffect(() => {
		if(error){
			setTimeout(() =>{
				navigate('/')
			},3000)
		}
		// eslint-disable-next-line
	}, [error])

	if (loading) {
		return <Loading/>
	}
	if (error) {
		return <Error/>
	}

	if (!painting[0]) {
		return <Error />;
	}
 const {img, title, author, year, style, info} = painting[0]
 console.log(painting)
 console.log(title)
  return (
		<Wrapper>
			<PageHero title={title}  gallery />
			<div className='section section-center page'>
				<Link to='/gallery' className='btn'>вернуться в галерею</Link>
				<div className='painting-center'>
					<img src={img} alt={title} />
					<section className='content'>
						<h2>{title}</h2>
						<h5 className='year'>{year}</h5>
						<p className='desc'>{info}</p>
						<p className='info'>
							<span>Художник : </span>{author}
						</p>
						<p className='info'>
							<span>Стиль : </span>{style}
						</p>
					</section>
				</div>
			</div>
		</Wrapper>
	)	
	
}

const Wrapper = styled.main`
  .painting-center {
    display: grid;
    gap: 4rem;
    margin-top: 2rem;
  }
  .year {
    color: var(--clr-primary-5);
  }
  .desc {
    line-height: 2;
    max-width: 45em;
  }
	img {
		height: 600px;
	  width: 100%;
	  display: block;
	  border-radius: var(--radius);
	  object-fit: cover;
 }
  .info {
    text-transform: capitalize;
    width: 300px;
    display: grid;
    grid-template-columns: 125px 1fr;
    span {
      font-weight: 700;
    }
  }
	@media (max-width: 576px) {
    img {
      height: 300px;
    }
	}	
  @media (min-width: 992px) {
    .painting-center {
      grid-template-columns: 1fr 1fr;
      align-items: center;
    }
	  .year {
      font-size: 1.25rem;
    }
		img {
      height: 600px;
    }
  }
`

export default SinglePaintingPage
