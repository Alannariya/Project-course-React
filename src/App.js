import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Navbar, Sidebar, Footer } from './components'
import {Home, About, Gallery, SinglePaintingPage, Error, AuthWrapper} from './pages'


function App() {
  return (
		<AuthWrapper>
		<Router>
			<Navbar/>
			<Sidebar/>
			<Routes>
				<Route path='/' element={<Home/>} />
				<Route path='about' element={<About/>} />
				<Route path='gallery' element={<Gallery/>} />
				<Route path='gallery/:id' element={<SinglePaintingPage/>} />
				<Route path='*' element={<Error/>} />
			</Routes>
			<Footer/>
		</Router>
		</AuthWrapper>
	)
}

export default App
