<template>
  <div class="scroll_wrapper" ref="wrapper">
    <div class="scroll_content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'

export default {
  props: {
    // 是否上拉加载
    isPullingUp: {
      type: Boolean,
      default: false
    },
    // 是否下拉刷新
    isPullingDown: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      scroll: null
    }
  },
  mounted () {
    this.scroll = new BScroll(this.$refs.wrapper, {
      probeType: 2,
      click: true,
      scrollX: true,
      scrollY: true,
      // 上拉加载
      pullUpLoad: this.isPullingUp && { threshold: 0 },
      pullDownRefresh: this.isPullingDown && {threshold: 50, stop: 20},
      useTransition: false // 防止iphone微信滑动卡顿
    })
    // 上拉事件触发
    this.isPullingUp && this.scroll.on('pullingUp', () => {
      this.$emit('loadUp')
      this.scroll.finishPullUp()
      this.isPullingUp && this.scroll.refresh()
    })
    // 下拉刷新
    this.isPullingDown && this.scroll.on('pullingDown', () => {
      this.$emit('loadDown')
      this.scroll.finishPullDown()
      this.scroll.refresh()
    })
  },
  updated () {
    if (this.scroll) {
      this.scroll.refresh()
    }
  },
  activated () {
    this.scroll.refresh()
  }
}
</script>

<style>
.scroll_wrapper {
  height: 100%;
  overflow: hidden;
}
</style>
