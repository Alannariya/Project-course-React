import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Navbar, Sidebar, Footer } from './components'
import {Home, About, Gallery, SinglePaintingPage, Error} from './pages'


function App() {
  return (
		<Router>
			<Navbar/>
			<Sidebar/>
			<Switch>
				<Route exact path='/'>
					<Home/>
				</Route>
				<Route exact path='/about'>
					<About/>
				</Route>
				<Route exact path='/gallery'>
					<Gallery/>
				</Route>
				<Route exact path='/gallery/:id' children={<SinglePaintingPage/>}/>
				<Route path='*'>
					<Error/>
				</Route>
			</Switch>
			<Footer/>
		</Router>
	)
}

export default App
