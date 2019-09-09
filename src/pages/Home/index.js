import React, { Component, Fragment } from 'react';
import { Flex, WhiteSpace } from 'antd-mobile';
import styles from './index.css';
import router from 'umi/router';
class Home extends Component{
  state={

  }
  render(){
    return(
      <Fragment>
          <Flex wrap="wrap" justify='center' align='center'>
            <div className={styles.publicWZJ} onClick={()=>{
              router.push('/NewAppointment')
            }}>新预约</div>
            <div className={styles.publicWZJ}  onClick={()=>{
              router.push('/ReservationInquiry')
            }}>预约查询</div>
            <div className={styles.publicWZJ}  onClick={()=>{
              router.push('/PatientManagement')
            }}>患者管理</div>
            <div className={styles.publicWZJ} onClick={()=>{
              router.push('/MedicalOrderExecution')
            }}>遗嘱执行</div>
            <div className={styles.publicWZJ} onClick={()=>{
              router.push('/ReportQuery')
            }}>报告查询</div>
            <div className={styles.publicWZJ} >新预约</div>
          </Flex>
      </Fragment>
    )
  }
}
export default Home