import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Navbar } from './components'
import { Hero, Showcase } from './sections'
import { MotionConfig } from 'framer-motion'
import { Login } from './pages/login'
import { Register } from './pages/register'

function App() {
  return (
    <BrowserRouter>
      <MotionConfig reducedMotion="user">
        <Routes>
          <Route
            path="/"
            element={
              <div className="relative flex flex-col justify-center min-h-screen">
                <Navbar />
                <Hero />
                <Showcase />
              </div>
            }
          />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </MotionConfig>
    </BrowserRouter>
  )
}

export default App
