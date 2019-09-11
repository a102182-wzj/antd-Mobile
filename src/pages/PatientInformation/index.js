import React, { Component, Fragment } from 'react';
import stylesPublic from '../../static/publicCss.css'
import { SearchBar, Button } from 'antd-mobile';
import router from 'umi/router';
import { Modal, WingBlank, WhiteSpace, Toast, InputItem, List, ImagePicker } from 'antd-mobile';
import * as service from '../../service/service'
import { createForm, formShape } from 'rc-form';
import { connect } from 'dva';
const prompt = Modal.prompt;
const Item = List.Item;
const Brief = Item.Brief;
class Patientlnformation extends Component {
    static propTypes = {
        form: formShape
    }
    state = {
        id: '',
        patients: '',
        modal2: false,
        files: [{
            url: 'src\assets\yay.jpg'
        }]

    }
    onClose = () => {
        this.setState({
            modal2: false
        })
    }
    showModal = () => {
        this.setState({
            modal2: true
        })
    }
    onChange = (value) => {
        let that = this
        if (!!this.state.id) {
            window.clearTimeout(this.state.id);
        }
        let promise
        let timeOutId = setTimeout(function () {
            service.getPatient('get', '/api/patientInformation', { data: value }).then(res => {
                promise = res.data.Patient
                that.setState({
                    patients: promise
                })
                console.log('patients', that.state.patients)
            })
        }, 600)
        this.setState({
            id: timeOutId
        })
    }
    submit = () => {
        this.onClose()
        this.props.form.validateFields((error, value) => {
            console.log(error, value);
            service.postPatient('', '/api/postPatient', value).then(res => {
                Toast.success('Load success !!!', 1);
                router.push('/NewAppointment')
            })
        });
    }
    setPatienInforMation = (data) => {
        console.log(data)
        this.props.dispatch({
            type: 'doctorScheduling/setPatienInforMation',
            painent: data
        })
        router.push('/NewAppointment')
    }
    render() {
        const imgDiv = {
            width: '15%',
        }
        const inputDiv = {
            width: '65%',
        }
        const files = this.state.files
        const { getFieldProps, getFieldError } = this.props.form;
        let patientsDiv;
        if (!!this.state.patients) {
            patientsDiv = this.state.patients.map((item, index) => {
                
                return <Item key={index}
                    arrow="horizontal"
                    thumb="https://zos.alipayobjects.com/rmsportal/dNuvNrtqUztHCwM.png"
                    multipleLine
                    onClick={() => { this.setPatienInforMation(item) }}
                >{item.name}
                    <Brief>年龄:{item.age}</Brief>
                    <Brief>电话:{item.phone}</Brief>
                </Item>

     
            })
        } else {
            patientsDiv = '';
        }
        const addPatient = {
            position: 'fixed',
            bottom: '0px',
            width: '100vw',
            backgroundColor: '#108ee9',
            zIndex: '99999'
        }
        const over={
            overflow:'hidden' 
        }
        return (
            <div style={over}>
                <SearchBar placeholder="手机号/预约姓名" onChange={this.onChange} />
                <Button onClick={() => this.showModal('modal2')} style={addPatient}>新患者</Button>
                <WhiteSpace />
                <Modal
                    popup
                    visible={this.state.modal2}
                    onClose={() => this.onClose('modal2')}
                    animationType="slide-up"
                >
                    <List renderHeader={() => <div>填写信息</div>} className="popup-list">
                        <InputItem {...getFieldProps('name')} placeholder="姓名">姓名</InputItem>
                        <InputItem {...getFieldProps('age')} placeholder="年龄">年龄</InputItem>
                        <InputItem {...getFieldProps('phone')} placeholder="电话">电话</InputItem>
                        <List.Item>
                            <ImagePicker
                                files={files}
                                onChange={this.onChange}
                                onImageClick={(index, fs) => console.log(index, fs)}
                                selectable={files.length < 7}
                                multiple={this.state.multiple}
                            />
                        </List.Item>
                        <List.Item>
                            <Button type="primary" onClick={() => { this.submit() }}>添加</Button>
                        </List.Item>
                    </List>
                </Modal>
                <div>
                <List renderHeader={() => '患者列表'} className="my-list">
                    {patientsDiv}
                    </List>
                </div>
            </div>
        )
    }
}
export default connect()(createForm()(Patientlnformation))