<style lang="less">
    @import "./style.less";
</style>
<template lang="html">
    <div class="vuk-text">
       
        <div class="vuk-text-title" v-if="title" :style="{width:titleWidth}" >
            {{title}}
        </div>
        <div m class="vuk-text-input">
            <input :type="type" :placeholder="placeholder" />
            <i class="icon" @click="alert()" v-show="errCode>0" :class="{err:errCode==2,pass:errCode==1}"></i>
        </div>
        
    </div>
</template>
<script>
    export default {
        props: {
            title: {
                type: String,
                default: ""
            },
            type: {
                type: String,
                default: 'text'
            },
            less: {
                type: String,
                default: 'fixed'
            },
            placeholder: {
                type: String,
                default: '请输入内容'
            },
           
            titleWidth:{
                type:String,
                default:'16mm'
            }
        },
        data(){
            return {
                 errCode:0
            }
        },
        methods:{
            alert(){
                alert('错');
            }
        },
        components: {
        },
    };
</script>
