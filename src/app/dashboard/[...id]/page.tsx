"use client";

import router from "next/router";
import { useEffect } from "react";
import { Intro } from "@/app/profile/style";
import { Content, Container, Text, Title } from "./style";
import { useRouter } from 'next/navigation';
import { usePathname } from 'next/navigation';

// import "@/components/datagrid/table.css";
// import LineChart from '../../../components/charts/LineChart';
// import BarChart from '../../../components/charts/BarCharts';
// import HalfDoughnut from '../../../components/charts/HalfDoughnut';
// import Table from '../../../components/datagrid/Table';
// import HalfDoughnutFavorability from '../../../components/charts/press/HalfDoughnutFavorability';
// import VerticalBarChart from '../../../components/charts/VerticalBarCharts';

export default function Dashboard(props: any) {
  const router = useRouter();
  const pathname = usePathname();

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

  // const randomNumber = (limit: any) => {
  //   return Math.floor(Math.random() * limit) + 1; //0 até limit
  // };
  // const generateLineChartDataArray = () => {
  //   return Array.from({ length: 7 }, () =>
  //     Array.from({ length: 7 }, () => randomNumber(50))
  //   );
  // };
  // const generateVerticalBarsDataArray = (array: any) => {
  //   const sum = array.reduce((acc: any, value: any) => acc + value, 0);
  //   return Math.ceil((sum / array.length) * 30);
  // };
  // const [lineChartDataArray] = useState(generateLineChartDataArray);
  // const [verticalBarsDataArray] = useState(lineChartDataArray.map(generateVerticalBarsDataArray));
  // const [valores, setValores] = useState({
  //   amapa: 92,
  //   piaui: 56,
  //   maranhao: 28,
  //   para: 40,
  //   goias: 20,
  //   alagoas: 35,
  // })
  // const tick = () => {
  //   setValores({
  //     amapa: randomNumber(100),
  //     piaui: randomNumber(100),
  //     maranhao: randomNumber(100),
  //     para: randomNumber(100),
  //     goias: randomNumber(100),
  //     alagoas: randomNumber(100)
  //   })
  // }
  // const counter = () => {
  //   const timer = setInterval(() => tick(), 3000);
  //   return () => clearInterval(timer)
  // }

  useEffect(() => {
      // counter();
      if(!props?.params?.id && getCookie("user")) {
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
        {/* <>
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
        </> */}
      </Container>
    </Content>
  );
}
