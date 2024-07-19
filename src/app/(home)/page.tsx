"use client";

import LoginForm from "@/components/LoginForm/LoginForm";
import { Content, Container } from "@/app/style";

export default function Login(props: any) {
  return <>
      <title>Delfus - Login</title>
      <Content>
        <Container className="container d-flex flex-column justify-content-center align-items-center">
          <LoginForm />
        </Container>
      </Content>
  </>;
}