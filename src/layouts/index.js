import React, { Component, Fragment } from 'react';
import Header from './header/header'
import router from 'umi/router'
import './index.css'
const PlaceHolder = ({ className = '', ...restProps }) => (
  <div className={`${className} placeholder`} {...restProps}>Block</div>
);
function BasicLayout(props) {
  const {children}=props
  return (
    <Fragment>
      <Header/>
        <div>
          {children}
        </div>
  </Fragment>
  );
}

export default BasicLayout;
