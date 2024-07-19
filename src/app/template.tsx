"use client";
import bg from '@/assets/img/bg.jpg';
import { Wrap, Content } from './style';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function Template({ children }: { children: React.ReactNode }) {

    const router = useRouter();

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
        if(getCookie("user")) router.push('/dashboard'); 
    }, [router]);       

    return (
        <Wrap className='overflow-hidden d-flex flex-column justify-content-center align-items-center' background_image={bg?.src}>
            <Content id='primary' className='d-flex flex-column justify-content-center align-items-center'>
                {children}
            </Content>
        </Wrap>
    )
}