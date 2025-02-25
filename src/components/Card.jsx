import React from 'react'
import {FcLike, FcLikePlaceholder} from "react-icons/fc"
import { toast } from 'react-toastify';
export default function Card(props) {
  let course=props.course;
  let likedCourses=props.likedCourses;
  let setLikedCourses=props.setLikedCourses;
  const clickHandler=()=>{
      if(likedCourses.includes(course.id)){
        setLikedCourses((prev)=>prev.filter((cid)=>(cid !==course.id)));
        toast.warning("Like removed")
      }
      else
      {
        if(likedCourses.length===0)
          setLikedCourses([course.id]);
        else
        setLikedCourses((prev)=>[...prev,course.id]);
      toast.success("Liked Successfully")
      }

  }
  return (
    <div className="w-[300px] bg-bgDark bg-opacity-80 rounded-md overflow-hidden">
        <div className='relative'>
             <div className="relative">
              <img src={course.image.url} alt="course_img"/>
             </div>
            <div className="w-[30px] h-[30px] rounded-full bg-white grid place-items-center absolute right-2 -bottom-3 shadow-xl">
              <button onClick={clickHandler}>
                  {
                    likedCourses.includes(course.id)?
                    (<FcLike fontSize="1.75rem"/>):(<FcLikePlaceholder fontSize="1.75rem"/>)
                  }
              </button>
            </div>
        </div> 
        <div className="p-4 text-white"> 
          <p className="font-semibold text-lg leading-6">{course.title}</p>
          <p className="text-base mt-2" >{
                                              course.description.length>100?
                                              (course.description.substr(0,100))+"...":(course.description)
                                          }
          </p>
        </div>
    </div>
  )
}
