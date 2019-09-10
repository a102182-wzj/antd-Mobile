//import * as axios from '../utils/axios'
import request from '../utils/request'

export function getDoctors(type,url,data={data:''}){
    //return axios.getAjax(type,url,data)
    return request.get(url)
}