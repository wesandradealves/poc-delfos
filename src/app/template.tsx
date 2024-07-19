"use client";
import bg from '@/assets/img/bg.jpg';
import { Wrap, Content } from './style';
export default function Template({ children }: { children: React.ReactNode }) {
    return (
        <Wrap className='overflow-hidden d-flex flex-column justify-content-center align-items-center' background_image={bg?.src}>
            <Content id='primary' className='d-flex flex-column justify-content-center align-items-center'>
                {children}
            </Content>
        </Wrap>
    )
  }