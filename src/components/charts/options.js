export const option = {
  title: {
    text: 'vue-Echarts'
  },
  legend: {
    data: ['销量']
  },
  xAxis: {
    data: ['衬衫', '羊毛衫', '雪纺衫',
      '裤子', '高跟鞋', '袜子', 'tuoxie'
    ]
  },
  yAxis: {},
  series: [{
    name: '销量',
    type: 'line',
    data: [5, 20, 36, 10, 10, 70]
  }]
}
