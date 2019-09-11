import * as service from '../../service/service'
export default {
    namespace: 'doctorScheduling',
    state: {
       doctorId:'',
       dcName:'',
       Date:'',
       PatienId:'',
       PatienName:'',
       PatienPhone:'',
       PatienAge:''
        
    },
  
    reducers: {
        setDoctorInformation(state,{doctor}){
          console.log('doctor',doctor)
          return {...state,doctorId:doctor.id,dcName:doctor.name}
        },
        setDate(state,{dateTime}){
          console.log(dateTime)
            return {...state,Date:dateTime}
        },
        setPatienInforMation(state,{painent}){
          console.log('painent',painent)
          return {...state,PatienId:painent.id,PatienName:painent.name,PatienPhone:painent.phone,PatienAge:painent.age}
        }
    },
  };
  