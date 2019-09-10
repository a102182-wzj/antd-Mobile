import React, { Component, Fragment } from 'react';
import { DatePicker, List, Modal, Button, Flex, Badge } from 'antd-mobile';
import { connect } from 'dva';
import router from 'umi/router';
import styles from './index.css'
import stylesPublic from '../../static/publicCss.css'
import * as service from '../../service/service'
const operation = Modal.operation;
class InformationButton extends Component {
    state = {
        doctors: '',
        date: '',
        time: '',
        modal1: '',
        flexs: []
    }
    toPatientInformation = () => {
        router.push('/PatientInformation')
    }
    toDoctorInformation = () => {
        router.push('/DoctorInformation')
    }

    getDoctor = () => {

        service.getDoctors('get', '/api/doctorInformation').then(res => {
            console.log("res", res)
            this.setState({
                doctors: res.data.doctors
            })
        })
    }
    closeModal = (count, time) => {
        console.log(count);
        console.log(time)
        this.setState({
            modal1: false
        })
    }
    getDoctorScheduling = (doctor) => {
        this.props.dispatch({
            type: 'doctorScheduling/setDoctorInformation',
            doctorInformation: doctor
        })
        service.getDoctors('get', '/api/doctorScheduling', { params: { id: doctor.id } }).then(res => {

            const times = res.data.Scheduling
            this.setState({ flexs: times })
            this.setState({ modal1: true })
        })
    }
    render() {
        const imgDiv = {
            width: '15%',
        }
        const inputDiv = {
            width: '65%',
        }
        // console.log(this.props.doctors.doctors)
        let test;
        if (!!this.state.doctors) {
            const doctors = this.state.doctors;

            test = doctors.map((item, index) => {
                return <div key={index} onClick={() => this.getDoctorScheduling(item)} className={`${stylesPublic.publicWZJ} ${stylesPublic.publicDivWZJ}`}>
                    <div className={stylesPublic.publicWZJ} style={imgDiv}> 这是头像</div>
                    <div className={stylesPublic.publicWZJ} style={inputDiv}>
                        <div type="text">{item.name}</div>
                        <div type="text">{item.id}</div>
                    </div>
                </div>
            })
        }
        let fx = this.state.flexs.map((item, index) => {

            return <Badge text={item.count} corner key={index} >
                <Button type="primary" inline size="large" onClick={() => this.closeModal(item.count, item.time)} style={{ marginRight: '4px' }}>{item.time}</Button>
            </Badge>



        })
        return (
            <Fragment>
                <List className="date-picker-list" style={{ backgroundColor: 'white' }}>
                    <DatePicker
                        value={this.state.date}
                        onChange={date => {
                            this.setState({ date })
                            this.getDoctor()
                        }}
                    >
                        <List.Item arrow="horizontal">选择时间</List.Item>
                    </DatePicker>
                </List>
                <div className={stylesPublic.publicWZJ}>
                    {test}
                </div>
                <Modal
                    popup
                    visible={this.state.modal1}
                    animationType="slide-up"
                >
                    <Flex wrap="wrap" align="center" justify="center">
                        <List renderHeader={() => <div>请选择时间</div>} className={stylesPublic.publicWZJ}>
                            <div className={`${stylesPublic.publicWZJ} ${stylesPublic.publicFlexWZJ}`} >
                                {fx}
                            </div>
                        </List>


                    </Flex>
                </Modal>
            </Fragment>
        )
    }
}
export default connect()(InformationButton);