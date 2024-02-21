import React from "react"
import logo from "./assets/logo.svg"

export default function Navbar(){
    return(
        <div className="bg-[#F55A5A] flex items-center justify-center gap-2 p-5 mb-6">
            <img src={logo} alt="logo of globe" />
            <h1 className="text-white">My Travel Journal.</h1>
        </div>
    )
}