"use client";

import AxiosInstance from '@/utils/axiosInstance';
import { useEffect, useState } from 'react';
import { useForm, SubmitHandler } from "react-hook-form";
import { Inputs } from './types';
import logo from '@/assets/img/logo.svg';
import { Form, Logo, FieldGroup, Label, Input, Error, Fieldset } from '../LoginForm/style';
import { Title } from '../EmailForm/style';
import { Button } from '@/assets/tsx/objects';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation'

export default function ResetForm(props: any) {
  const { register, handleSubmit, formState: { errors } } = useForm<Inputs>();
  const classNames = require('classnames');
  const searchParams = useSearchParams();

  const [passwords, setPassword] = useState<any>({
    password: [],
    confirm_password: []
  });  

  const [errorSet, setErrors] = useState<any>({
    password: [],
    confirm_password: []
  });

  const onSubmit: SubmitHandler<Inputs> = async data => {
    try {
      const email = searchParams.get('email')    

      console.log({
        ...data,
        email: email
      })
    } catch (error) {
      console.log(error);
      throw error;
    }
  };

  useEffect(() => {
    console.log(props)
  }, [props]);     

  return (
    <>
      <Form className='d-flex flex-column justify-content-center align-items-center' onSubmit={handleSubmit(onSubmit)}>
        {logo && <Link href="/"><Logo loading="lazy" className='d-block img-fluid' src={logo?.src} /></Link>}
        {props?.title && <Title>{props?.title}</Title>}
        <Fieldset className='d-flex flex-column'>
          <>
          <FieldGroup className='d-flex flex-column'>
            <Label className='d-none d-sm-block'>Senha</Label>
            <Input 
              onKeyUp={(e: any) => {
                setPassword({
                  ...passwords,
                  password: e.target.value && e.target.value !== "" ? e.target.value : null
                });

                setErrors({
                  ...errorSet,
                  password: e.target.value !== passwords?.confirm_password ? {message: "As senhas não conferem"} : []
                })               
              }} 
              className={
                classNames(
                  {
                    '--invalid': errors.password || errorSet?.password?.length
                  }
                )      
              }         
              type="password"     
              placeholder='******' 
              {...register("password", { required: true })} 
            />
            {errors.password && (<Error>Campo obrigatório.</Error>)}
            {errorSet.password?.message && (<Error>{errorSet.password?.message}</Error>)}
          </FieldGroup>
          <FieldGroup className='d-flex flex-column'>
            <Label className='d-none d-sm-block'>Senha</Label>
            <Input 
              onKeyUp={(e: any) => {
                setPassword({
                  ...passwords,
                  confirm_password: e.target.value && e.target.value !== "" ? e.target.value : null
                }); 
                
                setErrors({
                  ...errorSet,
                  confirm_password: e.target.value !== passwords?.password ? {message: "As senhas não conferem"} : []
                })    
              }} 
              className={
                classNames(
                  {
                    '--invalid': errors.confirm_password || errorSet?.confirm_password?.length
                  }
                )      
              }         
              type="password"     
              placeholder='******' 
              {...register("confirm_password", { required: true })} 
            />
            {errors.confirm_password && (<Error>Campo obrigatório.</Error>)}
            {errorSet.confirm_password?.message && (<Error>{errorSet.confirm_password?.message}</Error>)}
          </FieldGroup>                 
          </>
        </Fieldset>
        <Button className='btn primary' type="submit">Resetar</Button>
      </Form>
    </>
  );
};