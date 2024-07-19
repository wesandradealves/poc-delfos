"use client";
import ResetForm from "@/components/ResetForm/ResetForm";
import { Suspense } from "react";

export default function Login(props: any) {
  return <>
    <title>Delfus - Criar nova senha</title>
    <Suspense fallback={<>Carregando..</>}>
      <ResetForm title={"Criar nova senha"} />
    </Suspense>
  </>;
}