import React from "react"

export default function Navbar(){
    return(
        <div className="bg-[#F55A5A] flex items-center justify-center gap-2 p-5 mb-6">
            <img src="./src/assets/logo.svg" alt="logo of globe" />
            <h1 className="text-white">My Travel Journal.</h1>
        </div>
    )
}