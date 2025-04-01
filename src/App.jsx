
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import './App.css'
import Login from"./pages/login/Login"
import Dashboard from './pages/dashboard'
import MainLayout from './layouts/MainLayout'

function App() {

  return (
   <>
   
   <BrowserRouter>
   <Routes>
<Route path="/" element={<Login/>}/>
<Route path="/login" element={<Login/>}/>
<Route path='/dashboard' element={<MainLayout>
  <Dashboard/>
</MainLayout>}/>

   </Routes>
   
   </BrowserRouter>
   </>
  )
}

export default App
