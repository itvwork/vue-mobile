<style lang="less">
@import "./style.less";
</style>
<template lang="html" >
   <div class="vuk-alert" v-append>
     <transition name="custom-classes-transition" enter-active-class="ani2 fadeIn" leave-active-class="animated fadeOut">
      <div class="vuk-bg"  @click="toogle=false"  v-show="toggle"></div>
  </transition>
   <transition name="custom-classes-transition" enter-active-class="animated zoomIn" leave-active-class="animated zoomOut">
      <div class="vuk-log"  v-show="toggle" >
          <h4 m class="log-title">{{title}}</h4>
          <p m class="log-info">{{info}}</p>
          <button class="btn-log-sure"  @click="show()">确定</button>
      </div>
      </transition>
   </div>
</template>
<script>
export default {
  props: {
    title: {
      type: String,
      default: "上传封面"
    },
    info: {
      type: String,
      default: "警告内容"
    }
  },
  data() {
    return {
      toggle: false
    };
  },
  created() {
    // let self = this;
    // let div = document.createElement("div");
    // div.className = "vuk-alertx";
    // let btn = document.createElement("button");
    // btn.innerHTML = "确定";
    // div.appendChild(btn);
    // btn.onclick=function(){
    //   self.show();
    // };
    // document.body.appendChild(div);
  },
  methods: {
    show() {
      this.toggle = false;
    }
  },
  mounted () {
    window.onpopstate=(e)=>{
      this.toggle=false;
    }
  
  },
  directives: {
    append: {
      // 指令的定义
      inserted: function(el) {
        let nodes = document.body.childNodes;
        let arr=[];  
         for(let i=0,len=nodes.length;i<len;i++){
           if(nodes[i].nodeType==1&&nodes[i].className=="div-alert-none"){
              arr.push(nodes[i]);
           }
         }

       
         for(let i in arr){
           document.body.removeChild(arr[i]);
           console.log(1);
         }

        let box = document.createElement("div");
        box.className = "div-alert-none";
        box.appendChild(el);
        document.body.appendChild(box);

        return "";
      }
    }
  }
};
</script>
