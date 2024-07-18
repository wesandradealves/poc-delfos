import React from 'react';
import ReactECharts from 'echarts-for-react';

const HalfDoughnutNegativeImpact = ({value}) => {
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
                        [0.50, '#FD8B23'], // Verde até 50%
                        [1, '#FF3838'], // Vermelho de 50% a 100%
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
                      value: 50, // valor inicial do ponteiro
                    },
                  ],
                },
              ],
    }
    return <ReactECharts option={option} />;
};

export default HalfDoughnutNegativeImpact;