import React, { Component, Fragment } from 'react';
import { DatePicker, List, Modal, Button, Flex, Badge, WhiteSpace, Tabs } from 'antd-mobile';
import * as service from '../../service/service'
import router from 'umi/router';
const Item = List.Item;
const Brief = Item.Brief;
class ReservationInquiry extends Component {
  state = {
    tabs: []
  }
  componentDidMount() {
    service.getAllDoctors('get', '/api/allDoctordoctorScheduling').then(res => {
      console.log(res.data.doctors)
      this.setState({
        tabs: res.data.doctors
      })
    })
  }
  renderContent = tab => (

    <List>
      <Item
        arrow="horizontal"
        thumb="https://zos.alipayobjects.com/rmsportal/dNuvNrtqUztHCwM.png"
        multipleLine
      >{tab.name}
        <Brief>预约时间:{tab.time}</Brief>
        <Brief>预约患者:{tab.title}</Brief>
      </Item>
    </List>
  );
  render() {
    let tabs = this.state.tabs
    let divCreat = tabs.map((item, index) => {
      return <div key={index}>
        <List>
          {item.doctor.map((item2, index2) => {
            return <Item key={index2}
              arrow="horizontal"
              thumb="https://zos.alipayobjects.com/rmsportal/dNuvNrtqUztHCwM.png"
              multipleLine
              onClick={() => { console.log(111) }}
            >{item.name}
              <Brief>预约患者:{item2.children}</Brief>
              <Brief>预约时间:{item2.time}</Brief>
            </Item>
          })}
        </List>
      </div>
    })
    return (
      <div>
        <WhiteSpace />
        <Tabs tabs={this.state.tabs} renderTabBar={props => <Tabs.DefaultTabBar onTabClick={({ ...props }) => { console.log({ ...props }) }} {...props} page={5} />}>
          {divCreat}
        </Tabs>
        <WhiteSpace />
      </div>
    )
  }
}
export default ReservationInquiry