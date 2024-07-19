"use client";
import EmailForm from "@/components/EmailForm/EmailForm";
import { Content, Container } from "@/app/style";

export default function Login(props: any) {
  return <>
    <title>Delfus - Redefinir senha</title>
    <Content>
      <Container className="container d-flex flex-column justify-content-center align-items-center">
        <EmailForm title={"Redefinir senha"} />
      </Container>
    </Content>
  </>;
}