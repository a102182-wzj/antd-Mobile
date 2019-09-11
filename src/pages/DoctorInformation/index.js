import React, { Component, Fragment } from 'react';
import { DatePicker, List, Modal, Button, Flex, Badge } from 'antd-mobile';
import { connect } from 'dva';
import router from 'umi/router';
import styles from './index.css'
import stylesPublic from '../../static/publicCss.css'
import * as service from '../../service/service'
const operation = Modal.operation;
const Item = List.Item;
const Brief = Item.Brief;
class DoctorInformation extends Component {
    state = {
        doctors: '',
        date: '',
        time: '',
        modal1: '',
        flexs: []
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
        const { dispatch } = this.props
        this.setState({
            modal1: false
        })
        const newTime = this.state.date + '  ' + time
        dispatch({
            type: 'doctorScheduling/setDate',
            dateTime: newTime
        })
        router.push('/NewAppointment')
    }
    getDoctorScheduling = (doctor) => {
        this.props.dispatch({
            type: 'doctorScheduling/setDoctorInformation',
            doctor: doctor
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
                return      <Item key={index}
                arrow="horizontal"
                thumb="https://zos.alipayobjects.com/rmsportal/dNuvNrtqUztHCwM.png"
                multipleLine
                onClick={() => { this.getDoctorScheduling(item) }}
            >{item.name}
              
            </Item>
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
                <div >
                <List renderHeader={() => '医生列表'} className="my-list">
                        {test}
                    </List>
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

export default connect()(DoctorInformation);