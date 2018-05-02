<template>
  <div class="index" v-loading.fullscreen.lock="fullscreenLoading" element-loading-text="拼命加载中...">
    <a :id="id"></a>
    <div @click="downloadFile(excelData)">导出</div>
    <!--错误信息提示-->
    <el-dialog title="提示" v-model="errorDialog" size="tiny">
      <span>{{errorMsg}}</span>
        <span slot="footer" class="dialog-footer">
          <el-button type="primary" @click="errorDialog=false">确认</el-button>
        </span>
    </el-dialog>
    <slot>
      <!--展示导入信息-->
    </slot>
  </div>
</template>

<script>
import XLSX from 'xlsx'
export default {
  name: 'Index',
  props: {
    // 下载链接 名字
    id: {
      type: String,
      default: 'downlink'
    },
    // excel 表格名称
    excelName: {
      type: String,
      default: '表格'
    },
    // 需要导出成的数据
    excelData: {
      type: Array
    }

  },
  data () {
    return {
      // 加载中
      fullscreenLoading: false,
      // 导出文件el
      outFile: '',
      // 错误信息弹窗
      errorDialog: true,
      // 错误信息内容
      errorMsg: ''
    }
  },
  mounted () {
    // id 变量
    this.outFile = document.getElementById(this.id)
  },
  methods: {
    downloadFile (rs) {
      // 按钮导出
      let data = [{}]
      for (let k in rs[0]) {
        data[0][k] = k
      }
      data = data.concat(rs)
      this.downloadExl(data, this.excelName)
    },

    // 导出到excel
    downloadExl (json, downName, type) {
      let keyMap = [] // 获取键
      for (let k in json[0]) {
        keyMap.push(k)
      }
      console.info('keyMap', keyMap, json)
      let tmpdata = [] // 用来保存转换好的json
      json.map((v, i) => keyMap.map((k, j) => Object.assign({}, {
        v: v[k],
        position: (j > 25 ? this.getCharCol(j) : String.fromCharCode(65 + j)) + (i + 1)
      }))).reduce((prev, next) => prev.concat(next)).forEach(function (v) {
        tmpdata[v.position] = {
          v: v.v
        }
      })
      // 设置区域,比如表格从A1到D10
      let outputPos = Object.keys(tmpdata)
      let tmpWB = {
        // 保存的表标题
        SheetNames: ['mySheet'],
        Sheets: {
          'mySheet': Object.assign({},
            tmpdata, // 内容
            {
              '!ref': outputPos[0] + ':' + outputPos[outputPos.length - 1] // 设置填充区域
            })
        }
      }
      // 创建二进制对象写入转换好的字节流
      let tmpDown = new Blob([this.s2ab(XLSX.write(tmpWB,
        {bookType: (type === undefined ? 'xlsx' : type), bookSST: false, type: 'binary'} // 这里的数据是用来定义导出的格式类型
      ))], {
        type: ''
      })
      // 创建对象超链接
      var href = URL.createObjectURL(tmpDown)
      // 下载名称
      this.outFile.download = downName + '.xlsx'
      // 绑定a标签
      this.outFile.href = href
      // 模拟点击实现下载
      this.outFile.click()
      setTimeout(function () {
        // 延时释放
        URL.revokeObjectURL(tmpDown) // 用URL.revokeObjectURL()来释放这个object URL
      }, 100)
    },
    // 字符串转字符流
    s2ab (s) {
      var buf = new ArrayBuffer(s.length)
      var view = new Uint8Array(buf)
      for (var i = 0; i !== s.length; ++i) {
        view[i] = s.charCodeAt(i) & 0xFF
      }
      return buf
    },
    // 将指定的自然数转换为26进制表示。映射关系：[0-25] -> [A-Z]。
    getCharCol (n) {
      let s = ''
      let m = 0
      while (n > 0) {
        m = n % 26 + 1
        s = String.fromCharCode(m + 64) + s
        n = (n - m) / 26
      }
      return s
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
  .el-table th>.cell {
    text-align: center;
  }
  .button {
    margin-bottom: 20px;
  }
</style>
