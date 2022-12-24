import React,{useState,useEffect} from "react";
import axios from "axios"
import Navbar from '../headers/Navbar';
import Newnav from '../newnavbaar/Newnav.js';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';



import "./Brush.css"
import BrushCard from "./BrushCard";
import Footer from "../Footer/Footer";
const Brush=()=>{
    const [data,setData]=useState([]);
    const[sortByPrice,setSortByPrice]= useState(null)

    function handleSortByPrice(e){
        setSortByPrice(e.target.value)
        if(e.target.value==="l2h"){
            data.sort((a,b)=>a.price-b.price)
            setData(data);
        }
        else if(e.target.value==="h2l"){
            data.sort((a,b)=>b.price-a.price)
            setData(data);
        }
        else{
            setData(data)
        }
  
      }

    useEffect(()=>{
        axios.get("https://render-mock-server.onrender.com/brush")
        .then((res)=>setData(res.data));
    },[])
    return (
    <div>
    <Navbar/>
    <Newnav/>
    {/* Top Banner after nav starts from here */}
    <div id="banner">
       <div id="div1B">
         <img id="img1B" src="https://d32baadbbpueqt.cloudfront.net/Collection/39da2bc6-d83c-4350-a2b1-0c0ec7a721a8.jpg" alt=""/> 
       </div>
    </div>
    {/* Top Banner after nav ends from here */}

    {/* Breadcrum after banner starts from here */}
    <div id="div2B">
    <div id="left">
        <p>Home</p> <p>/</p><p style={{fontWeight:"bold",color:"black"}}>Brushes</p>
    </div>
    </div>

    {/*Product Display starts from here*/}
    <div id="parentCatB" >
    <div id="sortingB">
    <FormControl style={{width:"100%"}}h>
    <InputLabel >Relevance </InputLabel>
            <Select  onChange={(e)=>handleSortByPrice(e)} style={{width:"100%",color:"black"}}>
                <MenuItem value='l2h'>Low to high</MenuItem>
                <MenuItem value='h2l'>High to low</MenuItem>
            </Select>
    </FormControl>
    </div>
    <div id="containerB">
        {data.map((e)=><BrushCard key={e.id} id={e.id} image={e.image} title={e.title} price={e.price} rating={e.rating}/>)}
    </div>
    </div>
     {/*Product Display ends here*/}
     <Footer/>
    </div>
    )
}
export default Brush;