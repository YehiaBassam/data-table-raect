import React from "react";
import Backdrop from '../UI/Backdrop/Backdrop';
import './Sidebar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight , faUserCircle , faUserFriends , faCalendarAlt , faSignOutAlt } from '@fortawesome/free-solid-svg-icons';


const Sidebar = (props) => {
        return (
            props.showsidebar ?  
            <div>
                <Backdrop hideSideBar={props.hideSideBar}/>
                <div className='sidedrawer'>
                    <div className="user d-flex ml-2 align-items-center">
                        <h4 className="mr-2 text-muted" ><FontAwesomeIcon icon={faChevronRight}></FontAwesomeIcon></h4>
                        <h3 className="text-primary mr-2"><FontAwesomeIcon icon={faUserCircle}></FontAwesomeIcon></h3>
                        <h5 className="text-muted">admission male</h5>
                    </div>
                    <hr/>
                    <div>
                        <div className="sidebarlink d-flex mb-1 pl-2 pt-2">
                            <h5 className="mr-3 text-primary"><FontAwesomeIcon icon={faUserFriends}></FontAwesomeIcon></h5>
                            <a className="text-muted">Application</a>
                        </div>
                        <div className="sidebarlink d-flex mb-1 pl-2 pt-2">
                            <h5 className="mr-4 text-primary"><FontAwesomeIcon icon={faCalendarAlt}></FontAwesomeIcon></h5>
                            <a className="text-muted">Dates</a>
                        </div>
                        <div className="sidebarlink d-flex mb-1 pl-2 pt-2">
                            <h5 className="mr-4 text-primary"><FontAwesomeIcon icon={faSignOutAlt}></FontAwesomeIcon></h5>
                            <a className="text-muted">Sign Out</a>
                        </div>
                    </div>
                </div>
            </div> : null
        )
}

export default Sidebar;