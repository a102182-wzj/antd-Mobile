import * as service from '../../service/service'
export default {
    namespace: 'doctorScheduling',
    state: {
       id:'',
       name:'',
       date:''
        
    },
  
    reducers: {
        setDoctorInformation(state,{doctorInformation}){
          return {...state,id:doctorInformation.id,name:doctorInformation.name}
        },
        setDate(state,{dateTime}){
            return {...state,date:dateTime}
        }
    },
  };
  