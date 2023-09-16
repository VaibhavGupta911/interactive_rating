

import { useContext } from "react";
import Acontext from "./Acontext";
export default function Card2() {
    const handlechange = useContext(Acontext)
    return (
        <>
            <div className="main-container">
               
                <div className="heading2">{`You selected ${handlechange.rating} out of 5`}</div>
                <div className="heading">Thank You!</div>
                <p>We appreciate you taking the time to give a rating if you ever need more support, dont hesitste to get in touch!</p>
             
                <button  className="sub-btn" onClick={handlechange.togglechange}>RATE AGAIN</button>
            </div>
        </>
    )
}