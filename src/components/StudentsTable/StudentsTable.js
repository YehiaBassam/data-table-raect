import React from "react";
import './StudentsTable.css';
import InformationTable from '../../containers/InformationTable/InformationTable';
import {connect} from "react-redux";


const StudentsTable = (props) => {

    if (props.language === 'en'){
        var allStudents = 'All';
        var underReview = 'Under Review';
        var initialAcceptance = 'Iitial Acceptance';
        var conditionalAcceptance = 'Conditional Acceptance';
        var rejected = 'Rejected';
        var direction = 'ltr'
    }

    else if (props.language === 'ar'){
        var allStudents = 'كل الطلاب';
        var underReview = 'قيد المراجعة';
        var initialAcceptance = 'قبول مبدئي';
        var conditionalAcceptance = 'قبول مشروط';
        var rejected = 'مرفوض';
        var direction = 'rtl'
    }

        return (
            <div className="header card">
                <div className='div_ul' style={{direction:direction}}>     
                    <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
                        <li className="nav-item mx-3" role="presentation">
                            <a className="nav-link active" id="pills-all-tab" data-toggle="pill" href="#pills-all" role="tab" aria-controls="pills-all" aria-selected="true">{allStudents}</a>
                        </li>
                        <li className="nav-item mx-3" role="presentation">
                            <a className="nav-link" id="pills-under_review-tab" data-toggle="pill" href="#pills-under_review" role="tab" aria-controls="pills-under_review" aria-selected="false">{underReview}</a>
                        </li>
                        <li className="nav-item mx-3" role="presentation">
                            <a className="nav-link" id="pills-initial_acceptance-tab" data-toggle="pill" href="#pills-initial_acceptance" role="tab" aria-controls="pills-initial_acceptance" aria-selected="false">{initialAcceptance}</a>
                        </li>
                        <li className="nav-item mx-3" role="presentation">
                            <a className="nav-link" id="pills-conditional_acceptance-tab" data-toggle="pill" href="#pills-conditional_acceptance" role="tab" aria-controls="pills-conditional_acceptance" aria-selected="false">{conditionalAcceptance}</a>
                        </li>
                        <li className="nav-item mx-3" role="presentation">
                            <a className="nav-link" id="pills-rejected-tab" data-toggle="pill" href="#pills-rejected" role="tab" aria-controls="pills-rejected" aria-selected="false">{rejected}</a>
                        </li>
                    </ul>
                </div>
    
    
                <div className="tab-content" id="pills-tabContent">
                    <div className="tab-pane fade show active" id="pills-all" role="tabpanel" aria-labelledby="pills-all-tab"><InformationTable/></div>
                    <div className="tab-pane fade" id="pills-under_review" role="tabpanel" aria-labelledby="pills-under_review-tab"><InformationTable/></div>
                    <div className="tab-pane fade" id="pills-initial_acceptance" role="tabpanel" aria-labelledby="pills-initial_acceptance-tab"><InformationTable/></div>
                    <div className="tab-pane fade" id="pills-conditional_acceptance" role="tabpanel" aria-labelledby="pills-conditional_acceptance-tab"><InformationTable/></div>
                    <div className="tab-pane fade" id="pills-rejected" role="tabpanel" aria-labelledby="pills-rejected-tab"><InformationTable/></div>
                </div>
            </div>
        )
}

const mapStateToProps = ( state ) => {
    return   { language:state.language }
};

export default connect (mapStateToProps)(StudentsTable);