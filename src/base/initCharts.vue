<template>
  <div :id="id" :style="style">
  </div>
</template>

<script>
import echarts from '@/common/js/initEcharts'
export default {
  name: 'Chart',
  data () {
    return {
      chart: ''
    }
  },
  props: {
    id: {
      type: String
    },
    width: {
      type: String,
      default: '100%'
    },
    height: {
      type: String,
      default: '300px'
    },
    option: {
      type: Object,
      default () {
        return {}
      }
    }
  },
  mounted () {
    this.init()
  },
  methods: {
    init () {
      this.chart = echarts.init(document.getElementById(this.id))
      this.chart.setOption(this.option)
      window.addEventListener('resize', this.chart.resize)
      this.chart.on('click', (params) => {
        this.$emit('chartclick', params)
      })
    }
  },
  computed: {
    style () {
      return {
        height: this.height,
        width: this.width
      }
    }
  },
  watch: {
    option: {
      handler (newVal, oldVal) {
        if (this.chart) {
          if (newVal) {
            this.chart.setOption(newVal)
          } else {
            this.chart.setOption(oldVal)
          }
        } else {
          this.init()
        }
      },
      deep: true
    }
  }
}
</script>
