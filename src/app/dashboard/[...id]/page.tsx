"use client";

import router from "next/router";
import { useEffect, useState } from "react";
import { Intro } from "@/app/profile/style";
import { Content, Container, Text, Title, Grid } from "./style";
import { useRouter } from 'next/navigation';
import { usePathname } from 'next/navigation';
import AxiosInstance from "@/utils/axiosInstance";
import HalfDoughnut from "@/components/HalfDoughnut/HalfDoughnut";
import { Suspense } from "react";

export default function Dashboard(props: any) {
  const router = useRouter();
  const pathname = usePathname();
  const [data, setData] = useState<any>(null);

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

  const handleData = async () => {
    try {
      const response = await AxiosInstance.get("/mock/data.json");
      return response;
    } catch (error) {
      console.log(error);
      throw error;
    }
  };   

  useEffect(() => {
      if(!props?.params?.id && getCookie("user")) {
        router.push('/profile'); 
      } else {
        handleData().then((response: any) => {
          if(response?.status == 200) {
            setData(response?.data)
          }
        }); 
      }
  }, []);    

  return (
    <Content>
      <Container className='container d-flex flex-column'>
        <Intro className="d-flex flex-column text-align-start">
          <Title>Bem-vindo ao Delfos</Title>
          <Text>O centro de monitoramento de clientes da Equatorial. Escolha a visão que deseja explorar e acompanhe seus dados em tempo real.</Text>
        </Intro>

        {data && <Grid className="d-flex flex-wrap align-items-stretch">
          {Object.keys(data).map((key: any, index: any) => (
            <Suspense key={index} fallback={<>Carregando..</>}>
              <HalfDoughnut className="col-12 col-md-6 col-lg-4" state={key} data={data[key]} />
            </Suspense>
          ))}
        </Grid>}
      </Container>
    </Content>
  );
}
