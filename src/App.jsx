// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// import React from 'react'
import { Routes, Route } from 'react-router'

import Home from './pages/Home'
import Team from './pages/Team'
import Thanks from './pages/Thanks'
import Layout from './components/Layout'


const App = () => {
  // const [count, setCount] = useState(0)

  return (
    // <>
    //   <div>
    //     <a href="https://vite.dev" target="_blank">
    //       <img src={viteLogo} className="logo" alt="Vite logo" />
    //     </a>
    //     <a href="https://react.dev" target="_blank">
    //       <img src={reactLogo} className="logo react" alt="React logo" />
    //     </a>
    //   </div>
    //   <h1>Vite + React</h1>
    //   <div className="card">
    //     <button onClick={() => setCount((count) => count + 1)}>
    //       count is {count}
    //     </button>
    //     <p>
    //       Edit <code>src/App.jsx</code> and save to test HMR
    //     </p>
    //   </div>
    //   <p className="read-the-docs">
    //     Click on the Vite and React logos to learn more
    //   </p>
    // </>
    // <Container maxW='container.xl' pt={10} pb={10}>
    //   <ButtonGroup spacing='6' mb={6} width={'full'} justifyContent={'center'}>
    //     {/* {location.pathname !== '/' && (
    //       <Button as={Link} to='/'>
    //         Our Team
    //       </Button>
    //     )}
    //     {location.pathname !== '/orders' && (
    //       <Button as={Link} to='/orders'>
    //         View Orders
    //       </Button>
    //     )} */}
    //     <Button as={Link} to='/'>
    //       Home
    //     </Button>
    //     <Button as={Link} to='/team'>
    //       Our Team
    //     </Button>
    //     <Button as={Link} to='/thanks'>
    //       Thanks
    //     </Button>
    //   </ButtonGroup>
    //   <Routes>
    //     <Route path='/' element={<Home />} />
    //     <Route path='/team' element={<Team />} />
    //     <Route path='/thanks' element={<Thanks />} />
    //   </Routes>
    // </Container>

    <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='team' element={<Team />} />
          <Route path='thanks' element={<Thanks />} />
        </Route>
      </Routes>

  )
}

export default App
