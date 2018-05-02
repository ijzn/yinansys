<template>
  <div>
    <down id='test' excelName="test1" :excelData="excelData1">
      <el-table :data="excelData" tooltip-effect="dark">
        <el-table-column label="名称" prop="name" center show-overflow-tooltip></el-table-column>
        <el-table-column label="分量" prop="size"  show-overflow-tooltip></el-table-column>
        <el-table-column label="口味" prop="taste"  show-overflow-tooltip></el-table-column>
        <el-table-column label="单价(元)" prop="price"  show-overflow-tooltip></el-table-column>
        <el-table-column label="剩余(份)" prop="remain"  show-overflow-tooltip></el-table-column>
      </el-table>
    </down>
    <el-button @click="test">12312</el-button>
  </div>
</template>

<script>
import down from '@/base/downexcel'
export default {
  data () {
    return {
      excelData: [
        {
          name: '红烧鱼', size: '大', taste: '微辣', price: '40', remain: '100'
        },
        {
          name: '麻辣小龙虾', size: '大', taste: '麻辣', price: '138', remain: '200'
        },
        {
          name: '清蒸小龙虾', size: '大', taste: '清淡', price: '138', remain: '200'
        },
        {
          name: '香辣小龙虾', size: '大', taste: '特辣', price: '138', remain: '200'
        },
        {
          name: '十三香小龙虾', size: '大', taste: '中辣', price: '138', remain: '108'
        },
        {
          name: '蒜蓉小龙虾', size: '大', taste: '中辣', price: '138', remain: '100'
        },
        {
          name: '凉拌牛肉', size: '中', taste: '中辣', price: '48', remain: '60'
        },
        {
          name: '虾仁寿司', size: '大', taste: '清淡', price: '29', remain: '无限'
        },
        {
          name: '海苔寿司', size: '大', taste: '微辣', price: '26', remain: '无限'
        },
        {
          name: '金针菇寿司', size: '大', taste: '清淡', price: '23', remain: '无限'
        },
        {
          name: '泡菜寿司', size: '大', taste: '微辣', price: '24', remain: '无限'
        },
        {
          name: '鳗鱼寿司', size: '大', taste: '清淡', price: '28', remain: '无限'
        },
        {
          name: '肉松寿司', size: '大', taste: '清淡', price: '22', remain: '无限'
        },
        {
          name: '三文鱼寿司', size: '大', taste: '清淡', price: '30', remain: '无限'
        },
        {
          name: '蛋黄寿司', size: '大', taste: '清淡', price: '20', remain: '无限'
        }
      ]
    }
  },
  computed: {
    excelData1 () {
      let arr = []
      this.excelData.forEach((item) => {
        let obj = {}
        let keys = ['名称', '分量', '口味', '单价(元)', '剩余(份)']
        let values = Object.values(item)
        console.log('keys ', values)
        for (let i = 0; i < keys.length; i++) {
          const el = keys[i]
          obj[el] = values[i]
        }
        arr.push(obj)
      })
      return arr
    }
  },
  methods: {
    test () {
      let arr = []
      this.excelData.forEach((item) => {
        let obj = {}
        let keys = ['名称', '分量', '口味', '单价(元)', '剩余(份)']
        let values = Object.values(item)
        console.log('keys ', values)
        for (let i = 0; i < keys.length; i++) {
          const el = keys[i]
          obj[el] = values[i]
        }
        arr.push(obj)
      })
      return arr
    }
  },
  components: {
    down
  }
}
</script>

<style scoped lang="scss"></style>
