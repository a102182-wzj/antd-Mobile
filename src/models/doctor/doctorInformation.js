import * as service from '../../service/service'
export default {
    namespace: 'doctorInformation',
    state: {
        doctors:[{
            id:'',
            name:'',
            img:''
        }]
        
    },
  
    reducers: {
        getDoctors(state,doctors1){
          return state=doctors1
        }
    },
    effects:{
        *getDI({},{call,put}){
            let promise;
            promise= yield call(service.getDoctors,'get','/api/doctorInformation');
            console.log(promise)
            yield put({
                type:'getDoctors',
                doctors:promise.data
            })
           }
    },
    subscriptions: {
      redirect({ dispatch, history }) {
        return history.listen(({ pathname }) => {
            switch(pathname){
                case '/': 
                    dispatch({type:'changeTitle',pageTitle:'河马儿科'});
                    history.push('/Home');
                    break;
                case '/NewAppointment':
                        dispatch({type:'changeTitle',pageTitle:'新预约'});
                        break;
                case '/ReservationInquiry':
                        dispatch({type:'changeTitle',pageTitle:'预约查询'});
                        break;
                case '/PatientManagement':
                        dispatch({type:'changeTitle',pageTitle:'患者管理'});
                        break;
                case '/MedicalOrderExecution':
                        dispatch({type:'changeTitle',pageTitle:'遗嘱执行'});
                        break;
                case '/ReportQuery':
                        dispatch({type:'changeTitle',pageTitle:'报告查询'});
                        break;
                case '/PatientInformation':
                        dispatch({type:'changeTitle',pageTitle:'患者信息'});
                        break;
                case '/DoctorInformation':
                        dispatch({type:'changeTitle',pageTitle:'医生信息'});
            }
        });
      },
    }
  };
  