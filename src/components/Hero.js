import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import heroBcg from '../assets/hero-bcg.jpg'
import heroBcg2 from '../assets/hero-bcg-2.jpg'

const Hero = () => {
  return (
		<Wrapper className='section-center'>
			<article className='content'>
				<h1>
					стань ближе <br />
					к искусству
				</h1>
				<p>
				Все наши впечатления, фантазии, увиденные архитектурные ландшафты, предметы, пейзажи удивительным образом находят свое отображение в творческих работах великих мастеров и знаменитых художников. Можно сказать, что любая галерея картин насыщает зрителя таинственным колоритом высокого искусства и неповторимыми оттенками внутреннего мира их создателя.
				</p>
				<Link to='/gallery' className='btn hero-btn'>
					перейти в галерею
				</Link>
			</article>
			<article className='img-container'>
				<img src={heroBcg} alt='' className='main-img' />
				<img src={heroBcg2} alt='' className='accent-img' />
			</article>
		</Wrapper>
	)
}

const Wrapper = styled.section`
  min-height: 45vh;
  display: grid;
  place-items: center;
  .img-container {
    display: none;
  }

  p {
    line-height: 2;
    max-width: 45em;
    margin-bottom: 2rem;
    color: var(--clr-grey-5);
    font-size: 1rem;
  }
  @media (min-width: 992px) {
    height: calc(100vh - 5rem);
    grid-template-columns: 1fr 1fr;
    gap: 8rem;
    h1 {
      margin-bottom: 2rem;
    }
    p {
      font-size: 1.25rem;
    }
    .hero-btn {
      padding: 0.75rem 1.5rem;
      font-size: 1rem;
    }
    .img-container {
      display: block;
      position: relative;
    }
    .main-img {
      width: 100%;
      height: 550px;
      position: relative;
      border-radius: var(--radius);
      display: block;
      object-fit: cover;
    }
    .accent-img {
      position: absolute;
      bottom: 0;
      left: 0;
      width: 250px;
      transform: translateX(-50%);
      border-radius: var(--radius);
    }
    .img-container::before {
      content: '';
      position: absolute;
      width: 10%;
      height: 80%;
      background: var(--clr-primary-9);
      bottom: 0%;
      left: -8%;
      border-radius: var(--radius);
    }
  }
`

export default Hero
