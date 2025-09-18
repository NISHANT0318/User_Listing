
import { Route, Routes } from 'react-router-dom'
import './App.css'
import UserList from './pages/UserList'
import UserDetails from './pages/UserDetails'

function App() {
  return (
   <Routes>
    <Route path='/' element={<UserList/>} />
    <Route path='/users/:id' element={<UserDetails/>} />
   </Routes>
  )
}

export default App
