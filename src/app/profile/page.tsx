"use client";

import { Content } from '../style';
import logo from '@/assets/img/logo.svg';
import Link from 'next/link';
import { Logo } from "@/components/LoginForm/style";
import { useEffect, useState } from 'react';
import AxiosInstance from '@/utils/axiosInstance';
import { Nav, NavItem, Intro, Text, Title, Subtitle, Label } from './style';
import { Container } from './style';

export default function Profile() {
  const [data, setData] = useState<any>(null);

  const handleData = async () => {
    try {
      const response = await AxiosInstance.get("/mock/roles.json");
      return response;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }; 

  useEffect(() => {
    handleData().then((response: any) => {
      if(response?.status == 200 && response?.data.length) setData(response?.data.filter((role: any) => role?.slug !== 'admin'));
    });  
  }, []); 
  
  return (
    <>
      <title>Delfus - Selecionar Perfil</title>
      <Content>
        <Container className="container d-flex flex-column justify-content-center align-items-center">
          <Link href="/"><Logo loading="lazy" className='d-block img-fluid' src={logo?.src} /></Link>
          <Intro className='d-flex flex-column text-center justify-content-center align-items-center'>
            <Title>Bem-vindo ao Delfos</Title>
            <Text>O centro de monitoramento de clientes da Equatorial. 
            Escolha a visão que deseja explorar e acompanhe seus dados em tempo real.</Text>
          </Intro>
          {data && 
            <Nav className='d-flex align-items-stretch flex-xxl-wrap flex-xxl-row'>
              {data.map((row: any, index: any) => (
                <NavItem key={index}>
                  <Link className='d-flex flex-column text-center justify-items-center align-items-center' href={`/dashboard/${row?.slug}`}>
                    <Subtitle>Visão</Subtitle>
                    <Label>{row?.label}</Label>
                  </Link>
                </NavItem>
              ))}
            </Nav>          
          }
        </Container>
      </Content>
    </>
  );
}
