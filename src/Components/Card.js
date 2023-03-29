import {useState} from "react";

function Card({id,name,info,price,image,removeTour}){
    const [readmore, setReadmore] = useState(false);
    // const discription = `${info.substring(0,200)}...`;
    const description = readmore ? info :`${info.substring(0,200)}....`;


    function readmoreHandler(){
        setReadmore(!readmore);         //switch true & false
    }

 

    return(
        <div className="w-[100%] p-5 bg-white shadow-lg rounded-md my-5 mx-3 shadow-black lg:w-[30%] md:w-[40%]">
            <img src={image} alt="image" className="w-[100%] h-[300px] object-cover lg:w-[400px]"/>
            <h3 className="text-green-600 text-2xl bold mt-4">₹ {price}</h3>
            <h2 className="text-3xl font-medium">{name}</h2>
            <p className="discription mt-2">{description} <span className="text-blue-400 cursor-pointer" onClick={readmoreHandler}> {readmore ? `Show Less`: `Read More`} </span></p>
            <button className="bg-black text-white text-sm py-2 px-4 rounded-sm mt-4" onClick={ ()=> removeTour(id)}>Not Intereted</button>
        </div>
    );
}

export default Card;