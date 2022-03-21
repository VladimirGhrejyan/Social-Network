import React, {useEffect} from 'react'
import {Routes, Route} from 'react-router-dom'
import AppLayout from './components/AppLayout'
import Home from './pages/Home'
import Registration from './pages/registration/Registration'
import Login from './pages/login/Login'
import { auth } from './store/actions/userActions'
import { useDispatch } from 'react-redux'
import MyProfile from './pages/myprofile/MyProfile'
import Users from './pages/users/Users'
import Posts from './pages/posts/Posts'
import RequireAuth from './hoc/RequireAuth'

const App = () => {
  const dispatch = useDispatch()

  useEffect( () => {
    dispatch(auth())
  }, [])

  return (
    <Routes>
      <Route path='/' element={<AppLayout />}>
        <Route index element={<Home />}/>
          <Route path='/registration' element={<Registration />}/>
          <Route path='/login' element={<Login />} />
          <Route path='/myprofile' element={<RequireAuth><MyProfile /></RequireAuth>} />
          <Route path='/users' element={<RequireAuth><Users /></RequireAuth>} />
          <Route path='/posts' element={<RequireAuth><Posts /></RequireAuth>} />
      </Route>
    </Routes>
  )
}

export default App
