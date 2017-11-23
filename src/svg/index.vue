<style lang="less">
  @import "./index.less";
</style>

<template lang="html">
  <section class="app-main-wrap">
    <!-- 升级 -->
    <section class="item-grade-wrap" v-show="nav=='grade'">
      <i class="close-tier" @click="nav=false"></i>
      <h2 class="grade-title">点击升级安装</h2>
      <ul class="ul-item-grad">
        <li class="outer" v-for="(item,index) in pro" @click="item.change()">
          <div class="item-inwrap">
            <div class="img-box">
              <img :src="item.src">
            </div>
          </div>
          <p class="item-name">{{title}}</p>
        </li>
       
      </ul>
    </section>
    <!-- 颜色更换 -->
    <div class="color-box-bar" v-show="nav=='color'">
      <ul class="color-ul">
        <li class="color " data-r="146" data-g="13" data-b="13"><i class="red1"><em></em></i></li>
        <li class="color" data-r="20" data-g="33" data-b="28"><i style="background-color:#234035"><em></em></i></li>
        <li class="color" data-r="155" data-g="150" data-b="46"><i class="green"><em></em></i></li>
        <li class="color" data-r="69" data-g="36" data-b="1"><i style="background-color:#452401;"><em></em></i></li>
        <li class="color" data-r="22" data-g="22" data-b="22"><i style="background-color:#161616;"><em></em></i></li>
        <li class="color active" data-r="251" data-g="250" data-b="239"><i style="background-color:#fbfaef"><em></em></i></li>
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

    <vuk-car></vuk-car>
   
  </section>
</template>

<script>
import VukScroll from "../components/VukScroll";
import VukCar from "../components/VukCar";
  export default {
    data() {
      return {
        nav: false,
        pro: products,
        shop:[{
          title:'中华店',
          addr:'广州市中华路203',
          src:'./style/mobile/css/img/after.jpg',
          distance:'20km'
        },
        {
          title:'中华店',
          addr:'广州市中华路203',
          src:'./style/mobile/css/img/after.jpg',
          distance:'20km'
        },
        {
          title:'中华店',
          addr:'广州市中华路203',
          src:'./style/mobile/css/img/after.jpg',
          distance:'20km'
        },
        {
          title:'中华店',
          addr:'广州市中华路203',
          src:'./style/mobile/css/img/after.jpg',
          distance:'20km'
        },
        {
          title:'中华店',
          addr:'广州市中华路203',
          src:'./style/mobile/css/img/after.jpg',
          distance:'20km'
        },{
          title:'中华店',
          addr:'广州市中华路203',
          src:'./style/mobile/css/img/after.jpg',
          distance:'20km'
        }
        ,{
          title:'中华店',
          addr:'广州市中华路203',
          src:'./style/mobile/css/img/after.jpg',
          distance:'20km'
        }
        ,{
          title:'中华店',
          addr:'广州市中华路203',
          src:'./style/mobile/css/img/after.jpg',
          distance:'20km'
        }
        ,{
          title:'中华店',
          addr:'广州市中华路203',
          src:'./style/mobile/css/img/after.jpg',
          distance:'20km'
        }
        ,{
          title:'中华店',
          addr:'广州市中华路203',
          src:'./style/mobile/css/img/after.jpg',
          distance:'20km'
        }
        ,{
          title:'中华店',
          addr:'广州市中华路203',
          src:'./style/mobile/css/img/after.jpg',
          distance:'20km'
        }
        ,{
          title:'中华店',
          addr:'广州市中华路203',
          src:'./style/mobile/css/img/after.jpg',
          distance:'20km'
        }
        ,{
          title:'中华店',
          addr:'广州市中华路203',
          src:'./style/mobile/css/img/after.jpg',
          distance:'20km'
        }
        ],
        scroll:'',
        once:0,
      };
    },
    components: {
        VukScroll,VukCar
     },
    created() {

    },
    mounted(){
      let self=this;

      // 店铺

        this.scroll=this.$refs.shop.scroll;
        this.scroll.destroy();
        this.scroll.on('pulldown',function(){
          console.log('pulldown');
            //  setTimeout(function(){
            //    self.scroll.scrollTo(0,0,200);
            //  },400)
        })

         this.scroll.on('pullup',function(){
            console.log('pullup');
           
            //  setTimeout(function(){
            //    self.scroll.scrollTo(0,self.scroll.maxScrollY,200);
            //  },400)
        })

    },
    methods: {
      changeNav(nav) {
        nav == this.nav ? (this.nav = false) : (this.nav = nav);

        if(this.nav==false && nav=="book"){
            this.scroll.destroy();
        }
        if(this.nav=='book'){
            this.scroll._init();
        }

      }
    }
  };
</script>
