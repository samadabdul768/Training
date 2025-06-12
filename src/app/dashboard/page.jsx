import React from 'react'
import Sidebar from '@/components/Sidebar'
import Headbar from '@/components/Headbar'
import Main from '@/components/Main'
import "../dashboard/dashboard.scss"
import Product from '@/components/Product'


const pages = () => {

  return (
    <div>
      <Headbar/>
      <main>
      <Sidebar/>
      <Main/>
      </main>
      <Product/>
    </div>
  )
}

export default pages
