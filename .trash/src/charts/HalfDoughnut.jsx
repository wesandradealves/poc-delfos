import React from 'react';
import ReactECharts from 'echarts-for-react';

const HalfDoughnut = ({value}) => {
    const option = {
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
                        value: value, // valor inicial do ponteiro
                      },
                    ],
                  },
                ],
      }
    return <ReactECharts option={option} />;
};

export default HalfDoughnut;