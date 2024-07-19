import React from "react";
import EChartsReact from "echarts-for-react";


const BarChart = () => {

    const option = {
      dataset: {
        source: [
          ['quantidade', 'sentimento'],
          [400, 'Negativo'],
          [350, 'Neutro'],
          [600, 'Positivo'],
        ]
      },
      textStyle: {
        color: '#EFEFEF',
        fontSize: 14
      },
      grid: { containLabel: true },
      xAxis: { 
        splitLine: {
          lineStyle: {
            color: '#0D0E24'
          }
        },
        axisLine: {
          show: false
        }
      },
      yAxis: { 
        type: 'category',
        axisTick: {
          show: false
        },
        splitLine: {
          show: true,
          lineStyle: {
            color: '#0D0E24'
          }
        },
        axisLine: {
          show: false
        },
        data: [{
          value: 'Negativo',
          textStyle: {
            fontSize: 14,
            color: '#EFEFEF'
          }
        },
        {
          value: 'Neutro',
          textStyle: {
            fontSize: 14,
            color: '#EFEFEF'
          }
        },
        {
          value: 'Positivo',
          textStyle: {
            fontSize: 14,
            color: '#EFEFEF'
          }
        }]
       },
      colorBy: 'data',
      color: ['#FF3838', '#FD8B23', '#63EF04'],
      series: [
        {
          type: 'bar',
          encode: {
            // Map the "amount" column to X axis.
            x: 'quantidade',
            // Map the "product" column to Y axis
            y: 'sentimento'
          }
        }
      ]
    };
    return <EChartsReact option={option} />;
}

export default BarChart;