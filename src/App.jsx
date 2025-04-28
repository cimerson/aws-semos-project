import { Routes, Route } from 'react-router'

import Home from './pages/Home'
import Team from './pages/Team'
import Thanks from './pages/Thanks'
import Layout from './components/Layout'
import Projects from './pages/Projects'


const App = () => {

    return (
        <Routes>
            <Route path='/' element={<Layout />}>
                <Route index element={<Home />} />
                <Route path='projects' element={<Projects />} />
                <Route path='team' element={<Team />} />
                <Route path='thanks' element={<Thanks />} />
            </Route>
        </Routes>

    )
}

export default App
