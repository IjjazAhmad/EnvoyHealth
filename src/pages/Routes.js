import React from 'react'
import Header from '../components/Header'
import Frontend from './Frontend'
import Footer from '../components/Footer'
import { Route,Routes } from 'react-router-dom'
export default function Index() {
  return (
    <>
    <Header/>
    <main>
      <Routes>
        <Route path='/*' element={<Frontend/>} />
      </Routes>
    </main>
    <Footer/>
    </>
  )
}
