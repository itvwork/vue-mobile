
<template lang="html">
  <div :id="id" class="vuk-scroll-wrap" :style="{top:top}">
    <div :id="id+'in'" class="vuk-scroller" @touchend="end()">
      <div class="vuk-scroll-loading">{{news}}</div>
      <slot></slot>
      <div class="vuk-scroll-more">{{more}}</div>
    </div>
  </div>
  <!-- <slot></slot> -->
</template>
<script>
  //import IScroll from "../../vender/iscroll-probe.js";
  export default {
    props: {
      title: {
        type: String,
        default: ""
      },
      type: {
        type: String,
        default: "text"
      },
      less: {
        type: String,
        default: "fixed"
      },
      placeholder: {
        type: String,
        default: "请输入内容"
      },
      titleWidth: {
        type: String,
        default: "16mm"
      },
      top: {
        type: String,
        default: 0
      },
      id: {
        type: String,
        default: "warp"
      }
    },
    mounted: function() {
      let self = this;
      this.start();
      this.scroll.destroy();
      // setTimeout(()=>{
      //   self.scroll.destroy()
      // },3000);
      // setTimeout(()=>{
      //   self.scroll._init();
      // },5000);
    },
    updated() {
      this.scroll.refresh();
    },
    created() {},
    data() {
      return {
        errCode: 0,
        scroll: "",
        more: "松开手加载更多"
      };
    },
    methods: {
      alert(val) {
        console.log(val);
      },
      end() {},
      start() {
       
        this.scroll = new IScroll("#"+this.id, {
          mouseWheel: false,
          scrollbars: false,
          freeScroll: false,
          scrollX: true,
          bounce: true,
          bounceAuto: false,
          deceleration: 0.006,
          probeType: 3,
          ignoreBoundaries: true,
          speedRatioY: 0.4,
          bounceTime: 300
        });
        this.scroll.on("scroll", function() {
          if (this.y > -50) {
            this.options.bounce = false;
          } else {
            this.options.bounce = true;
          }
        });
        this.scroll.on("pulldown", function() {});
        this.scroll.on("pullup", function() {
          self.more = "加载中……";
        });
        this.scroll.on("scrollEnd", function() {});
      }
    },
    components: {}
  };
</script>

<style lang="less">
  @import "./style.less";
</style>
