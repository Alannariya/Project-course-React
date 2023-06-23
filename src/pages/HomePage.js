import React from 'react'
import { FeaturedPaintings, Hero, Services, Contact } from '../components'
const HomePage = () => {
  return (
		<main>
			<Hero/>
			<FeaturedPaintings/>
			<Services/>
			<Contact/>
		</main>
	)
}

export default HomePage
