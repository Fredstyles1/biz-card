import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";

function Footer() {
    return (
        <div>
            <footer>
                <div className="iconAll">
                    <button className="iconF"><FontAwesomeIcon icon={faFacebookF} /></button>
                    <button className="iconI"><FontAwesomeIcon icon={faInstagram} /></button>
                    <button className="iconT"><FontAwesomeIcon icon={faTwitter} /></button>
                {/* <small className="foot">Copyright &copy; 2022 Alfred</small> */}
                </div>
            </footer>
        </div>
    )
}

export default Footer;