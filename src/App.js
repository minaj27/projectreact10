import React from "react";
import "./components/common.css"
import { WordList } from "./components/WordList";
import { StateList } from "./components/StateList";
import { GirlsList } from "./components/GirlsList";
import { BranchList } from "./components/BranchList";
import { DoctorList } from "./components/DoctorList";
import { CardList } from "./components/CardList";



function App() {
  return (
   <div className='super'>
    <WordList data={["Table","Fan","Led","Chair","Laptop","Camera","WhiteBoard","Keyboard","Mouse"]} /> 
    <StateList data={["Maharashtra","Hyderabad","Delhi","Rajasthan","Kashmir","Goa"]} /> 
    <GirlsList data={["Minaj","Monika","Smita","Hafsa","Tehreen","Barira","Anshara"]} /> 
    <BranchList data={["Mechanical", "Civil", "Electronic", "Electrical", "Computer", "Textile"]} />
    <DoctorList data={["Mehta", "Asthana", "Rishab Singh", "Koratkar", "Kavita Singh", "Ramanarao", "Reddy", "Sohail Khan", "Kulkarni"]} />
    <CardList data={[{name:"Radha Kishan", city:"Delhi"},{name:"Dilip Jha", city:"Pune"},{name:"Kishan Kumar", city:"Surat"},{name:"Rashmi Sharma", city:"Itarsi"}]}/>
   </div>
  );
}

export default App;
