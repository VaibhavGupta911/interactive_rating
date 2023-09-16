import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { useContext } from "react";
import Acontext from "./Acontext";
export default function Card1() {
    const handlechange = useContext(Acontext)

    function number(target1) {
        handlechange.ratingchange(target1)
    }
    return (
        <>
            <div className="main-container">
                <div >    <FontAwesomeIcon className="icon" icon={faStar} size='2x' color=" hsl(25, 97%, 53%)" /> </div>
                <div className="heading">How did we do?</div>
                <p>Please let us know how we did with your support request. All feedback is apprecieted to help us improve our offering?</p>
                <ul>
                    <li><button onClick={() => number(1)} >1</button></li>
                    <li><button onClick={() => number(2)}>2</button></li>
                    <li><button onClick={() => number(3)}>3</button></li>
                    <li><button onClick={() => number(4)}>4</button></li>
                    <li><button onClick={() => number(5)}>5</button></li>

                </ul>
                <button className="sub-btn" onClick={handlechange.togglechange}>SUBMIT</button>
            </div>
        </>
    )
}