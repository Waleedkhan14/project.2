import { useEffect } from "react";
import { useState } from "react"
  // import '../node.modules/bootstrap/dist/css/bootstrap.min.css'
  import "./Api.css"

function FetchData  (){

const [records,setRecords] = useState([])
 
useEffect(()=> {
    fetch('https://dummyjson.com/products')
    .then(response => response.json ())
    .then(data => {
        console.log("DAta ",data)
        setRecords(data.products.splice(25,2,))})
    .catch(err => console.log(err))
},[])

  return(

    <>
    <div className="Abc">
     <div className="Abe">
      <h1 className="Abr">FaceBook Page</h1>
        {records.map(item=> (
            <>
            <li>{item.title}</li>
            {item.images.map(imageItem => (
                <img src={imageItem}/>
                
            ))}
            <div className="flex-box">
            <div class="child-flex">Like</div>
       <div class="child-flex">Comment</div>
      <div class="child-flex">Share</div>
            </div>
            </>
        ))}
     </div>
     </div>
    </>
  );  
};

export default FetchData;