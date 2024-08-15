import React from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
    const data = useLoaderData()
    
  return (
    <>
    <div className='text-4xl p-10 text-center bg-gray-600 text-white'>Github followers :- {data.followers}<img src={data.avatar_url} alt="" /></div>
    </>
  )
}

export default Github

export const githubInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/bhardwajishan');
    return response.json()
}