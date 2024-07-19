"use client";
import { useEffect, useMemo, useState } from "react";
import { Container, Inner, Title, Table, TableBody, TableCell, TableHead, TableRow, Text, Points } from "./style";
import ReactECharts from 'echarts-for-react';
import Link from "next/link";

export default function HalfDoughnut(props: any) {
  const [options, setOptions] = useState<any>(null);
  const [news, setNews] = useState<any>(null);

  const getGauge = useMemo(
    () => {
      const total:any = Object.values(props?.data?.crit).reduce((acc: any, value: any) => acc + value, 0);
      const crit:any = props?.data?.crit;
      return Math.ceil(total/crit[1]);
    },
    [] 
  );  

  const getNews = useMemo(
    () => {
      return props?.data?.rank.map(function(row: any) {
        return row?.noticia
      })
    },
    [] 
  );  
   
  useEffect(() => {
    if(props) {
      setOptions(
        {
          series: [
            {
              type: 'gauge',
              startAngle: 180,
              endAngle: 0,
              min: 0,
              max: 100,
              splitNumber: 1,
              axisLine: {
                lineStyle: {
                  width: -4,
                  color: [
                    [0.33, '#56F000'], // Verde até 33%
                    [0.66, '#FD8B23'], // Amarelo de 33% a 66%
                    [1, '#FF3838'], // Vermelho de 66% a 100%
                  ],
                },
              },
              pointer: {
                show: true,
                width: 0,
                itemStyle: {
                  color: 'auto'
                }
              },
              progress: {
                show: true,
                width: 40,
                itemStyle: {
                  color: 'auto',
                }
              },
              axisTick: {
                show: false,
                length: 5,
                lineStyle: {
                  color: 'auto',
                  width: 10,
                },
              },
              splitLine: {
                show: false
              },
              title: {
                offsetCenter: [0, '-20%'],
                fontSize: 20,
              },
              detail: {
                fontSize: 30,
                offsetCenter: [0, '-10%'],
                valueAnimation: true,
                formatter: '{value}%',
                color: '#EFEFEF',
              },
              data: [
                {
                  value: getGauge, 
                },
              ],
            },
          ],
        }        
      );
    }
  }, [props, getGauge]);    

  useEffect(() => {
    setNews(getNews)
  }, [props, getNews]);  

  return (<Container className={props?.className}>
    <Inner className='d-flex flex-column align-items-center justify-content-start'>
      {props?.state && <Title className='col-12'>{props?.state}</Title>}

      {options && <ReactECharts className='col-12' option={options} />}

      {news && <>
        <Title className='col-12'>Ranking das notícias</Title>
        <Table className='col-12'>
          <TableHead className='col-12'>
            <TableRow className='d-flex align-items-center col-12'>
              <TableCell className='text-center col-2'><Text>Ranking</Text></TableCell>
              <TableCell className='col-3'><Text>Notícia</Text></TableCell>
              <TableCell className='flex-fill'><Text>Link</Text></TableCell>
              <TableCell className='col-3 text-center'><Text>Pontuação</Text></TableCell>
            </TableRow>
          </TableHead>
          <TableBody className='col-12'>
            <>
              {news.map((row: any, index: any) => (
                <>
                  <TableRow className='d-flex align-items-center col-12' key={`${index}`}>
                    <TableCell className='text-center col-2'><Text className='col-12'>{`${index+1}°`}</Text></TableCell>
                    <TableCell className='col-3'><Text>{row?.titulo}</Text></TableCell>
                    <TableCell className='flex-fill'><Text><Link href={row?.link}>{row?.link}</Link></Text></TableCell>
                    <TableCell className='col-3 text-center'>
                      <Points feeling={row?.sentimento} className='d-block'>
                        <Text>{row?.tier}</Text>
                      </Points>
                    </TableCell>
                  </TableRow>
                </>
              ))}            
            </>
          </TableBody>
        </Table>
      </>}
    </Inner>
  </Container>);
}
