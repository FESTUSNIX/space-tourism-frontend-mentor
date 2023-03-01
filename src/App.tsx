import { Route } from 'react-router'
import { Routes, BrowserRouter } from 'react-router-dom'
import './App.css'
import { Navbar } from './components'
import { Crew } from './pages/Crew'
import { Destinations } from './pages/Destinations'
import { Home } from './pages/Home'
import { Technology } from './pages/Technology'

function App() {
	return (
		<div className='App'>
			<BrowserRouter>
				<Navbar />
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/destinations/' element={<Destinations />} />
					<Route path='/crew' element={<Crew />} />
					<Route path='/technology' element={<Technology />} />
				</Routes>
			</BrowserRouter>
		</div>
	)
}

export default App
