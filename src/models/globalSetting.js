
export default {
    namespace: 'globalSetting',
    state: {
        title:'河马儿科'
    },
  
    reducers: {
     changeTitle(state,{pageTitle}){
        let title2=state.title;
        title2=pageTitle
        return {...state,title:title2};
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
            }
        });
      },
    }
  };
  