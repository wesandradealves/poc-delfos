import React from "react";
import EChartsReact from "echarts-for-react";

const VerticalBarChart = ({ data }) => {
  const option = {
    label: {
      show: true,
      color: '#FCFCFC',
      position: 'top'
    },
    tooltip: {
      trigger: 'axis',
      showContent: false,
      axisPointer: {
        type: "shadow"
      },
    },
    xAxis: [{
      type: "category",
      data: ['Alagoas', 'Piauí', 'Maranhão', 'Pará', 'Rio Grande do Sul', 'Goiás', 'Amapá'],
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
      }
    }],
    color: ['#63EF04'],
    series: [
      {
        type: 'bar',
        data: data
      }
    ]
  };
  return <EChartsReact option={option} />;
}

export default VerticalBarChart;