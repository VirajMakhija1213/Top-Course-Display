import React from 'react'

export default function Filter(props) {
  let filterData=props.filterData;
  let category=props.category;
  let setCategory=props.setCategory;
  const filterHandler=(title)=>{
    setCategory(title);
  }
  return (
    <div className="w-11/12 mx-auto flex flex-wrap max-w-max space-x-4 gap-y-4 py-4 justify-center">
      {filterData.map((data)=>{
        return (
          <button key={crypto.randomUUID()} className={`
            text-lg px-2 py-1 rounded-md bg-black border-2 bg-opacity-60 hover:bg-opacity-50 text-white transition-all duration-300 font-medium
          `} onClick={()=>filterHandler(data.title)}>{data.title} </button>
        )
      })}
    </div>
  )
}
