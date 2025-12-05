import React, { useEffect, useState } from 'react'
import logo from './assets/note.png'
import pic from './assets/pic.png'
const Upper = () => {



    const [heading,setHeading] = useState(()=>{
        const saved = localStorage.getItem('heading')
        return saved? JSON.parse(saved) : []
    })

    const [desc,setDesc] = useState(()=>{
        const saved2 = localStorage.getItem('desc')
        return saved2? JSON.parse(saved2):[]
    })

    const [date,setDate] = useState(()=>{
        const saved3 = localStorage.getItem('date')
        return saved3? JSON.parse(saved3):[]
    })

    useEffect(()=>{  {/*saving everything if change made*/}
        localStorage.setItem('heading',JSON.stringify(heading))
        localStorage.setItem('desc',JSON.stringify(desc))
        localStorage.setItem('date',JSON.stringify(date))
    },[heading,desc])

    const [h,seth] = useState("")
    const [d,setd] = useState("")
    const [da,setda] = useState(new Date().getDate()+"-" + new Date().getMonth() + "-" + new Date().getFullYear())

    const fun = (e)=>{
        seth(e.target.value)
    }
    const fun2 = (e)=>{
        setd(e.target.value)
    }

    
    const handlesubmit = (e)=>{
        e.preventDefault()
        if(h==="" && d==""){
            alert("Cannot add empty!!!")
        }
        else{
            console.log("Submitted")
            setHeading([...heading,h]);
            setDesc([...desc,d]);
            setDate([...date,da]);
            seth("")
            setd("")
        }
    }

    const handledelete = (e)=>{
        setHeading(heading.filter((_,index)=>index!==e))
        setDesc(desc.filter((_,index)=>index!==e))
        setDate(date.filter((_,index)=>index!=e))
    }


  return (
    <>
        <div className='border-b pb-2 pt-2 border-gray-400 flex gap-4 items-center '>
            <img src={logo}  alt="Logo" className='bg-gray-400 w-15 rounded' />
            <h1 className='text-3xl'>Get It Done.</h1>
        </div>
        <div className='flex flex-col gap-4 p-1 '>
            <h1>A simple place to store notes & tasks</h1>
            <form action="">
                <input type="text" placeholder='Enter heading' value={h} onChange={fun} className='border p-2 rounded mb-4 w-full text-2xl outline-none focus:border-amber-300' />
                <br />
                <textarea name="" id="" placeholder='Enter description here' value={d} onChange={fun2} className='border p-2 rounded w-full min-h-50 outline-none focus:border-amber-300'></textarea>
                <br />
                <button type='Submit' onClick={handlesubmit} className='bg-gray-300 text-black p-2 rounded cursor-pointer w-full hover:bg-gray-600 outline-none'>Add Note</button>
            </form>
        </div>

        {/* lower div */}
        {heading.length!=0? (
            <div className=' p-2  rounded text-white grid md:grid-cols-2 lg:grid-cols-4 gap-7 justify-items-center h-screen  '>
                {heading.map((h,index)=>(
                    <div className='border rounded-2xl p-2 w-70 h-60 hover:scale-110 transition-all duration-300 bg-cover  bg-center relative 'onDoubleClick={()=>handledelete(index)}>
                    <h1 className='text-2xl font-bold'>{h}</h1>
                    <h1>{desc[index]}</h1>
                    <h2 className='text-xs text-gray-400 absolute bottom-1 right-2'>Added on {date[index]}</h2>
                </div>
                ))}
            </div>
        ): <div className='justify-items-center h-full'>
            <img src={pic} alt="" className='w-50 rounded-2xl'/>
            <br />
            <h1>Wohoo!!! Sit back & relax or add more notes</h1>

        </div>
        }
    </>
    
  )
}

export default Upper
