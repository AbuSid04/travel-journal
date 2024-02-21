import React from "react"
import img from "./assets/locLogo.svg"

export default function PlacesCard(props){
    console.log(props.title)
    return (
        <div className="flex px-8 py-4 items-center">
            <img 
                src={props.imageUrl} 
                alt={`image of ${props.title}`} 
                className="w-[7.8125rem] h-[10.25rem] object-cover rounded-md" 
            />
            <div className="ml-6">
                <div className="flex items-center ">
                    <img 
                        src={img} 
                        alt="Location logo" 
                        className="w-2 mr-2" 
                    />
                    <p className="text-[10.2px] uppercase mr-4 tracking-[0.25rem] text-red-950">{props.location}</p>
                    <p className="text-[10.2px] text-red-500 underline cursor-pointer"><a href={props.googleMapsUrl} target="_blank">View on Google Maps</a></p>
                </div>
                <h1 className="text-2xl font-bold my-1 text-red-950">{props.title}</h1>
                <p className="text-[10.2px] font-bold my-1 text-red-950">{props.startDate} - {props.endDate}</p>
                <p className="text-[10.2px] text-red-950">{props.description}</p>
            </div>
        </div>
    )
}