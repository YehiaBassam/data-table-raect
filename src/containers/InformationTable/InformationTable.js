import React , { Component  , Fragment } from 'react';
import './InformationTable.css';
import MaterialTable from 'material-table';
import {connect} from "react-redux";
import {fetchData} from './../../store/actions/actions';


class InformationTable extends Component {

    componentDidMount(){
        this.props.getStudentsData()
    }

    render (){
        if (this.props.language === 'en')
        {
            var data = this.props.studentsInformation.all_en;
            var columns = [     {title : 'Name'   , field:'name'   , headerStyle: {fontWeight: 'bold'} },
                                {title : 'Status' , field:'status' , headerStyle: {fontWeight: 'bold' , textAlign : 'center'} , cellStyle: {textAlign : 'center'}},
                                {title : 'Major'  , field:'major'  , headerStyle: {fontWeight: 'bold' , textAlign : 'center'} , cellStyle: {textAlign : 'center'}}   ]
            var title = "Students Title";
            var style = { direction: "ltr" }
        }
        else if (this.props.language === 'ar'){
            var data = this.props.studentsInformation.all_ar
            var columns = [     {title : 'الإسم'   , field:'name'   , headerStyle: {fontWeight: 'bold',fontSize: '20px',textAlign : 'center',fontFamily: 'Markazi Text'} , cellStyle: {textAlign : 'center',fontFamily: 'Almarai'} },
                                {title : 'الحالة' , field:'status' , headerStyle: {fontWeight: 'bold' ,fontSize: '20px', textAlign : 'center',fontFamily: 'Markazi Text'} , cellStyle: {textAlign : 'center',fontFamily: 'Almarai'}},
                                {title : 'التخصص'  , field:'major'  , headerStyle: {fontWeight: 'bold' ,fontSize: '20px', textAlign : 'center',fontFamily: 'Markazi Text'} , cellStyle: {textAlign : 'center',fontFamily: 'Almarai'}}   ]
            var title = "جدول الطلاب";
            var style = { direction: "rtl" }
        }

    return (
        <Fragment>
            <MaterialTable 
                title={title}
                columns={columns}
                data={data}
                style={style}
                />
        </Fragment>
    )}
}

const mapStateToProps = ( state ) => {
    return   { studentsInformation:state.studentsInformation,
                language:state.language}
};

const mapDispatchToProps = ( dispatch ) => {
    return  { getStudentsData : () => dispatch(fetchData())}
};

export default connect (mapStateToProps, mapDispatchToProps)(InformationTable);