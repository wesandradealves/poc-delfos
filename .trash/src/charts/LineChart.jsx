import React from 'react';
import ReactECharts from 'echarts-for-react';

const estados = ['Alagoas', 'Piauí', 'Maranhão', 'Pará', 'Rio Grande do Sul', 'Goiás', 'Amapá']
const dias = ['10/06', '11/06', '12/06', '13/06', '14/06', '15/06', '16/06']

const LineChart = ({ data }) => {
  const dataObjects = data.map((dataEntry, index) => {
    return {
      name: estados[index],
      type: 'line',
      symbol: 'none',
      lineStyle: {
        width: 2,
        cap: 'round',
      },
      data: dataEntry
    }
  });

  const option = {
    tooltip: {
      trigger: 'axis',
    },
    legend: {
      name: dataObjects,
      itemStyle: {
        opacity: 0
      },
      textStyle: {
        color: '#FCFCFC'
      },
      lineStyle: {
        width: 5,
        cap: 'round',
      },
    },
    xAxis: [{
      type: 'category',
      boundaryGap: false,
      data: dias,
      axisLine: {
        show: false
      },
      axisTick: {
        show: false
      },
      axisLabel: {
        color: '#FCFCFC',
        interval: 0,
        width: 80,
        overflow: 'break'
      }
    }],
    yAxis: [{
      type: "value",
      axisLabel: {
        color: '#FCFCFC'
      },
      splitLine: {
        lineStyle: {
          color: '#0D0E24'
        }
      },
    }],
    series: dataObjects,
  };

  return <ReactECharts option={option} />;
};

export default LineChart;
