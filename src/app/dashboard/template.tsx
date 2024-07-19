"use client";

import { Content } from "../style";
import { Wrap } from "./style";
import Header from "@/components/Header/Header";

export default function Template({ children }: { children: React.ReactNode }) {
    return (
        <>
            <title>Delfus - Dashboard</title>
            <Wrap className='overflow-hidden d-flex flex-column justify-content-start align-items-start'>
                <Header />
                <Content id='primary' className='d-flex flex-column justify-content-center align-items-center'>
                    {children}
                </Content>
            </Wrap>     
        </>
    )
  }