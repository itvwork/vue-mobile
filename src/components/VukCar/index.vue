
<template lang="html">
    <div :id="id" class="iscroll-wrapper">
        <div class="iscroller">
            <div class="iscroll-content" style="width: 456px;">
                <div class="parmsbox">
                    <ul class="paramitems" v-for="(item,index) in param">
                        <template v-for="(p,i) in item">
                                  <li class="none-value" :class="{islike:p.dislike}"  v-html="p.name"></li>
                                  <li class="normal-value"  v-for="(a,d) in p.data" :class="{islike:p.dislike,litlike:a.dislike}"    v-html="a.name"></li>
</template>
                    </ul>                   
                </div>
                <div class="left-base" :style="{transform: 'translate('+(-titlePos)+'px,0px)'}">
                    <ul class="left-base-nav">
<template v-for="(item,index) in leftTitle">
    <li class="left-base-title">
        {{item.name}}
        <div class="left-say-bar">
            <em><i class="icon-stand"></i>标配</em>
            <em><i class="icon-nostand"></i>选配</em>
            <em><i class="icon-none"></i>无</em>
        </div>
    </li>
    <li class="left-base-item" v-for="(p,i) in item.data">{{p.name}}</li>
</template>
                    </ul>
                </div>
            </div>
        </div>
        <div class="scroll-say-bar">基本参数
            <div class="left-say-bar"><em><i class="icon-stand"></i>标配</em><em><i class="icon-nostand"></i>选配</em><em><i class="icon-none"></i>无</em></div>
        </div>
        <div class="iscroll-title" :style="{transform: 'translate('+titlePos+'px,0px)'}">
            <ul class="car-title">
                <li class="item-car-title" v-for="(item,index) in showtitle"><i></i>{{item.name.value}}</li>
                <!-- <li class="item-car-title" data-name="itemcar0"><i></i>本田CR-V 2017款 240TURBO 手动两驱经典版</li>
                <li class="item-car-title" data-name="itemcar1"><i></i>本田CR-V 2017款 240TURBO CVT两驱舒适版</li>
                <li class="item-car-title" data-name="itemcar2"><i></i>本田CR-V 2017款 240TURBO CVT两驱风尚版</li> -->
            </ul>
        </div>
        <div class="left-oper active">
            隐藏<br> 相同项
        </div>
    </div>
</template>
<script>
    export default {
        props: {
            id: {
                type: String,
                default: "carwrap"
            }
        },
        data() {
            return {
                scroll: "",
                titlePos: 0,
                showtitle: [],
                leftTitle: [],
                param: []
            };
        },
        created() {
            this.getdata();
        },
        mounted() {
            let self = this;
            this.start();
            this.scroll.on("scroll", function() {
                self.titlePos = this.x;
            });
        },
        updated() {
            this.scroll.refresh();
        },
        methods: {
            async getdata() {
                let data = await this.$ajax.post(
                    "http://h53d.3dwgc.com/model/getContent", {
                        data: {
                            id: 2
                        }
                    }
                );
                let res = JSON.parse(data.data.content);
                this.name(res);
            },
            start() {
                this.scroll = new IScroll("#" + this.id, {
                    mouseWheel: false,
                    scrollbars: false,
                    freeScroll: false,
                    scrollX: true,
                    bounce: false,
                    probeType: 3,
                    deceleration: 0.006,
                    ignoreBoundaries: true
                });
            },
            like() {
                let plen = this.param.length;
                if (plen <= 1) return true;
                let itemlen = this.param[0].length;
                //总标题否相同
                for (let i = 0; i < itemlen; i++) {
                    let dislike = true;
                    for (let a = 0; a < plen - 1; a++) {
                        if (JSON.stringify(this.param[a][i]) != JSON.stringify(this.param[a + 1][i])) {
                            dislike = false;
                            break;
                        }
                    }
                    for (let a = 0; a < plen; a++) {
                        this.param[a][i]['dislike'] = dislike;
                    }
                    this.leftTitle[i]['dislike'] = dislike;
                }
                for (let i = 0; i < itemlen; i++) {
                    if (this.param[0][i]['dislike'] !== true) {
                        let dl = this.param[0][i]['data'].length; //data长度    
                        for (let a = 0; a < dl; a++) { //d.data
                            let dislike = true;
                            for (let b = 0; b < plen - 1; b++) {
                                if (this.param[b][i]['data'][a]['name'] != this.param[b + 1][i]['data'][a]['name']) {
                                    dislike = false;
                                }
                            }
                            for (let b = 0; b < plen; b++) {
                                this.param[b][i]['data'][a]['dislike'] = dislike;
                            }
                            this.leftTitle[i]['data'][a]['dislike'] = dislike;
                        }
                    }
                }
                console.log(this.param);
            },
            islike(arr) {
                let dislike = true;
                for (let i = 0, l = arr.length; i < l - 1; i++) {
                    if (JSON.stringify(arr[i]) != JSON.stringify(arr[i + 1])) {
                        dislike = false;
                        break;
                    }
                }
                return dislike;
            },
            name(data) {
                //处理车型名称
                var name = data.param[0].paramitems[0].valueitems;
                var config = data.config;
                var namehtml = "";
                var arr = [];
                var params = [];
                var paramval = [];
                for (var i = 0, li = name.length; i < li; i++) {
                    this.showtitle.push({
                        name: name[i]
                    });
                    paramval[i] = [];
                }
                var param = data.param;
                var paramHtml = "";
                for (var i = 0, li = param.length; i < li; i++) {
                    params.push({
                        name: param[i]["name"],
                        type: "title",
                        data: []
                    });
                    for (var c = 0, lc = paramval.length; c < lc; c++) {
                        paramval[c].push({
                            type: "none",
                            name: "",
                            data: []
                        });
                    }
                    var paramitems = param[i]["paramitems"];
                    for (var a = 0, la = paramitems.length; a < la; a++) {
                        if (paramitems[a]["name"] != "车型名称") {
                            params[params.length - 1]["data"].push({
                                name: paramitems[a]["name"],
                                type: "param"
                            });
                            var valueitems = paramitems[a]["valueitems"];
                            for (var b = 0, lb = valueitems.length; b < lb; b++) {
                                paramval[b][paramval[b].length - 1]['data'].push({
                                    name: valueitems[b]["value"],
                                    type: "value"
                                });
                            }
                        }
                    }
                }
                for (var i = 0, len = config.length; i < len; i++) {
                    params.push({
                        name: config[i]["name"],
                        type: "title",
                        data: []
                    });
                    for (var c = 0, lc = paramval.length; c < lc; c++) {
                        paramval[c].push({
                            type: "none",
                            name: "",
                            data: []
                        });
                    }
                    var configitems = config[i]["configitems"];
                    for (var a = 0, la = configitems.length; a < la; a++) {
                        params[params.length - 1]["data"].push({
                            name: configitems[a]["name"],
                            type: "param"
                        });
                        var valueitems = configitems[a]["valueitems"];
                        for (var b = 0, lb = valueitems.length; b < lb; b++) {
                            paramval[b][paramval[b].length - 1]['data'].push({
                                name: valueitems[b]["value"],
                                type: "value"
                            });
                        }
                    }
                }
                this.leftTitle = params;
                this.param = paramval;
                this.like();
            }
        }
    };
</script>

