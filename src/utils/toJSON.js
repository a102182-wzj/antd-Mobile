export function toJSON(data){
    let obj= JSON.stringify(data);
    // console.log('data',JSON.parse(obj) )
    return JSON.parse(obj) 
}