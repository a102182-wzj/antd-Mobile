import React, { Component, Fragment } from 'react';
import { Button, WhiteSpace, WingBlank,Card,Toast } from 'antd-mobile';
import stylesPublic from '../../../static/publicCSS.css'    
import { connect } from 'dva';
import * as service from '../../../service/service'
import styles from './index.css'
import router from 'umi/router';
class InformationButton extends Component {
    state = {
        
    }
    toPatientInformation = () => {
        router.push('/PatientInformation')
    }
    toDoctorInformation = () => {
        router.push('/DoctorInformation')
    }
    submit=()=>{
        const data={
            doctorId:this.props.doctorId,
            dcName:this.props.dcName,
            Date:this.props.Date,
            PatienId:this.props.PatienId,
            PatienName:this.props.PatienName,
            PatienPhone:this.props.PatienPhone,
            PatienAge :this.props.PatienAge
        }
        service.postPatient('','/api/postPatient',data).then(res=>{
            Toast.success('Load success !!!', 1);
        })
    }
    render() {
        let docotrJudge = (!!this.props.Date);
        let painentJudge=(!!this.props.PatienId)
        let doctorButton = () => {
            return <p> 医生姓名：{this.props.dcName}</p>
        }
        console.log(painentJudge)
        let painentCard=()=>{
            return 
        }
        let cardDiv={
            width:'100vw',
            marginTop:'60px'
        }
        let buttonDiv={
            width:'80vw',
            marginTop:'60px'
        }
        let marginT={
            marginTop:'50%'
        }
        return (
            <div className={stylesPublic.publicWZJ} style={marginT} >
                {painentJudge?(
                <div style={cardDiv}><Card><Card.Header title="患者信息" thumb="https://gw.alipayobjects.com/zos/rmsportal/MRhHctKOineMbKAZslML.jpg"/><Card.Body><div>患者姓名:{this.props.PatienName}</div><div>患者电话:{this.props.PatienPhone}</div><div>患者年龄:{this.props.PatienAge}</div> </Card.Body><Card.Footer content="footer content" extra={<div>extra footer content</div>} /> </Card></div>)
                :
                (<div style={buttonDiv} >
                <Button onClick={this.toPatientInformation} type="primary">
                    患者信息
                </Button>
                </div> )}
                {docotrJudge?(<Card style={{}}><Card.Header title="医生信息" thumb="https://gw.alipayobjects.com/zos/rmsportal/MRhHctKOineMbKAZslML.jpg"/><Card.Body><div>医生姓名:{this.props.PatienName}</div><div>预约时间:{this.props.Date}</div> </Card.Body><Card.Footer content="footer content" extra={<div>extra footer content</div>} /> </Card>)
                :
                (<div  style={buttonDiv}> 
                <Button onClick={this.toDoctorInformation} type="primary">
                    医生信息
                </Button>
                </div>)}
                <div style={buttonDiv}>
                <Button type="warning" onClick={()=>{this.submit()}}>
                                提交
                </Button>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    const { doctorId, dcName, Date, PatienId, PatienName, PatienPhone, PatienAge } = state.doctorScheduling;
    return {
        doctorId, dcName, Date, PatienId, PatienName, PatienPhone, PatienAge
    };
};
export default connect(mapStateToProps)(InformationButton);