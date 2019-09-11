import React, { Component, Fragment } from 'react';
import Header from './header/header'
import router from 'umi/router'
import './index.css'
import stylesPublic from '../static/publicCSS.css'
const PlaceHolder = ({ className = '', ...restProps }) => (
  <div className={`${className} placeholder`} {...restProps}>Block</div>
);
function BasicLayout(props) {
  const {children}=props
  const height={
    height:'90%'
  }
  return (
    <Fragment>
      <Header/>
        <div style={height} >
          {children}
        </div>
  </Fragment>
  );
}

export default BasicLayout;
