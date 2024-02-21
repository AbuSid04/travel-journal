import React from "react"
import Data from "./Data"
import PlacesCard from "./PlacesCard"
import Navbar from "./Navbar"

export default function App(){

  const dataArr = Data.map(item => {
    return (
      <PlacesCard 
        key = {item.id}
        {...item}
      />
    )
  })

  return (
    <div className="pb-4">
      <Navbar />
      {dataArr}
    </div>
  )
}