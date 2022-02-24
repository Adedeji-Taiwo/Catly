import React from "react";
import {useNavigate} from 'react-router-dom';
import Button from "./Button";



const About = () => {

     const navigate = useNavigate();

    const onBackClick = (e) => {
        e.preventDefault();

        //navigate(-1)
        navigate("/")
    }
 
    return  (
   <>
     <div>
        This is the About page. It's still work in progress.
    </div>
    <Button onClick={onBackClick} text = "Back to Home"/>
   </>
)
}

export default About;


