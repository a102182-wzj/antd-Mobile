import React, { Component, Fragment } from 'react';
import { Button, WhiteSpace, WingBlank, Flex } from 'antd-mobile';
import InButton from './InformationButton/index.js'
import styles from './index.css'
class NewAppointment extends Component {
  state = {

  }
  render() {
    return (
      <WingBlank>
        <Flex wrap='wrap'>
          <InButton />
        </Flex>
        <WhiteSpace />
      </WingBlank>
    )
  }
}
export default NewAppointment