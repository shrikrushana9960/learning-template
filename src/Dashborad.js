import React,{useEffect,useState} from 'react'
import CourseCard from './components/CourseCard'
const Dashborad = () => {
    const [data,setData]=useState([]);
    useEffect(() => {
        const courseData=async()=>{
        const res=await fetch("http://localhost:5000/api/course");
        const data=await res.json();
        console.log(data)
        setData(data)
        }
        courseData();
       
    }, [])
    return (
      <div>
         
      {
      data.map((item)=>(
        <CourseCard id={item.id} title={item.title} thumbnailURL={item.thumbnailURL} price={item.price} videoLink={item._id} />
      ))}
      </div>
    );
}

export default Dashborad
