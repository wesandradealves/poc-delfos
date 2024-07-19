"use client";

import AxiosInstance from '@/utils/axiosInstance';
import { useEffect, useState } from 'react';
import { useForm, SubmitHandler } from "react-hook-form";
import { useRouter } from 'next/navigation';
import { Inputs } from './types';
import logo from '@/assets/img/logo.svg';
import { Form, Logo, FieldGroup, Label, Input, Error, Fieldset, Title } from './style';
import { Button } from '@/assets/tsx/objects';
import Link from 'next/link';

export default function EmailForm(props: any) {
  const { register, handleSubmit, watch, formState: { errors } } = useForm<Inputs>();
  const router = useRouter();
  const classNames = require('classnames');

  const [errorSet, setErrors] = useState<any>({
    email: []
  });

  const onSubmit: SubmitHandler<Inputs> = async data => {
    try {
      const response = await AxiosInstance.get("/mock/users.json");

      let credentials = {
        email: data?.email,
      };
  
      if (response && response?.data) {
        const username = response?.data.find((user: any) => user?.email == credentials?.email);
        let key: any, message: any;

        if (!username) {
          key = "email";
          message = "E-mail não encontrado.";
  
          setErrors({
            ...errorSet,
            [key]: {
              message: [message]
            }
          });
        } else {
          const url = `/create-password?email=${encodeURIComponent(username.email)}`;
          router.push(url);      
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
        {logo && <Link href="/"><Logo className='d-block img-fluid' src={logo?.src} /></Link>}
        {props?.title && <Title>{props?.title}</Title>}
        <Fieldset className='d-flex flex-column'>
          <>
            <FieldGroup className='d-flex flex-column'>
              <Label className='d-none d-sm-block'>E-mail</Label>
              <Input 
                onKeyDown={(e: any) => setErrors({
                  ...errorSet,
                  email: []
                })} 
                className={
                  classNames(
                    {
                      '--invalid': errors.email || errorSet?.email?.length
                    }
                  )      
                }            
                placeholder='alguem@equatorial.com.br' 
                type="email"
                {...register("email", { required: true })} 
              />
              {errors.email && (<Error>Campo obrigatório.</Error>)}
              {errorSet.email?.message && (<Error>{errorSet.email?.message}</Error>)}
            </FieldGroup>          
          </>
        </Fieldset>
        <Button className='btn primary' type="submit">Resetar</Button>
      </Form>
    </>
  );
};