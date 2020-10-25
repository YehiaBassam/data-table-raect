import axios from "axios";
import * as actionTypes from "./../types/types";


export function fetchData(){
    return ( dispatch ) => {
        axios.get('js/fakeStudentsService/data.json')
        .then((res)=>{
            dispatch(getData(res.data));
        })
        .catch( error => {
            console.log("error from Redux actions.js",error)
        } );
    }
}

export function getData(studentsData){
    return {
            type:actionTypes.GETDATA,
            studentsData:studentsData
        }
    }

export function setArabic(){
    return {
            type:actionTypes.ARABICLANGUAGE,
            language:'ar'
        }
    }


export function setEnglish(){
        return {
                type:actionTypes.ARABICLANGUAGE,
                language:'en'
            }
        }

