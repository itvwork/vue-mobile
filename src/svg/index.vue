<style lang="less">
  @import "./less/main.less";
</style>

<template lang="html">
  <section class="app-main-wrap" style="background:#000; width:100%; height:100%;">
    <div class="left-box" :class="{'start-left':open}">
      <div class="loading-box">
        <div class="box-out"></div>
        <h2 class="car-name">全新福特锐界<br/>3D试驾</h2>
        <div class="icon-logo" @click="opens()">
          <svg viewBox="0 0 100 100">   
                   <path d="M 50,50 m 0,-47.5
                a 47.5,47.5 0 1 1 0,95
                a 47.5,47.5 0 1 1 0,-95"  stroke="#fd5306" stroke-width="0.5" fill-opacity="0" style="stroke-dasharray: 298.451px, 298.451px; stroke-dashoffset: 0px; "></path>
                </svg>
          <div class="turn-box">
            <svg viewBox="0 0 100 100" class="circle1 c0">   
                   <path d="M 50,50 m 0,-47.5
                a 47.5,47.5 0 1 1 0,95
                a 47.5,47.5 0 1 1 0,-95" stroke-linecap="round" stroke="#fd5306" stroke-width="1" fill-opacity="0" style="stroke-dasharray: 298.451px, 298.451px; stroke-dashoffset: 50px; transition: stroke-dashoffset 0.6s ease 0s, stroke 0.6s ease;"></path>
                </svg>
            <svg viewBox="0 0 100 100" class="circle1 c1">   
                   <path d="M 50,50 m 0,-47.5
                a 47.5,47.5 0 1 1 0,95
                a 47.5,47.5 0 1 1 0,-95"  stroke="#fd5306" stroke-width="4" fill-opacity="0" style="stroke-dasharray: 298.451px, 298.451px; stroke-dashoffset: 240px; transition: stroke-dashoffset 0.6s ease 0s, stroke 0.6s ease;"></path>
                </svg>
            <svg viewBox="0 0 100 100" class="circle1 c2">   
                   <path d="M 50,50 m 0,-47.5
                a 47.5,47.5 0 1 1 0,95
                a 47.5,47.5 0 1 1 0,-95"  stroke="#fd5306" stroke-width="4" fill-opacity="0" style="stroke-dasharray: 298.451px, 298.451px; stroke-dashoffset: 240px; transition: stroke-dashoffset 0.6s ease 0s, stroke 0.6s ease;"></path>
                </svg>
            <svg viewBox="0 0 100 100" class="circle1 c3">   
                   <path d="M 50,50 m 0,-47.5
                a 47.5,47.5 0 1 1 0,95
                a 47.5,47.5 0 1 1 0,-95"  stroke="#fd5306" stroke-width="4" fill-opacity="0" style="stroke-dasharray: 298.451px, 298.451px; stroke-dashoffset: 240px; transition: stroke-dashoffset 0.6s ease 0s, stroke 0.6s ease;"></path>
                </svg>
            <svg viewBox="0 0 100 100" class="circle1 c4">   
                   <path d="M 50,50 m 0,-47.5
                a 47.5,47.5 0 1 1 0,95
                a 47.5,47.5 0 1 1 0,-95"  stroke="#fd5306" stroke-linecap="round" stroke-width="6" fill-opacity="0" style="stroke-dasharray: 298.451px, 298.451px; stroke-dashoffset: 298.41px; transition: stroke-dashoffset 0.6s ease 0s, stroke 0.6s ease;"></path>
                </svg>
            <svg viewBox="0 0 100 100" class="circle1 c5">   
                   <path d="M 50,50 m 0,-47.5
                a 47.5,47.5 0 1 1 0,95
                a 47.5,47.5 0 1 1 0,-95"  stroke="#fd5306" stroke-linecap="round" stroke-width="5" fill-opacity="0" style="stroke-dasharray: 298.451px, 298.451px; stroke-dashoffset: 298.41px; transition: stroke-dashoffset 0.6s ease 0s, stroke 0.6s ease;"></path>
                </svg>
            <svg class="c6"></svg>
          </div>
          <svg viewBox="0 0 100 100" class="circle2 ">   
                   <path d="M 50,50 m 0,-47.5
                a 47.5,47.5 0 1 1 0,95
                a 47.5,47.5 0 1 1 0,-95"  stroke="#fd5306" stroke-linecap="round" stroke-width="1" fill-opacity="0" style="stroke-dasharray: 298.451px, 298.451px; stroke-dashoffset: 0px; transition: stroke-dashoffset 0.6s ease 0s, stroke 0.6s ease;"></path>
                </svg>
          <svg viewBox="0 0 100 100" class="circle3">   
                </svg>
          <span class="icon show-number" :class="{complete:complete}">{{persent}}</span>
        </div>
      </div>
    </div>
    <div class="right-box" :class="{'start-right':open}">
      <div class="loading-box">
        <div class="box-out"></div>
        <h2 class="car-name">全新福特锐界<br/>3D试驾</h2>
        <div class="icon-logo" @click="opens()">
          <svg viewBox="0 0 100 100">   
                 <path d="M 50,50 m 0,-47.5
              a 47.5,47.5 0 1 1 0,95
              a 47.5,47.5 0 1 1 0,-95"  stroke="#fd5306" stroke-width="0.5" fill-opacity="0" style="stroke-dasharray: 298.451px, 298.451px; stroke-dashoffset: 0px; transition: stroke-dashoffset 0.6s ease 0s, stroke 0.6s ease;"></path>
              </svg>
          <div class="turn-box">
            <svg viewBox="0 0 100 100" class="circle1 c0">   
                 <path d="M 50,50 m 0,-47.5
              a 47.5,47.5 0 1 1 0,95
              a 47.5,47.5 0 1 1 0,-95" stroke-linecap="round" stroke="#fd5306" stroke-width="1" fill-opacity="0" style="stroke-dasharray: 298.451px, 298.451px; stroke-dashoffset: 50px; transition: stroke-dashoffset 0.6s ease 0s, stroke 0.6s ease;"></path>
              </svg>
            <svg viewBox="0 0 100 100" class="circle1 c1">   
                 <path d="M 50,50 m 0,-47.5
              a 47.5,47.5 0 1 1 0,95
              a 47.5,47.5 0 1 1 0,-95"  stroke="#fd5306" stroke-width="4" fill-opacity="0" style="stroke-dasharray: 298.451px, 298.451px; stroke-dashoffset: 240px; transition: stroke-dashoffset 0.6s ease 0s, stroke 0.6s ease;"></path>
              </svg>
            <svg viewBox="0 0 100 100" class="circle1 c2">   
                 <path d="M 50,50 m 0,-47.5
              a 47.5,47.5 0 1 1 0,95
              a 47.5,47.5 0 1 1 0,-95"  stroke="#fd5306" stroke-width="4" fill-opacity="0" style="stroke-dasharray: 298.451px, 298.451px; stroke-dashoffset: 240px; transition: stroke-dashoffset 0.6s ease 0s, stroke 0.6s ease;"></path>
              </svg>
            <svg viewBox="0 0 100 100" class="circle1 c3">   
                 <path d="M 50,50 m 0,-47.5
              a 47.5,47.5 0 1 1 0,95
              a 47.5,47.5 0 1 1 0,-95"  stroke="#fd5306" stroke-width="4" fill-opacity="0" style="stroke-dasharray: 298.451px, 298.451px; stroke-dashoffset: 240px; transition: stroke-dashoffset 0.6s ease 0s, stroke 0.6s ease;"></path>
              </svg>
            <svg viewBox="0 0 100 100" class="circle1 c4">   
                 <path d="M 50,50 m 0,-47.5
              a 47.5,47.5 0 1 1 0,95
              a 47.5,47.5 0 1 1 0,-95"  stroke="#fd5306" stroke-linecap="round" stroke-width="6" fill-opacity="0" style="stroke-dasharray: 298.451px, 298.451px; stroke-dashoffset: 298.41px; transition: stroke-dashoffset 0.6s ease 0s, stroke 0.6s ease;"></path>
              </svg>
            <svg viewBox="0 0 100 100" class="circle1 c5">   
                 <path d="M 50,50 m 0,-47.5
              a 47.5,47.5 0 1 1 0,95
              a 47.5,47.5 0 1 1 0,-95"  stroke="#fd5306" stroke-linecap="round" stroke-width="5" fill-opacity="0" style="stroke-dasharray: 298.451px, 298.451px; stroke-dashoffset: 298.41px; transition: stroke-dashoffset 0.6s ease 0s, stroke 0.6s ease;"></path>
              </svg>
            <svg class="c6"></svg>
          </div>
          <svg viewBox="0 0 100 100" class="circle2 ">   
                 <path d="M 50,50 m 0,-47.5
              a 47.5,47.5 0 1 1 0,95
              a 47.5,47.5 0 1 1 0,-95"  stroke="#fd5306" stroke-linecap="round" stroke-width="1" fill-opacity="0" style="stroke-dasharray: 298.451px, 298.451px; stroke-dashoffset: 0px; transition: stroke-dashoffset 0.6s ease 0s, stroke 0.6s ease;"></path>
              </svg>
          <svg viewBox="0 0 100 100" class="circle3">   
              </svg>
          <span class="icon show-number" :class="{complete:complete}" >{{persent}}</span>
        </div>
      </div>
    </div>
    <section class="item-grade-wrap" v-show="nav=='grade'">
      <i class="close-tier" @click="nav=false"></i>
      <h2 class="grade-title">点击升级安装</h2>
      <ul class="ul-item-grad">
        <li class="outer" v-for="(item,index) in pro" @click="changeset()">
          <div class="item-inwrap">
            <div class="img-box">
              <img :src="item.src">
            </div>
          </div>
          <p class="item-name">{{item.title}}</p>
        </li>
      </ul>
    </section>
    <!-- 颜色更换 -->
    <div class="color-box-bar" v-show="nav=='color'">
      <ul class="color-ul">
        <li class="color " @click="color(146,13,13)" ><i class="red1"><em></em></i></li>
        <li class="color" @click="color(20,33,28)"  ><i style="background-color:#234035"><em></em></i></li>
        <li class="color" @click="color(155,150,46)" ><i class="green"><em></em></i></li>
        <li class="color" @click="color(69,36,1)"  data-r="69" data-g="36" data-b="1"><i style="background-color:#452401;"><em></em></i></li>
        <li class="color" @click="color(22,22,22)"  data-r="22" data-g="22" data-b="22"><i style="background-color:#161616;"><em></em></i></li>
        <li class="color" @click="color(251,250,239)"  ><i style="background-color:#fbfaef"><em></em></i></li>
      </ul>
    </div>
    <!-- 菜单 -->
    <nav class="nav-wrap">
      <ul class="nav-ul">
        <li class="btn-wrap" :class="{active:nav=='color'}" @click="changeNav('color')">
          <i>车漆</i>
        </li>
        <li class="btn-wrap" :class="{active:nav=='grade'}" @click="changeNav('grade')">
          <i>升级</i>
        </li>
        <li class="btn-wrap" :class="{active:nav=='deploy'}" @click="changeNav('deploy')">
          <i>配置</i>
        </li>
        <li class="btn-wrap" :class="{active:nav=='book'}" @click="changeNav('book')">
          <i>预约</i>
        </li>
      </ul>
    </nav>
    <!--  -->
    <div class="wgc-shop-page" v-show="nav=='book'">
      <vuk-scroll ref="shop">
        <ul class="wgc-shop-list">
          <li class="wgc-shop-item" v-for="(item,index) in shop">
            <div class="wgc-shop-logo"><img :src="item.src" /></div>
            <div class="wgc-shop-right">
              <h2>{{item.title}}{{index}}</h2>
              <p>{{item.addr}}</p>
            </div>
          </li>
        </ul>
      </vuk-scroll>
      <!-- 配置 -->
    </div>
    <!-- <vuk-car ref="car" v-show="nav=='deploy'"></vuk-car> -->
    </div>
  </section>
