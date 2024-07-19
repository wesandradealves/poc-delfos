"use client";
import { Content, Container } from './style';
import logo from '@/assets/img/logo.svg';
import Link from 'next/link';
import { Logo } from "@/components/LoginForm/style";
import { useEffect, useState } from 'react';
import AxiosInstance from '@/utils/axiosInstance';
import { Nav, NavItem } from './style';
import { usePathname } from 'next/navigation';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRightFromBracket } from '@fortawesome/free-solid-svg-icons'
import { useRouter } from 'next/navigation';
export default function Header(props: any) {
  const [data, setData] = useState<any>(null);
  const pathname = usePathname();
  const path = pathname.split("/");
  const classNames = require('classnames');
  const router = useRouter();
  const deleteCookie = (cname: any) => {
    document.cookie = `${cname}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
  }

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

  return (<Content>
    <Container className='container d-flex flex-wrap align-items-center justify-content-center'>
      <Link href="/"><Logo loading="lazy" className='d-block img-fluid' src={logo?.src} /></Link>
      {data && <Nav className='flex-fill d-none d-lg-flex flex-wrap align-items-center'>
        {data.map((row: any, index: any) => (
          <NavItem key={index}>
            <Link 
            className={
              classNames(
                {
                  '--active': path.includes(row?.slug)
                }
              )      
            }   
            href={`/dashboard/${row?.slug}`}>
              {row?.label}</Link>
          </NavItem>
        ))}
        </Nav>}
        <Link href={""} className='ms-auto' onClick={(e: any) => {
          e.preventDefault();

          if(getCookie("user")) {
            deleteCookie("user");
            setTimeout(function() { 
              router.push('/'); 
            }, 300);   
          }         
        }}>
          <FontAwesomeIcon icon={faRightFromBracket} />
        </Link>
    </Container>
  </Content>);
}
