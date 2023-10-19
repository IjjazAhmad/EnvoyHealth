import React from 'react'
import Frontend from './Frontend'
import Authentication from './Authentication'
import { Route,Routes } from 'react-router-dom'
export default function Index() {
  return (
    <>
    <main>
      <Routes>
        <Route path='/*' element={<Frontend/>} />
        <Route path='auth/*' element={<Authentication/>} />
      </Routes>
    </main>
    
    </>
  )
}
