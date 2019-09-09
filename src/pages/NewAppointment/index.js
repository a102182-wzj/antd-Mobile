import React, { Component, Fragment } from 'react';
import { Button, WhiteSpace, WingBlank } from 'antd-mobile';
import styles from './index.css'
class NewAppointment extends Component{
  state={

  }
  render(){
    return(
        <WingBlank>
        <Button className={styles.buttonWZJ}>default</Button><WhiteSpace />
        </WingBlank>
    )
  }
}
export default NewAppointment