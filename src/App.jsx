import React, { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import Filter from './components/Filter'
import Cards from './components/Cards'
import {apiUrl,filterData} from "./data.js"
import { toast } from 'react-toastify'
import Spinner from './components/Spinner.jsx'
export default function App() {
  const [courses,setCourses]=useState([]);
  const[loading,setLoading]=useState(false);
  const[category,setCategory]=useState(filterData[0].title);
  async function fetchData()
  {
    setLoading(true);
    try{
      let response=await fetch(apiUrl);
      let output=await response.json();
      setCourses(output.data);
    }
    catch(error)
    {
      toast.error("Something is wrong");
    }
    setLoading(false);
  }
  useEffect(()=>{
      fetchData();
  },[])
  return (
    <div className="flex flex-col " >
      <div >
        <Navbar/>
      </div>
      <div className="bg-bgDark2 min-h-screen">
        <div >
            <Filter filterData={filterData} category={category} setCategory={setCategory}/>
        </div>
        <div className="w-11/12 max-w-[1200px]  mx-auto flex flex-wrap items-center justify-center">
          {
              loading?(<Spinner/>):(<Cards courses={courses} category={category}/>)
          }
        </div>
      </div>
      
    </div>
  )
}
