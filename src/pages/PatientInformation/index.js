import React, { Component, Fragment } from 'react';
import { SearchBar, Button} from 'antd-mobile';
import { Modal, WingBlank, WhiteSpace, Toast } from 'antd-mobile';
import * as $ from '../../utils/axios'
import styles from './index.css'
const prompt = Modal.prompt;
class Patientlnformation extends Component {
    state = {

    }
    onChange = (value) => {
        let promise = $.getAjax('get', '', { data: value })
        console.log(promise.data)
    }
    render() {
        return (
            <Fragment>
                <SearchBar placeholder="手机号/预约姓名" onChange={this.onChange} />
                <Button  className={styles.modalButton} onClick={() => prompt(
                    '填写患者信息',
                    '',
                    (name, phoneNumber) => {
                        console.log(name);
                        console.log(phoneNumber);
                        let promist=$.getAjax('post','',{name:name,phoneNumber:phoneNumber})
                    },
                    'login-password',
                    null,
                    ['姓名', '电话号'],
                )}
                >添加新患者</Button>


            </Fragment>
        )
    }
}
export default Patientlnformation