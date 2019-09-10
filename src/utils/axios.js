
import $axios from 'axios'

export function getAjax(type,url,data={data:''}){

    return new Promise((resolve, reject)=>{
        switch(type){
            case 'get':
                 $axios.get(url,{params:data}).then(res=>{
                    resolve(res)
                 }).catch(err=>{
                    reject(err)
                 })
                
            case 'post':
                $axios.post(url,data).then(res=>{
                    resolve(res)
                    }).catch((err)=>{
                        reject(err)
                    })
        }
    })
}