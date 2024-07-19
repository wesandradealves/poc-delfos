"use client";

import router from "next/router";
import { useEffect } from "react";

export default function Dashboard(props: any) {
  useEffect(() => {
      if(!props?.params?.id) {
        router.push('/profile'); 
      }
  }, []);   

  return (<>{props?.params?.id}</>);
}
