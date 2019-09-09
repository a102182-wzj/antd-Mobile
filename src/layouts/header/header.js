import React, { Component, Fragment } from 'react';
import { NavBar, Icon } from 'antd-mobile';
import { connect } from 'dva';
class header extends Component {
    state = {
        title: '河马儿科'
    }
    render() {
        return (
            <Fragment>
                <NavBar
                    mode="dark"
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