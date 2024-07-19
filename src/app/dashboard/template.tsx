"use client";

import { Content } from "../style";
import { Wrap } from "./style";
export default function Template({ children }: { children: React.ReactNode }) {
    return (
        <>
            <title>Delfus - Dashboard</title>
            <Wrap className='overflow-hidden d-flex flex-column justify-content-start align-items-start'>
                <Content id='primary' className='d-flex flex-column justify-content-center align-items-center'>
                    {children}
                </Content>
            </Wrap>     
        </>
    )
  }