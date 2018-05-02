<template>
  <div>
    <Chart id="test" :option="chartData"   @chartclick="chartclick"></Chart>
    <button @click="refreshData()">点击</button>
  </div>
</template>

<script>
import Chart from '@/base/initCharts'
import { option } from './options'
export default {
  data () {
    return {
      flag: true,
      chartData: option
    }
  },
  methods: {
    refreshData () {
      let sData = this.chartData.series[0].data
      if (this.flag) {
        this.chartData.sData = sData.sort()
      } else {
        this.chartData.sData = sData.sort((a, b) => {
          return a - b
        })
      }
      this.flag = !this.flag
    },
    chartclick (data) {
      console.log(data)
    }
  },
  components: {
    Chart
  }
}
</script>
