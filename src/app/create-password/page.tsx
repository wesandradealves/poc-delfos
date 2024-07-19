"use client";
import ResetForm from "@/components/ResetForm/ResetForm";
import { Suspense } from "react";
import { Content, Container } from "@/app/style";

export default function Login(props: any) {
  return <>
    <title>Delfus - Criar nova senha</title>
    <Suspense fallback={<>Carregando..</>}>
      <Content>
        <Container className="container d-flex flex-column justify-content-center align-items-center">
          <ResetForm title={"Criar nova senha"} />
        </Container>
      </Content>
    </Suspense>
  </>;
}