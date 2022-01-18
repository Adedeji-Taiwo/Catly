import React from "react";
import {useNavigate} from 'react-router-dom';
 import Button from "./Button";


const Dummy = () => {

     const navigate = useNavigate();

    const onBackClick = (e) => {
        e.preventDefault();

        //navigate(-1)
        navigate("/")
    }

    return(
         <>
     <div>
       THis page provides Dummy data of any kind for your project choice.
       It's not part of this project's scope.
    </div>
    <Button onClick={onBackClick} text = "Back to Home"/>
   </>
    )
}

export default Dummy;


