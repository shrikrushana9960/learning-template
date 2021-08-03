import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
export const CourseHome = () => {
  const [data, setData] = useState([]);
    const main=useParams();
    const [url,setUrl]=useState("");
  useEffect(() => {
    const courseData = async () => {
      const res = await fetch(`http://localhost:5000/api/course/${main.id}`, {
        method: "GET",
      
      });

      const video=await res.json();
    
      setData(video.videoLink);
}
    courseData();
  }, []);

  
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      <h1> Your Lectures</h1>
      {url && (
        <iframe
          width="420"
          height="315"
          src={`https://www.youtube.com/embed/${url}`}
        ></iframe>
      )}
      {data.map((item, index) => (
        <button
          style={{ width: "100px", margin: "10px" }}
          onClick={() => {
            setUrl(item.split("/")[3]);
            console.log(url);
          }}
        >
          <h2>{index + 1}</h2>
        </button>
      ))}
    </div>
  );
};
