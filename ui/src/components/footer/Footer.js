import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faFacebook, faTwitter, faInstagram} from '@fortawesome/free-brands-svg-icons';
import "./Footer.css";

const Footer = () => {
    return (
        <div className="footer">
            <div className="sb_footer">
                <div className="sb_footer-links">
                    <div className="sb_footer-links_div">
                        <h4>For Business</h4>
                        <a href="/employer">
                            <p>Employer</p>
                        </a>
                        <a href="/healthPlan">
                            <p>heralt</p>
                        </a>
                        <a href="/customer">
                            <p>customer</p>
                        </a>
                    </div>
                    <div className="sb_footer-links_div">
                        <h4>Resources</h4>
                        <a href="/employer">
                            <p>Employer</p>
                        </a>
                    </div>
                    <div className="sb_footer-links_div">
                        <h4>Parthners</h4>
                        <a href="/qwe">
                            <p>CVS</p>
                        </a>
                    </div>
                    <div className="sb_footer-links_div">
                        <h4>Company</h4>
                        <a href="/about">
                            <p>about</p>
                        </a>
                        <a href="/about">
                            <p>press</p>
                        </a>
                    </div>
                    <div className="sb_footer-links_div">
                        <h4>Social</h4>
                        <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faFacebook} style={{margin: '10px'}}/>
                        </a>
                        <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faTwitter} style={{margin: '10px'}}/>
                        </a>
                        <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faInstagram} style={{margin: '10px'}}/>
                        </a>
                    </div>
                </div>
            </div>
            <hr/>
            <div className="sb_footer-below">
                <div className="sb_footer-copyright">
                    <p>
                        @{new Date().getFullYear()} CodeInn. All right reserved.
                    </p>
                </div>

                <div className="sb_footer-below-links">
                    <a href="/teras">
                        <p>Terms & Conditions</p>
                    </a>
                    <a href="/Privacy">
                        <p>Privacy</p>
                    </a>
                    <a href="/Security">
                        <p>Security</p>
                    </a>
                    <a href="/cokkie">
                        <p>Cokkie Declarations</p>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Footer;
