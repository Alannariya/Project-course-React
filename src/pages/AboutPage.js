import React from 'react'
import styled from 'styled-components'
import { PageHero } from '../components'
import aboutImg from '../assets/hero-bcg-3.jpg'

const AboutPage = () => {
  return (
		<main>
			<PageHero title='о нас'/>
			<Wrapper className='page section section-center'>
				<img src={aboutImg} alt='Фрэнк Бернард Дикси – Эльза' />
				<article>
					<div className='title'>
						<h2> Добро пожаловать на АртГид! </h2>
						<div className='underline'></div>
					</div>
					<p>Мы - команда энтузиастов искусства, и наша цель - предоставить вам возможность погрузиться в удивительный мир искусства. Наш сайт является платформой, где вы сможете открыть для себя шедевры различных художников и расширить свои знания об искусстве.
					</p>
					<p>	Мы страстно верим в важность изучения искусства и его способности вдохновлять, пробуждать эмоции и расширять наши границы мышления. Наши коллекции включают произведения из разных эпох, стилей и направлений, предоставляя вам уникальную возможность познакомиться с разнообразием искусства.
					</p>
					<p>Через наш сайт вы сможете найти информацию о каждой картины, а также о художниках, которые ее создали. Мы предлагаем описания, контекст и интересные факты, чтобы помочь вам понять и насладиться каждым произведением искусства.
						</p>
					<p>Независимо от вашего уровня знаний об искусстве, мы приглашаем вас отправиться в увлекательное путешествие по его истории и развитию. Мы надеемся, что наш сайт станет вашим надежным источником информации, вдохновения и взаимодействия с искусством.
						</p>
					<p>Добро пожаловать в мир АРТГИД! Откройте галерею, исследуйте картины и погрузитесь в удивительное путешествие искусства.
					</p>
				</article>
			</Wrapper>
		</main>
	)
}

const Wrapper = styled.section`
  display: grid;
  gap: 4rem;
  img {
    width: 100%;
    display: block;
    border-radius: var(--radius);
    height: 400px;
    object-fit: cover;
  }
  p {
    line-height: 2;
    max-width: 45em;
    margin: 0 auto;
    margin-top: 1rem;
    color: var(--clr-grey-5);
  }
  .title {
    text-align: left;
  }
  .underline {
    margin-left: 0;
    width: 15rem;
  }
  @media (min-width: 768px) {
    img {
      height: 400px;
    }
  }
  @media (min-width: 992px) {
    grid-template-columns: 1fr 1fr;
    img {
      height: 635px;
    }
  }
`
export default AboutPage
