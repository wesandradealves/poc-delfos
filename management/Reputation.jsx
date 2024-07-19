'use client'
import React, { useEffect, useState } from 'react';
import LineChart from '../../../components/charts/LineChart';
import BarChart from '../../../components/charts/BarCharts';
import HalfDoughnut from '../../../components/charts/HalfDoughnut';
import Table from '../../../components/datagrid/Table';
import HalfDoughnutFavorability from '../../../components/charts/press/HalfDoughnutFavorability';
import VerticalBarChart from '../../../components/charts/VerticalBarCharts';
import './globals.css';


export default function ReputationVision() {
    function randomNumber(limit) {
      return Math.floor(Math.random() * limit) + 1; //0 até limit
    };
    const generateLineChartDataArray = () => {
      return Array.from({ length: 7 }, () =>
        Array.from({ length: 7 }, () => randomNumber(50))
      );
    };
  
    const generateVerticalBarsDataArray = (array) => {
      const sum = array.reduce((acc, value) => acc + value, 0);
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
  
    useEffect(() => {
      const timer = setInterval(() => tick(), 3000);
      return () => clearInterval(timer)
    }, []);
  
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
    return (
      <>
        <div className='dashboard-container'>
          <label className='title'>Impacto Negativo - Redes Sociais</label>
          <label className='subtitle'>Notícias que impactam negativamente a marca da Equatorial por região</label>
          <div className='horizontal-container'>
            <div className='doughnut-square'>
              <Title name="Amapa" />
              <div className='square-div'>
                <div className='doughnut'>
                  <HalfDoughnut value={valores.amapa} />
                </div>
                <label className='title'>Percentual de Menções Negativas</label>
                <Table />
              </div>
            </div>
            <div className='doughnut-square'>
              <Title name="Piaui" />
              <div className='square-div'>
                <div className='doughnut'>
                  <HalfDoughnut value={valores.piaui} />
                </div>
                <label className='title'>Percentual de Menções Negativas</label>
                <Table />
              </div>
    
            </div>
            <div className='doughnut-square'>
              <Title name="Maranhão" />
              <div className='square-div'>
                <div className='doughnut'>
                  <HalfDoughnut value={valores.maranhao} />
                </div>
                <label className='title'>Percentual de Menções Negativas</label>
                <Table />
              </div>
            </div>
            <div className='doughnut-square'>
              <Title name="Pará" />
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
              <Title name="goias" />
              <div className='square-div'>
                <div className='doughnut'>
                  <HalfDoughnut value={valores.goias} />
                </div>
                <label className='title'>Percentual de Menções Negativas</label>
                <Table />
              </div>
            </div>
            <div className='doughnut-square'>
              <Title name="Alagoas" />
              <div className='square-div'>
                <div className='doughnut'>
                  <HalfDoughnut value={valores.alagoas} />
                </div>
                <label className='title'>Percentual de Menções Negativas</label>
                <Table />
              </div>
            </div>
            <div className='doughnut-square'>
              <Title name="Maranhão" />
              <div className='square-div'>
                <div className='doughnut'>
                  <HalfDoughnut value={28} />
                </div>
                <label className='title'>Percentual de Menções Negativas</label>
                <Table />
              </div>
            </div>
            <div className='doughnut-square'>
              <Title name="Maranhão" />
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
              <Title name="Volume total mensal por distribuidora" />
              <div className='teste'>
                <VerticalBarChart data={verticalBarsDataArray} />
              </div>
            </div>
            <div className='bar-chart-square'>
              <Title name="Volume diário de menções recebidas" />
              <div className='teste'>
                <LineChart data={lineChartDataArray} />
              </div>
            </div>
          </div>
          <label className='title'>Mural de Sentimentos - Redes Sociais</label>
          <label className='subtitle'>Mural de sentimentos da marca Equatorial nas redes sociais por região</label>
          <div className='horizontal-container'>
            <div className='bar-chart-square'>
              <Title name="Amapá" />
              <div className='teste'>
                <BarChart />
              </div>
            </div>
            <div className='bar-chart-square'>
              <Title name="Piauí" />
              <div className='teste'>
                <BarChart />
              </div>
            </div>
            <div className='bar-chart-square'>
              <Title name="Maranhão" />
              <div className='teste'>
                <BarChart />
              </div>
            </div>
            <div className='bar-chart-square'>
              <Title name="Pará" />
              <div className='teste'>
                <BarChart />
              </div>
            </div>
            <div className='bar-chart-square'>
              <Title name="Rio Grande do Sul" />
              <div className='teste'>
                <BarChart />
              </div>
            </div>
          </div>
          <div className='horizontal-container'>
            <div className='bar-chart-square'>
              <Title name="Goiás" />
              <div className='teste'>
                <BarChart />
              </div>
            </div>
            <div className='bar-chart-square'>
              <Title name="Alagoas" />
              <div className='teste'>
                <BarChart />
              </div>
            </div>
          </div>
          <label className='title'>Tempo médio de Resposta - Redes Sociais</label>
          <label className='subtitle'>Tempo médio de resposta ao cliente nas redes sociais por região</label>
          <div className='horizontal-container'>
            <div className='doughnut-square'>
                <Title name="Alagoas"/>
                <div className='square-div'>
                  <div className='answer-mean-doughnut'>
                    <HalfDoughnut value={valores.maranhao}/>
                  </div>
                  <label className='description'>Tempo em horas</label>
                </div>
              </div>
            <div className='doughnut-square'>
              <Title name="Piauí"/>
              <div className='square-div'>
                <div className='answer-mean-doughnut'>
                  <HalfDoughnut value={valores.goias}/>
                </div>
                <label className='description'>Tempo em horas</label>
              </div>
            </div>
            <div className='doughnut-square'>
              <Title name="Maranhão"/>
              <div className='square-div'>
                <div className='answer-mean-doughnut'>
                  <HalfDoughnut value={valores.alagoas}/>
                </div>
                <label className='description'>Tempo em horas</label>
              </div>
            </div>
            <div className='doughnut-square'>
              <Title name="Pará"/>
              <div className='square-div'>
                <div className='answer-mean-doughnut'>
                  <HalfDoughnut value={valores.amapa}/>
                </div>
                <label className='description'>Tempo em horas</label>
              </div>
            </div>
            <div className='doughnut-square'>
              <Title name="Rio Grande do Sul"/>
              <div className='square-div'>
                <div className='answer-mean-doughnut'>
                  <HalfDoughnut value={valores.para}/>
                </div>
                <label className='description'>Tempo em horas</label>
              </div>
            </div>
            <div className='doughnut-square'>
              <Title name="Goiás"/>
              <div className='square-div'>
                <div className='answer-mean-doughnut'>
                  <HalfDoughnut value={valores.piaui}/>
                </div>
                <label className='description'>Tempo em horas</label>
              </div>
            </div>
            <div className='doughnut-square'>
              <Title name="Amapá"/>
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
              <Title name="Alagoas"/>
              <div className='square-div'>
                <div className='answer-mean-doughnut'>
                  <HalfDoughnutFavorability value={valores.alagoas}/>
                </div>
                <label className='description'>Tempo em horas</label>
              </div>
            </div>
            <div className='doughnut-square'>
              <Title name="Piaui"/>
              <div className='square-div'>
                <div className='answer-mean-doughnut'>
                  <HalfDoughnutFavorability value={valores.piaui}/>
                </div>
                <label className='description'>Tempo em horas</label>
              </div>
            </div>
            <div className='doughnut-square'>
              <Title name="Maranhão"/>
              <div className='square-div'>
                <div className='answer-mean-doughnut'>
                  <HalfDoughnutFavorability value={valores.maranhao}/>
                </div>
                <label className='description'>Tempo em horas</label>
              </div>
            </div>
            <div className='doughnut-square'>
              <Title name="Alagoas"/>
              <div className='square-div'>
                <div className='answer-mean-doughnut'>
                  <HalfDoughnutFavorability value={valores.maranhao}/>
                </div>
                <label className='description'>Tempo em horas</label>
              </div>
            </div>
            <div className='doughnut-square'>
              <Title name="Alagoas"/>
              <div className='square-div'>
                <div className='answer-mean-doughnut'>
                  <HalfDoughnutFavorability value={valores.maranhao}/>
                </div>
                <label className='description'>Tempo em horas</label>
              </div>
            </div>
            <div className='doughnut-square'>
              <Title name="Alagoas"/>
              <div className='square-div'>
                <div className='answer-mean-doughnut'>
                  <HalfDoughnutFavorability value={valores.maranhao}/>
                </div>
                <label className='description'>Tempo em horas</label>
              </div>
            </div>
            <div className='doughnut-square'>
              <Title name="Alagoas"/>
              <div className='square-div'>
                <div className='answer-mean-doughnut'>
                  <HalfDoughnutFavorability value={valores.maranhao}/>
                </div>
                <label className='description'>Tempo em horas</label>
              </div>
            </div>
            <div className='doughnut-square'>
              <Title name="Alagoas"/>
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
    );
  }
  
  function Title({ name }) {
    return (
      <label className='title'>{name}</label>
    )
  }