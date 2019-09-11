import React, { Component, Fragment } from 'react';
import { Flex, WhiteSpace,Grid } from 'antd-mobile';
import styles from './index.css';
import router from 'umi/router';
class Home extends Component{
  state={

  }
  routerTo(data){
    switch(data.text){
      case '新预约':
        router.push('/NewAppointment')
        break;
      case '预约查询':
         router.push('/ReservationInquiry')
    }
  }
  render(){
    const data=[
      {
        icon:'src\assets\新预约.png',
        text:'新预约'
      },
      {
        icon:'src\assets\预约查询.png',
        text:'预约查询'
      },
      {
        icon:'src\assets\患者管理.png',
        text:'患者管理'
      },
      {
        icon:'src\assets\医嘱执行.png',
        text:'医嘱执行'
      },  {
        icon:'src\assets\报告查询.png',
        text:'报告查询'
      },  {
        icon:'',
        text:''
      }
    ]
    return(
      <Fragment>
         <Grid data={data} columnNum={3} onClick={_el => this.routerTo(_el)} />
      </Fragment>
    )
  }
}
function mapStateToProps(state) {
  // 这个state是所有model层的state，这里只用到其中一个，所以state.testPage把命名空间为testPage这个model层的state数据取出来
  // es6语法解构赋值
  const { num, shoppingStore } = state.testPage;
  // 这里return出去的数据，会变成此组件的props，在组件可以通过props.num取到。props变化了，会重新触发render方法，界面也就更新了。
  return {
    num,
    // num:num, //同上，es6语法，key/value相同名时可以简写。
    shoppingStore,
  };
}
export default Home