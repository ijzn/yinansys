<template>
  <span>{{numTween}}</span>
</template>

<script>
import TWEEN from '@tweenjs/tween.js'
export default {
  props: {
    num: {
      type: Number,
      required: true
    }
  },
  data () {
    return {
      numTween: 0
    }
  },
  watch: {
    num (newValue, oldValue) {
      this.tween(newValue, oldValue)
    }
  },
  methods: {
    tween (newValue, oldValue) {
      new TWEEN.Tween({
        number: oldValue
      })
        .to({
          number: newValue
        }, 500)
        .onUpdate(tween => {
          this.numTween = tween.number.toFixed(3)
        })
        .start()

      function animate () {
        if (TWEEN.update()) {
          requestAnimationFrame(animate)
        }
      }
      animate()
    },
    change () {
      this.num = 500
    },
    reset () {
      this.num = 0
    }
  }
}
</script>

<style scoped lang="scss">
</style>
