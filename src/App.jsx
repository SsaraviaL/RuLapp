
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  useLocation
} from 'react-router-dom'

import Login from './pages/login'
import Home from './pages/home'
import RoutesPage from './pages/routes'
import Reservations from './pages/reservations'
import Profile from './pages/profiles'
import Navbar from './components/navbar'

function AppContent() {
  const location = useLocation()

  return (
    <>
      {location.pathname !== '/login' && <Navbar />}

      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/routes" element={<RoutesPage />} />
        <Route path="/reservations" element={<Reservations />} />
        <Route path="/profile" element={<Profile />} />

        <Route path="/" element={<Navigate to="/login" replace />} />
        <Route path="*" element={<Navigate to="/login" replace />} />
      </Routes>
    </>
  )
}

function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  )
}

export default App
