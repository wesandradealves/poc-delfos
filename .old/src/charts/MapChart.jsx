import React, { useEffect, useState } from 'react';
import * as echarts from 'echarts';
import EChartsReact from "echarts-for-react";


const MapChart = () => {
    const [brasilJson, setBrasilJson] = useState(null);
  
    useEffect(() => {
      fetch('../../public/br.json')
        .then(response => response.json())
        .then(data => {
          echarts.registerMap('brasil', data);
          setBrasilJson(data);
        })
        .catch(error => console.error('Error loading the map JSON:', error));
    }, []);
  
    const getOption = () => {
      return {
        tooltip: {
          trigger: 'item',
          formatter: '{b}'
        },
        visualMap: {
          min: 0,
          max: 1000,
          left: 'left',
          top: 'bottom',
          text: ['High', 'Low'],
          inRange: {
            color: ['#e0ffff', '#006edd']
          },
          calculable: true
        },
        series: [
          {
            name: 'Brasil',
            type: 'map',
            mapType: 'brasil',
            label: {
              show: true
            },
            data: [
              { name: 'Acre', value: Math.round(Math.random() * 1000) },
              { name: 'Alagoas', value: Math.round(Math.random() * 1000) },
              // Adicione os outros estados aqui
            ]
          }
        ]
      };
    };
  
    if (!brasilJson) {
      return <div>Loading...</div>;
    }
  
    return <EChartsReact option={getOption()} style={{ height: '600px', width: '100%' }} />;
  };

export default MapChart;