</template>

<script>
  import VukScroll from "../components/VukScroll";
  // import VukCar from "../components/VukCar";
  export default {
    data() {
      return {
        nav: false,
        pro: products,
        complete: false,
        open: false,
        persent:0,
        cn:'gj',
        shop: [{
            title: "中华店",
            addr: "广州市中华路203",
            src: "/style/mobile/css/img/after.jpg",
            distance: "20km"
          },
          {
            title: "中华店",
            addr: "广州市中华路203",
            src: "/style/mobile/css/img/after.jpg",
            distance: "20km"
          },
          {
            title: "中华店",
            addr: "广州市中华路203",
            src: "/style/mobile/css/img/after.jpg",
            distance: "20km"
          },
          {
            title: "中华店",
            addr: "广州市中华路203",
            src: "/style/mobile/css/img/after.jpg",
            distance: "20km"
          },
          {
            title: "中华店",
            addr: "广州市中华路203",
            src: "/style/mobile/css/img/after.jpg",
            distance: "20km"
          },
          {
            title: "中华店",
            addr: "广州市中华路203",
            src: "/style/mobile/css/img/after.jpg",
            distance: "20km"
          },
          {
            title: "中华店",
            addr: "广州市中华路203",
            src: "/style/mobile/css/img/after.jpg",
            distance: "20km"
          },
          {
            title: "中华店",
            addr: "广州市中华路203",
            src: "/style/mobile/css/img/after.jpg",
            distance: "20km"
          },
          {
            title: "中华店",
            addr: "广州市中华路203",
            src: "./style/mobile/css/img/after.jpg",
            distance: "20km"
          },
          {
            title: "中华店",
            addr: "广州市中华路203",
            src: "/style/mobile/css/img/after.jpg",
            distance: "20km"
          },
          {
            title: "中华店",
            addr: "广州市中华路203",
            src: "/style/mobile/css/img/after.jpg",
            distance: "20km"
          },
          {
            title: "中华店",
            addr: "广州市中华路203",
            src: "/style/mobile/css/img/after.jpg",
            distance: "20km"
          },
          {
            title: "中华店",
            addr: "广州市中华路203",
            src: "/style/mobile/css/img/after.jpg",
            distance: "20km"
          }
        ],
        scroll: "",
        once: 0
      };
    },
    components: {
      VukScroll,
      // VukCar
    },
    created() {
      this.share();
    },
    mounted() {
      window.vues = this;
      let self = this;
      // 店铺
      this.scroll = this.$refs.shop.scroll;
      this.car = this.$refs.car.scroll;
      this.scroll.destroy();
      this.scroll.on("pulldown", function() {
        //  setTimeout(function(){
        //    self.scroll.scrollTo(0,0,200);
        //  },400)
      });
      this.scroll.on("pullup", function() {
        //  setTimeout(function(){
        //    self.scroll.scrollTo(0,self.scroll.maxScrollY,200);
        //  },400)
      });
    },
    methods: {
      changeNav(nav) {
        let self = this;
        nav == this.nav ? (this.nav = false) : (this.nav = nav);
        if (this.nav == false && nav == "book") {
          this.scroll.destroy();
        }
        if (this.nav == "book") {
          this.scroll._init();
        }
        if (this.nav == false && nav == "deploy") {
          this.car.destroy();
        }
        if (this.nav == "deploy") {
          this.$refs.car.restart();
          this.car._init();
        }
      },
      changeset(){
        if(this.cn=='gj'){
           changeBeset('gj');
            this.cn="bw";
        }else{
            changeBeset('bw');
            this.cn="gj";
        }
          
      },
      color(r,g,b){
          changeColor(r,g,b)
      },
      opens(){
        if(this.complete==true){
           this.open=true;
        }
      },
      async share() {
        let data = await this.$ajax.get(shareData.geturl);
        wx.config({
          debug: false, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
          appId: data.appId, // 必填，公众号的唯一标识
          timestamp: data.timestamp, // 必填，生成签名的时间戳
          nonceStr: data.nonceStr, // 必填，生成签名的随机串
          signature: data.signature, // 必填，签名，见附录1
          jsApiList: [
            "onMenuShareTimeline",
            "onMenuShareAppMessage",
            "onMenuShareQQ",
            "onMenuShareWeibo",
            "onMenuShareQZone"
          ] // 必填，需要使用的JS接口列表，所有JS接口列表见附录2
        });
        wx.ready(function() {
          // 在这里调用 API
          //朋友圈
          wx.onMenuShareTimeline({
            title: '全新本田CR-V 3D试驾', // 分享标题
            link: shareurl, // 分享链接
            imgUrl: 'https://www.gdcycj.com/car/crv2017/after/images/title.jpg',
            success: function(res) {
            },
            cancel: function(res) {
            },
            fail: function(res) {
            }
          });
          //朋友
          wx.onMenuShareAppMessage({
            title: '全新本田CR-V 3D试驾', // 分享标题
            desc: '让全新CR-V在你的手机里纵横驰骋', // 分享描述
            link: shareurl, // 分享链接
            imgUrl: 'https://www.gdcycj.com/car/crv2017/after/images/title.jpg', // 分享图标
            type: '', // 分享类型,music、video或link，不填默认为link
            dataUrl: '', // 如果type是music或video，则要提供数据链接，默认为空
            success: function() {
              // 用户确认分享后执行的回调函数
            },
            cancel: function() {
              // 用户取消分享后执行的回调函数
            }
          });
          wx.onMenuShareQQ({
            title: '全新本田CR-V 3D试驾', // 分享标题
            desc: '让全新CR-V在你的手机里纵横驰骋', // 分享描述
            link: shareurl, // 分享链接
            imgUrl: 'https://www.gdcycj.com/car/crv2017/after/images/title.jpg', // 分享图标
            success: function() {
              // 用户确认分享后执行的回调函数
            },
            cancel: function() {
              // 用户取消分享后执行的回调函数
            }
          });
          wx.onMenuShareWeibo({
            title: '全新本田CR-V 3D试驾', // 分享标题
            desc: '让全新CR-V在你的手机里纵横驰骋', // 分享描述
            link: shareurl, // 分享链接
            imgUrl: 'https://www.gdcycj.com/car/crv2017/after/images/title.jpg', // 分享图标
            success: function() {
              // 用户确认分享后执行的回调函数
            },
            cancel: function() {
              // 用户取消分享后执行的回调函数
            }
          });
          wx.onMenuShareQZone({
            title: '全新本田CR-V 3D试驾', // 分享标题
            desc: '让全新CR-V在你的手机里纵横驰骋', // 分享描述
            link: shareurl, // 分享链接
            imgUrl: 'https://www.gdcycj.com/car/crv2017/after/images/title.jpg', // 分享图标
            success: function() {
              // 用户确认分享后执行的回调函数
            },
            cancel: function() {
              // 用户取消分享后执行的回调函数
            }
          });
        });
      }
    }
  };
</script>
