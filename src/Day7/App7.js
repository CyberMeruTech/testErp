import React from 'react'
import APIConnect from './APIConnect'
import TimerF from './TimerF'
import SingleProduct from './SingleProductAndUpdate'
import AddProduct from './AddProduct'
import ShowAllProduct from './ShowAllProduct'
import DeleteProduct from './DeleteProduct'


export default function App7() {
  return (
    <div>
        {/* <APIConnect></APIConnect> */}
        {/* <h1>Timer in react</h1>
        <TimerF></TimerF>
        <hr></hr> */}
        <h1 style={{textAlign:"center"}}>Crud Oprations</h1>
        <AddProduct></AddProduct>
        <h1>Product Search</h1>
        <SingleProduct></SingleProduct>
        <h1>Show All</h1>
        <ShowAllProduct></ShowAllProduct>
        <h1>Delete Product</h1>
        <DeleteProduct></DeleteProduct>
    </div>
  )
}
