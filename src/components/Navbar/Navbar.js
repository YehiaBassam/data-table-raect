import React from "react";
import './Navbar.css';
import almareefa from '../../assets/images/almaarefa.PNG';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';
import {connect} from "react-redux";
import * as actionCreators from '../../store/actions/actions';

const Navbar = (props) => {
        return (
        <div className="navbar container-fluid">
            <div className="div_lang">
                <ul className="social d-flex">
                    <li id="en_click" className="button_lang" onClick={props.setEnglish}>EN</li>
                    <li id="ar_click" className="button_lang" onClick={props.setArabic}>AR</li>
                </ul>
                <span className="ml-4">contactus@msca.edu.sa</span>
            </div>

            <div>
                <img src={almareefa} alt='image'/>
            </div>

            <div className="div_icon">
                <h3 className="text-primary mr-2" onClick={props.show}><FontAwesomeIcon icon={faUserCircle}></FontAwesomeIcon></h3>
            </div>
        </div>
        )}
        

const mapStateToProps = ( state ) => {
    return   { language : state.language }
};

const mapDispatchToProps = ( dispatch ) => {
    return  {   setArabic  : () => dispatch(actionCreators.setArabic()),
                setEnglish : () => dispatch(actionCreators.setEnglish())}
};

export default connect (mapStateToProps, mapDispatchToProps)(Navbar);

