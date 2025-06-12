import React from 'react'

const Product = async() => {
    const res = await fetch('https://fakestoreapi.com/products')
    const data = await res.json()
    console.log(data)
  return (
    <div>
      {data.map((item)=>{
        return <div key={item.id}>
            <img src={item.image} width={100}></img>
            <p>{item.title}</p>
        </div>
      })}
    </div>
  )
}

export default Product
