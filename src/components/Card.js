import React from "react";
// import reviews from "../data";
import {FaQuoteRight,FaQuoteLeft} from 'react-icons/fa'
//import reviews from "../data";



function Card(props){
    let review=props.review;
    return(
        <div className="flex flex-col md:relative">

<div className="absolute left-[-7rem] z-[20] mx-auto top-[-7rem] ">
<img className="aspect-square rounded-full w-[140px] h-[140px] z-[30]"
 src={review.image}/> 
<div className="w-[140px] h-[140px] bg-violet-500 rounded-full absolute top-[-6px]  z-[-10] "></div>
</div>
       
<div className="text-center mt-7">

<h2 className="font-bold text-2xl capitalize tracking-wider">{review.name}</h2>
<p className="text-violet-300 uppercase text-sm">{review.job}</p>
</div>


<div className="text-violet-400 mx-auto mt-5" > <FaQuoteLeft/>  </div>
<div className="text-center mt-4 text-slate-500 "><p>{review.text}</p></div>
<div className="text-violet-400 mx-auto mt-5" > <FaQuoteRight/> 
 </div>

 </div>
    )
}
export default Card;