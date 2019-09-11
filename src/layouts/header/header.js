import React, { Component, Fragment } from 'react';
import { NavBar, Icon } from 'antd-mobile';
import { connect } from 'dva';
import router from 'umi/router';
class header extends Component {
    state = {
        title: '河马儿科'
    }
    render() {
        const flag=this.props.title=='河马儿科'
        return (
            <Fragment>
                <NavBar
                    mode="dark"
                    icon={flag?'':<Icon type="left" />}
                    onLeftClick={() => router.go(-1)}
                >{this.props.title}</NavBar>
           </Fragment>
        )
    }
}
function mapStateToProps(state) {
    const { title } = state.globalSetting;
    return {
        title
    };
  }
export default connect(mapStateToProps)(header)