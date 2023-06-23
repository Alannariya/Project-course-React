import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
const ListView = ({gallery}) => {
  return (
		<Wrapper>
			{gallery.map((painting) => {
				const { id, img, title, author, info} = painting
				return (
					<article key={id}>
						<img src={img} alt={title} />
						<div>
							<h4>{title}</h4>
							<h5 className='author'>{author}</h5>
							<p>{info.substring(0, 150)}...</p>
							<Link to={`/gallery/${id}`} className='btn'>
								Подробнее
							</Link>
						</div>
					</article>
				)
			})}
		</Wrapper>
	)	
}

const Wrapper = styled.section`
  display: grid;
  row-gap: 3rem;

  img {
    width: 100%;
    display: block;
    width: 300px;
    height: 350px;
    object-fit: cover;
    border-radius: var(--radius);
    margin-bottom: 1rem;
  }
  h4 {
    margin-bottom: 0.5rem;
  }
  .author {
    color: var(--clr-primary-6);
    margin-bottom: 0.75rem;
  }
  p {
    max-width: 45em;
    margin-bottom: 1rem;
  }
  .btn {
    font-size: 0.5rem;
    padding: 0.25rem 0.5rem;
  }
  @media (min-width: 992px) {
    article {
      display: grid;
      grid-template-columns: auto 1fr;
      column-gap: 2rem;
      align-items: center;
    }
  }
`

export default ListView
