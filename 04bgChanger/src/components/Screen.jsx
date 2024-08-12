import React, { useState } from 'react'

const Screen = () => {

    const [color,setColor]=useState("olive")

    const colorRed=()=>{
        setColor(color=>color="rgb(226, 66, 66)")
    }
    const colorYellow=()=>{
        setColor(color=>color="#9c9c1b")
    }
    const colorBlack=()=>{
        setColor(color=>color="black")
    }
    const colorGray=()=>{
        setColor(color=>color="grey")
    }
    const colorLightGreen=()=>{
        setColor(color=>color="palegreen")
    }
    const colorAquaMarine=()=>{
        setColor(color=>color="aquamarine")
    }
    const colorRoyalblue=()=>{
        setColor(color=>color="royalblue")
    }
    const colorPink=()=>{
        setColor(color=>color="pink")
    }

  return (
    <div className='h-[100vh] w-full' style={{backgroundColor:color}}>
        <div className="fixed flex w-full flex-wrap justify-center bottom-10 h-16 px-4">
            <div className="justify-center shadow-lg bg-white    rounded-2xl px-4 py-2 flex flex-wrap gap-4">
                <button className='px-4 rounded-lg text-white font-bold' style={{backgroundColor:"rgb(226, 66, 66)"}} onClick={colorRed}>Red</button>
                <button className='px-4 rounded-lg text-white font-bold' style={{backgroundColor:"#9c9c1b"}} onClick={colorYellow}>Yellow</button>
                <button className='px-4 rounded-lg text-white font-bold' style={{backgroundColor:"black"}} onClick={colorBlack}>Black</button>
                <button className='px-4 rounded-lg text-white font-bold' style={{backgroundColor:"grey"}} onClick={colorGray}>Gray</button>
                <button className='px-4 rounded-lg text-white font-bold' style={{backgroundColor:"palegreen"}} onClick={colorLightGreen}>Light Green</button>
                <button className='px-4 rounded-lg text-white font-bold' style={{backgroundColor:"aquamarine"}} onClick={colorAquaMarine}>Aqua Marine</button>
                <button className='px-4 rounded-lg text-white font-bold' style={{backgroundColor:"royalblue"}} onClick={colorRoyalblue}>Royal blue</button>
                <button className='px-4 rounded-lg text-white font-bold' style={{backgroundColor:"hotpink"}} onClick={colorPink}>Pink</button> 
            </div>
        </div>
    </div>
  )
}

export default Screen