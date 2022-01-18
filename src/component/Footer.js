import React from "react";
import {faArrowAltCircleUp} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Footer = ({date}) => {

    return(
        <footer>
            <div className="footer-wrapper">
                <p>Copyright &copy;{date} 30 Days of React</p>
                <p>Join 30 <a href="30daysofreact.com">Days of React Challenge</a></p>
                <p>Designed and Built by <a href="##">Asabeneh Yetayeh</a></p>
                <p><a href="#top"><FontAwesomeIcon icon={faArrowAltCircleUp}/></a></p>
            </div>
        </footer>
    )
}

export default Footer;