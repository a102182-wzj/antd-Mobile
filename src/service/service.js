//import * as axios from '../utils/axios'
import request from '../utils/request'

export function getDoctors(type,url,data={data:''}){
    //return axios.getAjax(type,url,data)
    return request.get(url)
}
export function getPatient(type,url,data={data:''}){
    return request.get(url)
}
export function postPatient(type,url,data={}){
    return request.post(url,data)
}
export function postData(type,url,data={}){
    return request.post(url,data)
}
export function getAllDoctors(type,url,data={}){
    return request.get(url,data)
}