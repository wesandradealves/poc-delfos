"use client";

import router from "next/router";
import { useEffect, useState } from "react";
import { Intro } from "@/app/profile/style";
import { Content, Container, Text, Title } from "./style";

import "@/components/datagrid/table.css";
import LineChart from '../../../components/charts/LineChart';
import BarChart from '../../../components/charts/BarCharts';
import HalfDoughnut from '../../../components/charts/HalfDoughnut';
import Table from '../../../components/datagrid/Table';
import HalfDoughnutFavorability from '../../../components/charts/press/HalfDoughnutFavorability';
import VerticalBarChart from '../../../components/charts/VerticalBarCharts';

// {
//   "MA": {
//       "crit": {
//           "1": 14,
//           "2": 21,
//           "3": 53
//       },
//       "sentimento": {
//           "Positivo": 26,
//           "Neutro": 15,
//           "Negativas": 4
//       },
//       "rank": [
//           {
//               "rank": 1,
//               "noticia": {
//                   "titulo": "Reportagem aborda incï¿½ndio que destruiu 7 boxes na Cidade Operï¿½ria; pane elï¿½trica pode ter sido causa do fogo",
//                   "link": "",
//                   "tier": 3,
//                   "sentimento": "",
//                   "data": "2024-07-17T11:31:08"
//               }
//           },
//           {
//               "rank": 2,
//               "noticia": {
//                   "titulo": "Cuidado com o golpe da falsa cobranï¿½a na conta de energia!",
//                   "link": "https://www.aciima.com.br/cuidado-com-fraudes/",
//                   "tier": 3,
//                   "sentimento": "",
//                   "data": "2024-07-17T00:00:00"
//               }
//           },
//           {
//               "rank": 3,
//               "noticia": {
//                   "titulo": "Sampaio Basquete ï¿½ finalista da Liga de Basquete Feminino Maranhense",
//                   "link": "https://www.blogalexandreferreira.com/post/sampaio-basquete-%C3%A9-finalista-da-liga-de-basquete-feminino-maranhense",
//                   "tier": 3,
//                   "sentimento": "Positiva",
//                   "data": "2024-07-17T08:00:00"
//               }
//           },
//           {
//               "rank": 4,
//               "noticia": {
//                   "titulo": "Equatorial Maranhï¿½o promove Aula Inaugural da Escola de Eletricistas 2024 nesta sexta-feira (19)",
//                   "link": "https://www.blogalexandreferreira.com/post/equatorial-maranh%C3%A3o-promove-aula-inaugural-da-escola-de-eletricistas-2024-nesta-sexta-feira-19",
//                   "tier": 3,
//                   "sentimento": "Positiva",
//                   "data": "2024-07-17T09:00:00"
//               }
//           },
//           {
//               "rank": 5,
//               "noticia": {
//                   "titulo": "Coluna Esplanada! Cartel de hemoderivados frustra licitaï¿½ï¿½o do Ministï¿½rio da Saï¿½de",
//                   "link": "https://portaloinformante.com.br/brasil/2024/07/coluna-esplanada-cartel-de-hemoderivados-frustra-licitacao-do-ministerio-da-saude/",
//                   "tier": 3,
//                   "sentimento": "",
//                   "data": "2024-07-17T06:00:52"
//               }
//           }
//       ]
//   },
//   "PA": {
//       "crit": {
//           "1": 34,
//           "2": 84,
//           "3": 105
//       },
//       "sentimento": {
//           "Positivo": 73,
//           "Neutro": 46,
//           "Negativas": 3
//       },
//       "rank": [
//           {
//               "rank": 1,
//               "noticia": {
//                   "titulo": "Terceiro dia de megaoperaï¿½ï¿½o no Rio mira transporte clandestino",
//                   "link": "https://noticiamarajo.com.br/geral/terceiro-dia-de-megaoperacao-no-rio-mira-transporte-clandestino/",
//                   "tier": 3,
//                   "sentimento": "",
//                   "data": "2024-07-17T14:33:59"
//               }
//           },
//           {
//               "rank": 2,
//               "noticia": {
//                   "titulo": "Terceiro dia de megaoperaï¿½ï¿½o no Rio mira transporte clandestino",
//                   "link": "https://cenarionews.com.br/brasil/terceiro-dia-de-megaoperacao-no-rio-mira-transporte-clandestino/",
//                   "tier": 3,
//                   "sentimento": "",
//                   "data": "2024-07-17T14:34:08"
//               }
//           },
//           {
//               "rank": 3,
//               "noticia": {
//                   "titulo": "Fio de rede elï¿½trica caï¿½do ao lado da nova Marabï¿½",
//                   "link": "",
//                   "tier": 3,
//                   "sentimento": "",
//                   "data": "2024-07-17T09:29:41"
//               }
//           },
//           {
//               "rank": 4,
//               "noticia": {
//                   "titulo": "Nota de esclarecimento da Equatorial sobre falta de energia",
//                   "link": "",
//                   "tier": 3,
//                   "sentimento": "",
//                   "data": "2024-07-16T06:25:19"
//               }
//           },
//           {
//               "rank": 5,
//               "noticia": {
//                   "titulo": "Nota de esclarecimento da Equatorial sobre falta de energia",
//                   "link": "",
//                   "tier": 3,
//                   "sentimento": "",
//                   "data": "2024-07-16T06:25:19"
//               }
//           }
//       ]
//   },
//   "PI": {
//       "crit": {
//           "1": 8,
//           "2": 36,
//           "3": 146
//       },
//       "sentimento": {
//           "Positivo": 97,
//           "Neutro": 27,
//           "Negativas": 8
//       },
//       "rank": [
//           {
//               "rank": 1,
//               "noticia": {
//                   "titulo": "Ouvinte reclama da equatorial por nï¿½o atender solicitaï¿½ï¿½o de serviï¿½o",
//                   "link": "",
//                   "tier": 3,
//                   "sentimento": "Negativa",
//                   "data": "2024-07-17T08:38:56"
//               }
//           },
//           {
//               "rank": 2,
//               "noticia": {
//                   "titulo": "Ouvinte faz denuncia contra a Equatorial",
//                   "link": "",
//                   "tier": 3,
//                   "sentimento": "Neutra",
//                   "data": "2024-07-17T08:11:01"
//               }
//           },
//           {
//               "rank": 3,
//               "noticia": {
//                   "titulo": "Cresce o nï¿½mero de casos de furto de energia no Piauï¿½",
//                   "link": "",
//                   "tier": 3,
//                   "sentimento": "Positiva",
//                   "data": "2024-07-17T07:01:52"
//               }
//           },
//           {
//               "rank": 4,
//               "noticia": {
//                   "titulo": "Equatorial registra aumento de casos de furto de energia no Piauï¿½",
//                   "link": "",
//                   "tier": 3,
//                   "sentimento": "Positiva",
//                   "data": "2024-07-17T07:01:13"
//               }
//           },
//           {
//               "rank": 5,
//               "noticia": {
//                   "titulo": "Furto de energia teve um crescimento de 5,3%  no nï¿½mero de flagrantes segundo a Equatorial",
//                   "link": "",
//                   "tier": 3,
//                   "sentimento": "Positiva",
//                   "data": "2024-07-17T07:06:16"
//               }
//           }
//       ]
//   },
//   "AL": {
//       "crit": {
//           "1": 15,
//           "2": 18,
//           "3": 148
//       },
//       "sentimento": {
//           "Positivo": 24,
//           "Neutro": 57,
//           "Negativas": 15
//       },
//       "rank": [
//           {
//               "rank": 1,
//               "noticia": {
//                   "titulo": "Atendimento presencial da Equatorial em Olho D'ï¿½gua das Flores passa por mudanï¿½as; confira",
//                   "link": "https://www.portaldealagoas.com.br/atendimento-presencial-da-equatorial-em-olho-dagua-das-flores-passa-por-mudancas-confira/",
//                   "tier": 3,
//                   "sentimento": "",
//                   "data": "2024-07-17T13:57:04"
//               }
//           },
//           {
//               "rank": 2,
//               "noticia": {
//                   "titulo": "Veja o passo a passo de como solicitar o encerramento do contrato de luz junto ï¿½ Equatorial",
//                   "link": "https://portalal7.com.br/veja-o-passo-a-passo-de-como-solicitar-o-encerramento-do-contrato-de-luz-junto-a-equatorial/?swcfpc=1",
//                   "tier": 3,
//                   "sentimento": "",
//                   "data": "2024-07-16T12:07:00"
//               }
//           },
//           {
//               "rank": 3,
//               "noticia": {
//                   "titulo": "MACEIï¿½ - Programa Brota na Grota oferece serviï¿½os da Prefeitura e Equatorial em enclave esquecido de Maceiï¿½, numa aï¿½ï¿½o desesperada de relaï¿½ï¿½es pï¿½blicas.",
//                   "link": "https://reportermaceio.com.br/maceio-programa-brota-na-grota-oferece-servicos-da-prefeitura-e-equatorial-em-enclave-esquecido-de-maceio-numa-acao-desesperada-de-relacoes-publicas/",
//                   "tier": 3,
//                   "sentimento": "",
//                   "data": "2024-07-17T12:36:00"
//               }
//           },
//           {
//               "rank": 4,
//               "noticia": {
//                   "titulo": "Veja o passo a passo de como solicitar o encerramento do contrato de luz junto ï¿½ Equatorial",
//                   "link": "https://portalbrnews.com.br/veja-o-passo-a-passo-de-como-solicitar-o-encerramento-do-contrato-de-luz-junto-a-equatorial/?swcfpc=1",
//                   "tier": 3,
//                   "sentimento": "",
//                   "data": "2024-07-16T11:59:00"
//               }
//           },
//           {
//               "rank": 5,
//               "noticia": {
//                   "titulo": "Rio: terceiro dia de megaoperaï¿½ï¿½o mira em transporte clandestino",
//                   "link": "https://alagoasaovivo.com/noticia/70948/rio-terceiro-dia-de-megaoperacao-mira-em-transporte-clandestino",
//                   "tier": 3,
//                   "sentimento": "",
//                   "data": "2024-07-17T10:28:00"
//               }
//           }
//       ]
//   },
//   "AP": {
//       "crit": {
//           "1": 10,
//           "2": 3,
//           "3": 26
//       },
//       "sentimento": {
//           "Positivo": 22,
//           "Neutro": 4,
//           "Negativas": 3
//       },
//       "rank": [
//           {
//               "rank": 1,
//               "noticia": {
//                   "titulo": "Equatorial ï¿½ confirmada investidora estratï¿½gica da Sabesp",
//                   "link": "",
//                   "tier": 3,
//                   "sentimento": "",
//                   "data": "2024-07-17T08:18:33"
//               }
//           },
//           {
//               "rank": 2,
//               "noticia": {
//                   "titulo": "Ouvinte reclama problemas de energia na comunidade Santa maia do dois",
//                   "link": "",
//                   "tier": 3,
//                   "sentimento": "Negativa",
//                   "data": "2024-07-17T07:27:56"
//               }
//           },
//           {
//               "rank": 3,
//               "noticia": {
//                   "titulo": "Nova agï¿½ncia da CSA e CEA comeï¿½a a funcionar em Santana",
//                   "link": "https://www.cleidefreires.com.br/nova-agencia-da-csa-e-cea-comeca-a-funcionar-em-santana/",
//                   "tier": 3,
//                   "sentimento": "Positiva",
//                   "data": "2024-07-16T13:21:00"
//               }
//           },
//           {
//               "rank": 4,
//               "noticia": {
//                   "titulo": "Equatorial ï¿½ confirmada investidora estratï¿½gica da Sabesp",
//                   "link": "https://www.jornaldosmunicipiosap.com.br/noticia/equatorial-e-confirmada-investidora-estrategica-da-sabesp",
//                   "tier": 3,
//                   "sentimento": "Positiva",
//                   "data": "2024-07-16T18:00:00"
//               }
//           },
//           {
//               "rank": 5,
//               "noticia": {
//                   "titulo": "Desligamento programado Equatorial",
//                   "link": "",
//                   "tier": 3,
//                   "sentimento": "Positiva",
//                   "data": "2024-07-16T17:46:02"
//               }
//           }
//       ]
//   },
//   "RS": {
//       "crit": {
//           "1": 16,
//           "2": 38,
//           "3": 33
//       },
//       "sentimento": {
//           "Positivo": 20,
//           "Neutro": 21,
//           "Negativas": 45
//       },
//       "rank": [
//           {
//               "rank": 1,
//               "noticia": {
//                   "titulo": "Ouvinte reclama de falta de energia na estrada do forte",
//                   "link": "",
//                   "tier": 3,
//                   "sentimento": "Negativa",
//                   "data": "2024-07-17T06:56:53"
//               }
//           },
//           {
//               "rank": 2,
//               "noticia": {
//                   "titulo": "Dicas de economia para enfrentar o frio",
//                   "link": "https://oalvoradense.com.br/dicas-de-economia-para-enfrentar-o-frio/",
//                   "tier": 3,
//                   "sentimento": "Positiva",
//                   "data": "2024-07-16T14:29:34"
//               }
//           },
//           {
//               "rank": 3,
//               "noticia": {
//                   "titulo": "Acidente na Estrada Caminho do Meio prejudica abastecimento de energia",
//                   "link": "https://oalvoradense.com.br/acidente-na-estrada-caminho-do-meio-prejudica-abastecimento-de-energia/",
//                   "tier": 3,
//                   "sentimento": "Positiva",
//                   "data": "2024-07-16T14:56:20"
//               }
//           },
//           {
//               "rank": 4,
//               "noticia": {
//                   "titulo": "Relatï¿½rio final da CPI da CEEE Equatorial",
//                   "link": "",
//                   "tier": 3,
//                   "sentimento": "Negativa",
//                   "data": "2024-07-16T19:06:48"
//               }
//           },
//           {
//               "rank": 5,
//               "noticia": {
//                   "titulo": "Melhorias na rede elï¿½trica na rua Tenente Edgar Wehrli em Canguï¿½u",
//                   "link": "http://eg-leal.blogspot.com/2024/07/melhorias-na-rede-eletrica-na-rua.html",
//                   "tier": 3,
//                   "sentimento": "Positiva",
//                   "data": "2024-07-16T15:34:00"
//               }
//           }
//       ]
//   },
//   "GO": {
//       "crit": {
//           "1": 34,
//           "2": 22,
//           "3": 180
//       },
//       "sentimento": {
//           "Positivo": 163,
//           "Neutro": 65,
//           "Negativas": 3
//       },
//       "rank": [
//           {
//               "rank": 1,
//               "noticia": {
//                   "titulo": "A geladeira pode estar aumentando a conta de energia da sua casa: veja como evitar",
//                   "link": "https://portal6.com.br/2024/07/17/a-geladeira-pode-estar-aumentando-a-conta-de-energia-da-sua-casa-veja-como-evitar/",
//                   "tier": 3,
//                   "sentimento": "",
//                   "data": "2024-07-17T00:00:00"
//               }
//           },
//           {
//               "rank": 2,
//               "noticia": {
//                   "titulo": "Equatorial Goiï¿½s alerta: junho e julho concentram 61% das ocorrï¿½ncias de pipas na rede elï¿½trica em 2024",
//                   "link": "https://www.issoesaopaulo.com.br/2024/07/equatorial-goias-alerta-junho-e-julho.html",
//                   "tier": 3,
//                   "sentimento": "Positiva",
//                   "data": "2024-07-15T11:25:00"
//               }
//           },
//           {
//               "rank": 3,
//               "noticia": {
//                   "titulo": "Equatorial Goiï¿½s alerta: junho e julho concentram 61% das ocorrï¿½ncias de pipas na rede elï¿½trica em 2024",
//                   "link": "https://www.cidadesecondominios.com.br/2024/07/equatorial-goias-alerta-junho-e-julho.html",
//                   "tier": 3,
//                   "sentimento": "Positiva",
//                   "data": "2024-07-15T11:28:00"
//               }
//           },
//           {
//               "rank": 4,
//               "noticia": {
//                   "titulo": "Rede elï¿½trica ï¿½ reforï¿½ada em Pirenï¿½polis",
//                   "link": "https://www.jatainews.com.br/noticia/13300/rede-eletrica-e-reforcada-em-pirenopolisn",
//                   "tier": 3,
//                   "sentimento": "Positiva",
//                   "data": "2024-07-17T08:58:00"
//               }
//           },
//           {
//               "rank": 5,
//               "noticia": {
//                   "titulo": "Equatorial Goiï¿½s alerta: junho e julho concentram 61% das ocorrï¿½ncias de pipas na rede elï¿½trica em 2024",
//                   "link": "https://canalcomq.com.br/noticia/19548/equatorial-goias-alerta-junho-e-julho-concentram-61-das-ocorrencias-de-pipas-na-rede-eletrica-em-2024#google_vignette",
//                   "tier": 3,
//                   "sentimento": "Positiva",
//                   "data": "2024-07-15T00:00:00"
//               }
//           }
//       ]
//   },
//   "EQT": {
//       "crit": {
//           "1": 81,
//           "2": 2,
//           "3": 0
//       },
//       "sentimento": {
//           "Positivo": 61,
//           "Neutro": 21,
//           "Negativas": 1
//       },
//       "rank": [
//           {
//               "rank": 1,
//               "noticia": {
//                   "titulo": "Equatorial ï¿½ confirmada investidora estratï¿½gica da Sabesp",
//                   "link": "https://sampi.net.br/aracatuba/noticias/2845150/brasil-e-mundo/2024/07/equatorial-e-confirmada-investidora-estrategica-da-sabesp",
//                   "tier": 2,
//                   "sentimento": "Positiva",
//                   "data": "2024-07-16T17:38:00"
//               }
//           },
//           {
//               "rank": 2,
//               "noticia": {
//                   "titulo": "O laboratï¿½rio maluco de polï¿½ticas pï¿½blicas",
//                   "link": "https://sampi.net.br/aracatuba/noticias/2844494/opinioes/2024/07/o-laboratorio-maluco-de-politicas-publicas",
//                   "tier": 2,
//                   "sentimento": "Neutra",
//                   "data": "2024-07-13T05:48:54"
//               }
//           },
//           {
//               "rank": 3,
//               "noticia": {
//                   "titulo": "Juros dos EUA, privatizaï¿½ï¿½o da Sabesp; veja os destaques do mercado",
//                   "link": "https://economia.uol.com.br/colunas/por-dentro-da-bolsa/2024/07/17/juros-dos-eua-privatizacao-da-sabesp-veja-os-destaques-de-hoje-no-mercado.htm",
//                   "tier": 1,
//                   "sentimento": "Positiva",
//                   "data": "2024-07-17T08:33:06"
//               }
//           },
//           {
//               "rank": 4,
//               "noticia": {
//                   "titulo": "Governo de SP confirma Equatorial como investidora estratï¿½gica da Sabesp",
//                   "link": "https://jovempan.com.br/programas/jornal-da-manha/governo-de-sp-confirma-equatorial-como-investidora-estrategica-da-sabesp.html",
//                   "tier": 1,
//                   "sentimento": "Positiva",
//                   "data": "2024-07-17T09:00:00"
//               }
//           },
//           {
//               "rank": 5,
//               "noticia": {
//                   "titulo": "Privatizaï¿½ï¿½o da Sabesp atrai mais de 300 investidores globais na oferta pï¿½blica",
//                   "link": "https://www.estadao.com.br/amp/politica/coluna-do-estadao/privatizacao-da-sabesp-atrai-mais-de-300-investidores-globais-na-oferta-publica/",
//                   "tier": 1,
//                   "sentimento": "Positiva",
//                   "data": "2024-07-16T12:34:00"
//               }
//           }
//       ]
//   }
// }

