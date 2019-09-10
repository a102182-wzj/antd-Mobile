import React, { Component, Fragment } from 'react';
import { Button, WhiteSpace, WingBlank } from 'antd-mobile';
import styles from './index.css'
import router from 'umi/router';
class  InformationButton extends Component{
    state={

    }
    toPatientInformation=()=>{
        router.push('/PatientInformation')
    }
    toDoctorInformation=()=>{
        router.push('/DoctorInformation')
    }

    render(){
        return(
            <Fragment>
                <Button  onClick={this.toPatientInformation} >
                    患者信息
                </Button>
                <Button type="primary" onClick={this.toDoctorInformation}>
                    医生信息
                </Button>
            </Fragment>
        )
    }
}
export default InformationButton