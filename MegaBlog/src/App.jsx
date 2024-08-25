import React,{ useState } from 'react'
import {useDispatch} from 'react-redux'
import './App.css'
import authService from './appwrite/auth'
import { useEffect } from 'react'
import { login, logout } from './store/authSlice'

function App() {
  const [loading, setLoading] = useState(true)
  const dispatch = useDispatch()

  useEffect(()=>{
    authService.currentUser().then((userData)=>{
      if(userData){
        dispatch(login({userData}))
      }else {
        dispatch(logout( ))
      }
    }).finally(()=> setLoading(false))
  },[])

  return (
    <>
      <h1>A blog website with Appwrite</h1>
    </>
  )
}

export default App