export default function Dashboard(props: any) {
  const randomNumber = (limit: any) => {
    return Math.floor(Math.random() * limit) + 1; //0 até limit
  };
  const generateLineChartDataArray = () => {
    return Array.from({ length: 7 }, () =>
      Array.from({ length: 7 }, () => randomNumber(50))
    );
  };
  const generateVerticalBarsDataArray = (array: any) => {
    const sum = array.reduce((acc: any, value: any) => acc + value, 0);
    return Math.ceil((sum / array.length) * 30);
  };
  const [lineChartDataArray] = useState(generateLineChartDataArray);
  const [verticalBarsDataArray] = useState(lineChartDataArray.map(generateVerticalBarsDataArray));
  const [valores, setValores] = useState({
    amapa: 92,
    piaui: 56,
    maranhao: 28,
    para: 40,
    goias: 20,
    alagoas: 35,
  })
  const tick = () => {
    setValores({
      amapa: randomNumber(100),
      piaui: randomNumber(100),
      maranhao: randomNumber(100),
      para: randomNumber(100),
      goias: randomNumber(100),
      alagoas: randomNumber(100)
    })
  }
  const counter = () => {
    const timer = setInterval(() => tick(), 3000);
    return () => clearInterval(timer)
  }
  useEffect(() => {
      counter();
      if(!props?.params?.id) {
        router.push('/profile'); 
      }
  }, []);   

  return (
    <Content>
      <Container className='container'>
        {/* {props?.params?.id} */}
        <Intro className="d-flex flex-column text-align-start">
          <Title>Bem-vindo ao Delfos</Title>
          <Text>O centro de monitoramento de clientes da Equatorial. Escolha a visão que deseja explorar e acompanhe seus dados em tempo real.</Text>
        </Intro>
        <>
        <div className='dashboard-container'>
          <label className='title'>Impacto Negativo - Redes Sociais</label>
          <label className='subtitle'>Notícias que impactam negativamente a marca da Equatorial por região</label>
          <div className='horizontal-container'>
            <div className='doughnut-square'>
            <label className='title'>Amapa</label>
              <div className='square-div'>
                <div className='doughnut'>
                  <HalfDoughnut value={valores.amapa} />
                </div>
                <label className='title'>Percentual de Menções Negativas</label>
                <Table />
              </div>
            </div>
            <div className='doughnut-square'>
            <label className='title'>Piaui</label>
              <div className='square-div'>
                <div className='doughnut'>
                  <HalfDoughnut value={valores.piaui} />
                </div>
                <label className='title'>Percentual de Menções Negativas</label>
                <Table />
              </div>
    
            </div>
            <div className='doughnut-square'>
            <label className='title'>Maranhão</label>
              <div className='square-div'>
                <div className='doughnut'>
                  <HalfDoughnut value={valores.maranhao} />
                </div>
                <label className='title'>Percentual de Menções Negativas</label>
                <Table />
              </div>
            </div>
            <div className='doughnut-square'>
            <label className='title'>Pará</label>
              <div className='square-div'>
                <div className='doughnut'>
                  <HalfDoughnut value={valores.para} />
                </div>
                <label className='title'>Percentual de Menções Negativas</label>
                <Table />
              </div>
            </div>
          </div>
          <div className='horizontal-container'>
            <div className='doughnut-square'>
            <label className='title'>Goiás</label>
              <div className='square-div'>
                <div className='doughnut'>
                  <HalfDoughnut value={valores.goias} />
                </div>
                <label className='title'>Percentual de Menções Negativas</label>
                <Table />
              </div>
            </div>
            <div className='doughnut-square'>
            <label className='title'>Alagoas</label>
              <div className='square-div'>
                <div className='doughnut'>
                  <HalfDoughnut value={valores.alagoas} />
                </div>
                <label className='title'>Percentual de Menções Negativas</label>
                <Table />
              </div>
            </div>
            <div className='doughnut-square'>
            <label className='title'>Maranhão</label>
              <div className='square-div'>
                <div className='doughnut'>
                  <HalfDoughnut value={28} />
                </div>
                <label className='title'>Percentual de Menções Negativas</label>
                <Table />
              </div>
            </div>
            <div className='doughnut-square'>
            <label className='title'>Maranhão</label>
              <div className='square-div'>
                <div className='doughnut'>
                  <HalfDoughnut value={80} />
                </div>
                <label className='title'>Percentual de Menções Negativas</label>
                <Table />
              </div>
            </div>
          </div>
          <label className='title'>Menções Recebidas - Redes Sociais</label>
          <label className='subtitle'>Volume de menções recebidas mensalmente nas redes sociais por região</label>
          <div className='horizontal-container'>
            <div className='bar-chart-square'>
            <label className='title'>Volume total mensal por distribuidora</label>
              <div className='teste'>
                <VerticalBarChart data={verticalBarsDataArray} />
              </div>
            </div>
            <div className='bar-chart-square'>
            <label className='title'>Volume diário de menções recebidas</label>
              <div className='teste'>
                <LineChart data={lineChartDataArray} />
              </div>
            </div>
          </div>
          <label className='title'>Mural de Sentimentos - Redes Sociais</label>
          <label className='subtitle'>Mural de sentimentos da marca Equatorial nas redes sociais por região</label>
          <div className='horizontal-container'>
            <div className='bar-chart-square'>
              <label className='title'>Amapá</label>
              <div className='teste'>
                <BarChart />
              </div>
            </div>
            <div className='bar-chart-square'>
              <label className='title'>Piauí</label>
              <div className='teste'>
                <BarChart />
              </div>
            </div>
            <div className='bar-chart-square'>
              <label className='title'>Maranhão</label>
              <div className='teste'>
                <BarChart />
              </div>
            </div>
            <div className='bar-chart-square'>
              <label className='title'>Pará</label>
              <div className='teste'>
                <BarChart />
              </div>
            </div>
            <div className='bar-chart-square'>
              <label className='title'>Rio Grande do Sul</label>
              <div className='teste'>
                <BarChart />
              </div>
            </div>
          </div>
          <div className='horizontal-container'>
            <div className='bar-chart-square'>
              <label className='title'>Goiás</label>
              <div className='teste'>
                <BarChart />
              </div>
            </div>
            <div className='bar-chart-square'>
              <label className='title'>Alagoas</label>
              <div className='teste'>
                <BarChart />
              </div>
            </div>
          </div>
          <label className='title'>Tempo médio de Resposta - Redes Sociais</label>
          <label className='subtitle'>Tempo médio de resposta ao cliente nas redes sociais por região</label>
          <div className='horizontal-container'>
            <div className='doughnut-square'>
                <label className='title'>Alagoas</label>
                <div className='square-div'>
                  <div className='answer-mean-doughnut'>
                    <HalfDoughnut value={valores.maranhao}/>
                  </div>
                  <label className='description'>Tempo em horas</label>
                </div>
              </div>
            <div className='doughnut-square'>
              <label className='title'>Piauí</label>
              <div className='square-div'>
                <div className='answer-mean-doughnut'>
                  <HalfDoughnut value={valores.goias}/>
                </div>
                <label className='description'>Tempo em horas</label>
              </div>
            </div>
            <div className='doughnut-square'>
              <label className='title'>Maranhão</label>
              <div className='square-div'>
                <div className='answer-mean-doughnut'>
                  <HalfDoughnut value={valores.alagoas}/>
                </div>
                <label className='description'>Tempo em horas</label>
              </div>
            </div>
            <div className='doughnut-square'>
              <label className='title'>Pará</label>
              <div className='square-div'>
                <div className='answer-mean-doughnut'>
                  <HalfDoughnut value={valores.amapa}/>
                </div>
                <label className='description'>Tempo em horas</label>
              </div>
            </div>
            <div className='doughnut-square'>
              <label className='title'>Rio Grande do Sul</label>
              <div className='square-div'>
                <div className='answer-mean-doughnut'>
                  <HalfDoughnut value={valores.para}/>
                </div>
                <label className='description'>Tempo em horas</label>
              </div>
            </div>
            <div className='doughnut-square'>
              <label className='title'>Goiás</label>
              <div className='square-div'>
                <div className='answer-mean-doughnut'>
                  <HalfDoughnut value={valores.piaui}/>
                </div>
                <label className='description'>Tempo em horas</label>
              </div>
            </div>
            <div className='doughnut-square'>
              <label className='title'>Amapá</label>
              <div className='square-div'>
                <div className='answer-mean-doughnut'>
                  <HalfDoughnut value={valores.goias}/>
                </div>
                <label className='description'>Tempo em horas</label>
              </div>
            </div>
          </div>
          <label className='title'>Favorabilidade - Imprensa</label>
          <label className='subtitle'>Termômetro reputacional da marca Equatorial na imprensa por região</label>
          <div className='horizontal-container'>
            <div className='doughnut-square'>
              <label className='title'>Alagoas</label>
              <div className='square-div'>
                <div className='answer-mean-doughnut'>
                  <HalfDoughnutFavorability value={valores.alagoas}/>
                </div>
                <label className='description'>Tempo em horas</label>
              </div>
            </div>
            <div className='doughnut-square'>
              <label className='title'>Piauí</label>
              <div className='square-div'>
                <div className='answer-mean-doughnut'>
                  <HalfDoughnutFavorability value={valores.piaui}/>
                </div>
                <label className='description'>Tempo em horas</label>
              </div>
            </div>
            <div className='doughnut-square'>
              <label className='title'>Maranhão</label>
              <div className='square-div'>
                <div className='answer-mean-doughnut'>
                  <HalfDoughnutFavorability value={valores.maranhao}/>
                </div>
                <label className='description'>Tempo em horas</label>
              </div>
            </div>
            <div className='doughnut-square'>
              <label className='title'>Alagoas</label>
              <div className='square-div'>
                <div className='answer-mean-doughnut'>
                  <HalfDoughnutFavorability value={valores.maranhao}/>
                </div>
                <label className='description'>Tempo em horas</label>
              </div>
            </div>
            <div className='doughnut-square'>
              <label className='title'>Alagoas</label>
              <div className='square-div'>
                <div className='answer-mean-doughnut'>
                  <HalfDoughnutFavorability value={valores.maranhao}/>
                </div>
                <label className='description'>Tempo em horas</label>
              </div>
            </div>
            <div className='doughnut-square'>
              <label className='title'>Alagoas</label>
              <div className='square-div'>
                <div className='answer-mean-doughnut'>
                  <HalfDoughnutFavorability value={valores.maranhao}/>
                </div>
                <label className='description'>Tempo em horas</label>
              </div>
            </div>
            <div className='doughnut-square'>
              <label className='title'>Alagoas</label>
              <div className='square-div'>
                <div className='answer-mean-doughnut'>
                  <HalfDoughnutFavorability value={valores.maranhao}/>
                </div>
                <label className='description'>Tempo em horas</label>
              </div>
            </div>
            <div className='doughnut-square'>
              <label className='title'>Alagoas</label>
              <div className='square-div'>
                <div className='answer-mean-doughnut'>
                  <HalfDoughnutFavorability value={valores.maranhao}/>
                </div>
                <label className='description'>Tempo em horas</label>
              </div>
            </div>
          </div>
        </div>
      </>
      </Container>
    </Content>
  );
}
