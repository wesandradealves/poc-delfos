"use client";
import { useContext, useEffect, useState } from "react";
import { SpinnerWrapper, Spin } from "./style";
import SpinnerProvider from "./context";

export default function Spinner(props: any) {
  const classNames = require('classnames');
  const {loading, setLoading} = useContext<any>(SpinnerProvider);

  useEffect(() => {
    console.log(loading)
  }, [loading]);     

  return (<SpinnerWrapper 
    className={
      classNames(
        `justify-content-center align-items-center d-flex`,
        // {
        //   'd-flex ': props?.loading,
        //   'd-none': !props?.loading
        // }
      )      
    }>
    <Spin></Spin>
  </SpinnerWrapper>);
};