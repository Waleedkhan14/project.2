import React from "react";
import "./form.css"
const App = () => {

    return (
        <>
         <div class="container">
      <div class="child-A">
   <h1>Partner Management </h1>

    <label for="username">PARTNER NAME</label>
    <input type="text" id="PARTNER NAME" placeholder="Enter PARTNER NAME"/>

    <label for="username">ADDRESS</label>
   <input type="text" id="ADDRESS" placeholder="Enter YOUR ADDRESS"/>
    
   
     <label  for="STATE">STATE</label>
     <select>
      <option> a</option>
      <option> a</option>
      
      </select>

    <label for="EMAIL">EMAIL</label>
      <input type="text" id="EMAIL" placeholder="Enter YOUR EMAIL"/>

       <label for="">WEBSITE</label>
      <input type="text" id="WEBSITE" placeholder="Enter YOUR WEBSITE"/>
    </div>
    
       <div class="child_B">

        <label for="CITY">CITY</label>
    <input type="text" id="CITY" placeholder="Enter YOUR CITY"/>

    
       <label for="ZIP">ZIP CODE</label>
      
      <select>
      <option> a</option>
      <option> a</option>
      
      </select>

       <label for="">MOBILE</label>
      <input type="text" id="MOBILE" placeholder="Enter YOUR MOBILE"/>

      <label for="LOGO">LOGO</label>
      <img src="#"/>
 </div>
</div>
<div class=" child_container">
      <span>
      <label for="">STORE</label>
      <select>
        <option> WALLMART</option>
        <option> a</option>
        
        </select>
        <button onclick="">+</button>
        <button onclick="">-</button>
    </span>
    
    </div>
    <div class="colum-1">

<div class="Row-2">
  <h3>CONTACT PERSON</h3>
  <label for="">NAME</label>
  <input type="text" id="NAME" placeholder="Enter YOUR NAME"/>

  <label for="">EMAIL</label>
  <input type="text" id="EMAIL" placeholder="Enter YOUR EMAIL"/>
</div>

 <div class="Row-1">
 
  <label for="">MOBILE</label>
  <input type="text" id="MOBILE" placeholder="Enter YOUR MOBILE"/>

  <button onclick="">+</button>
  
  <button onclick="">X</button>
 </div>

</div>
    


<button onclick="">SAVE</button>

    
    

       

      
        </>
    );

};
export default App;