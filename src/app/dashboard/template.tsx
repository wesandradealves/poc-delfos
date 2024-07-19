"use client";

import { useEffect } from "react";
import { Content } from "../style";
import { Wrap } from "./style";
import Header from "@/components/Header/Header";
import { useRouter } from 'next/navigation';
import { usePathname } from 'next/navigation';

export default function Template({ children }: { children: React.ReactNode }) {
    const router = useRouter();
    const pathname = usePathname();

    const getCookie = (cname: any) => {
        let name = cname + "=";
        let decodedCookie = decodeURIComponent(document.cookie);
        let ca = decodedCookie.split(';');
        for (let i = 0; i < ca.length; i++) {
            let c = ca[i];
            while (c.charAt(0) == ' ') {
                c = c.substring(1);
            }
            if (c.indexOf(name) == 0) {
                return c.substring(name.length, c.length);
            }
        }
        return "";
    }

    useEffect(() => {
        if(!getCookie("user") && pathname.indexOf("dashboard") > 0) {
            router.push('/'); 
        }
    }, [router, pathname]);   
        
    return (
        <>
            <title>Delfos - Dashboard</title>
            <Wrap className='overflow-hidden vh-100 d-flex flex-column justify-content-start align-items-start'>
                <Header />
                <Content id='primary' className='d-flex overflow-auto flex-fill flex-column justify-content-start align-items-start'>
                    {children}
                </Content>
            </Wrap>     
        </>
    )
  }