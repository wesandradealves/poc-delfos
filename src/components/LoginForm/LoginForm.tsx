"use client";

import AxiosInstance from '@/utils/axiosInstance';
import { useEffect, useState } from 'react';
import { useForm, SubmitHandler } from "react-hook-form";
import { useRouter } from 'next/navigation';
import { Inputs } from './types';
import logo from '@/assets/img/logo.svg';
import { Form, Logo, FieldGroup, Label, Input, Error, Fieldset } from './style';
import { Button } from '@/assets/tsx/objects';
import Link from 'next/link';

export default function LoginForm(props: any) {
  const { register, handleSubmit, watch, formState: { errors } } = useForm<Inputs>();
  const router = useRouter();
  var hash = require('object-hash');
  const classNames = require('classnames');

  const [errorSet, setErrors] = useState<any>({
    username: [],
    password: []
  });

  const setCookie = (username: any) => {
    var now = new Date();
    now.setTime(now.getTime() + (60 * 60 * 1000));
    document.cookie="user=" + username;
    document.cookie = "expires=" + now.toUTCString() + ";"
  }

  const onSubmit: SubmitHandler<Inputs> = async data => {
    try {
      const response = await AxiosInstance.get("/mock/users.json");
      let credentials = {
        username: data?.username,
        password: data?.password
      };
  
      if (response && response?.data) {
        const username = response?.data.find((user: any) => user?.email == credentials?.username);
        let key: any, message: any;
  
        if (!username || (username && username?.password != credentials?.password)) {
          if (!username) {
            key = "username";
            message = "Usuário não encontrado.";
          } else if (username && username?.password != credentials?.password) {
            key = "password";
            message = "Senha incorreta.";
          }
  
          setErrors({
            ...errorSet,
            [key]: {
              message: [message]
            }
          });
        } else if (username && username?.password == credentials?.password) {
          setCookie(hash(username)),
          router.push('/profile'); 
        }
      }
    } catch (error) {
      console.log(error);
      throw error;
    }
  }; 

  return (
    <>
      <Form className='d-flex flex-column justify-content-center align-items-center' onSubmit={handleSubmit(onSubmit)}>
        {logo && <Link href="/"><Logo loading="lazy" className='d-block img-fluid' src={logo?.src} /></Link>}
        <Fieldset className='d-flex flex-column'>
          <FieldGroup className='d-flex flex-column'>
            <Label className='d-none d-sm-block'>Login</Label>
            <Input 
              onKeyUp={(e: any) => setErrors({
                ...errorSet,
                username: []
              })} 
              placeholder='alguem@equatorial.com.br' 
              defaultValue="" 
              className={
                classNames(
                  {
                    '--invalid': errors?.username || errorSet?.username?.length
                  }
                )      
              }       
              type="email"         
              {...register("username", { required: true })} 
            />
            {errors.username && (<Error>Campo obrigatório.</Error>)}
            {errorSet.username?.message && (<Error>{errorSet.username?.message}</Error>)}
          </FieldGroup>

          <FieldGroup className='d-flex flex-column'>
            <Label className='d-none d-sm-block'>Senha</Label>
            <Input 
              onKeyUp={(e: any) => setErrors({
                ...errorSet,
                password: []
              })} 
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
        </Fieldset>
        <Button className='btn primary' type="submit">Entrar</Button>
        {<Link className='anchor' href="/reset-password">Esqueci minha senha</Link>}
      </Form>
    </>
  );
};