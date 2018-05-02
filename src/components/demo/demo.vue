<template>
  <div class="page">
    demo : {{singer.name}}
    <el-button @click="setUserName">set</el-button>
    <div>
      <el-button>默认按钮</el-button>
      <el-button type="primary">主要按钮</el-button>
      <el-button type="success">成功按钮</el-button>
      <el-button type="info">信息按钮</el-button>
      <el-button type="warning">警告按钮</el-button>
      <el-button type="danger">危险按钮</el-button>
    </div>
    <el-button @click="change">start</el-button>
    <el-button @click="reset">reset</el-button>
    <tweenNum :num='num'></tweenNum>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'
export default {
  name: 'demo',
  data () {
    return {
      num: 0
    }
  },
  methods: {
    ...mapMutations({
      setUser: 'SET_USER'
    }),
    setUserName () {
      this.setUser('zhangsan')
    },
    change () {
      this.num = 500.0009
    },
    reset () {
      this.num = 0.000
    }
  },
  components: {

  },
  computed: {
    ...mapGetters([
      'singer'
    ]),
    toNum () {
      return parseFloat(this.num)
    }
  }
}
</script>

<style lang='scss' scoped>
@import '../../common/css/variable.scss';
.page{
  color: $color-sub-theme;
}
</style>
