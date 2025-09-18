
import { Route, Routes } from 'react-router-dom'
import './App.css'
import UserList from './pages/UserList'
import UserDetails from './pages/UserDetails'
import AddUser from './pages/AddUser'

function App() {
  return (
   <Routes>
    <Route path='/' element={<UserList/>} />
    <Route path="/add" element={<AddUser/>} />
    <Route path='/users/:id' element={<UserDetails/>} />
   </Routes>
  )
}

export default App
