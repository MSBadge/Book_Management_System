import './App.css'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { Home } from './components/Home'
import { Navbar } from './components/Navbar'
import { Dashboard } from './components/Dashboard'
import { About } from './components/About'
import { Contact } from './components/Contact'

function App() {

  return (
    <BrowserRouter>
      <Navbar />
      <div className='pt-20'>
        <Routes>
          <Route path='/' element={<Navigate to='/dashboard' replace />} />
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/list' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
