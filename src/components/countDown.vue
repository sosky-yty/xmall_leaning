<template>
    <span :endTime="endTime" :callback="callback" :endText='endText'>
        <slot>
            {{content}}
        </slot>
    </span>
</template>
<script>
export default {
  data () {
    return {
      content: ''
    }
  },
  props: {
    endTime: {
      type: String,
      default: ''
    },
    endText: {
      type: String,
      default: ''
    },
    callback: {
      type: Function,
      default: null
    }
  },
  methods: {
    countdown (timestamp) {
      let self = this
      let timer = setInterval(function () {
        let nowTime = new Date()
        let t = timestamp - nowTime.getTime()
        if (t > 0) {
          let day = Math.floor(t / 86400000)
          let hour = Math.floor((t / 3600000) % 24)
          let min = Math.floor((t / 60000) % 60)
          let sec = Math.floor((t / 1000) % 60)
          hour = hour < 10 ? '0' + hour : hour
          min = min < 10 ? '0' + min : min
          sec = sec < 10 ? '0' + sec : sec
          let format = ''
          if (day > 0) {
            format = `${day} 天 ${hour} 小时 ${min} 分 ${sec} 秒`
          }
          if (day <= 0 && hour > 0) {
            format = `${hour} 小时 ${min} 分 ${sec} 秒`
          }
          if (day <= 0 && hour <= 0) {
            format = `${min} 分 ${sec} 秒`
          }
          self.content = format
        } else {
          clearInterval(timer)
          self.content = self.endText
          self._callback()
        }
      }, 1000)
    },
    _callback () {
      if (this.callback && this.callback instanceof Function) {
        this.callback(...this)
      }
    }
  },
  // 在vue的生命周期中当ｈｔｍｌ编译完成后挂在钩子函数时执行，一般情况下只执行一次，以作为数据初始话的工作
  mounted () {
    this.countdown(this.endTime)
  }
}
</script>
<style lang='scss' scoped>
</style>
