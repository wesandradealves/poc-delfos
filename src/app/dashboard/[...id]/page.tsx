"use client";

import router from "next/router";
import { useEffect } from "react";
import { Intro } from "@/app/profile/style";
import { Content, Container, Text, Title } from "./style";
export default function Dashboard(props: any) {
  useEffect(() => {
      if(!props?.params?.id) {
        router.push('/profile'); 
      }
  }, []);   

  return (
    <Content>
      <Container className='container'>
        {/* {props?.params?.id} */}
        <Intro className="d-flex flex-column text-align-start">
          <Title>Bem-vindo ao Delfos</Title>
          <Text>O centro de monitoramento de clientes da Equatorial. Escolha a visão que deseja explorar e acompanhe seus dados em tempo real.</Text>
        </Intro>
      </Container>
    </Content>
  );
}
