
<template lang="html">
    <div id="wrapper" class="vuk-scroll-wrap">
	<div id="scroller" class="vuk-scroller">
    <div class="vuk-scroll-loading">loading</div>
		<ul>
			<li v-tap="{method:alert,params:'你是谁'}">Pretty row 1</li>
			<li v-tap="{method:alert,params:'你是谁1'}">Pretty row 2</li>
			<li @click="alert('click')">Pretty row 3</li>
			<li>Pretty row 4</li>
			<li>Pretty row 5</li>
			<li>Pretty row 6</li>
			<li>Pretty row 7</li>
			<li>Pretty row 8</li>
			<li>Pretty row 9</li>
			<li>Pretty row 10</li>
			<li>Pretty row 11</li>
			<li>Pretty row 12</li>
			<li>Pretty row 13</li>
			<li>Pretty row 14</li>
			<li>Pretty row 15</li>
			<li>Pretty row 16</li>
			<li>Pretty row 17</li>
			<li>Pretty row 18</li>
			<li>Pretty row 19</li>
			<li>Pretty row 20</li>
			<li>Pretty row 21</li>
			<li>Pretty row 22</li>
			<li>Pretty row 23</li>
			<li>Pretty row 24</li>
			<li>Pretty row 25</li>
			<li>Pretty row 26</li>
			<li>Pretty row 27</li>
			<li>Pretty row 28</li>
			<li>Pretty row 29</li>
			<li>Pretty row 30</li>
			<li>Pretty row 31</li>
			<li>Pretty row 32</li>
			<li>Pretty row 33</li>
			<li>Pretty row 34</li>
			<li>Pretty row 35</li>
			<li>Pretty row 36</li>
			<li>Pretty row 37</li>
			<li>Pretty row 38</li>
			<li>Pretty row 39</li>
			<li>Pretty row 40</li>
			<li>Pretty row 41</li>
			<li>Pretty row 42</li>
			<li>Pretty row 43</li>
			<li>Pretty row 44</li>
			<li>Pretty row 45</li>
			<li>Pretty row 46</li>
			<li>Pretty row 47</li>
			<li>Pretty row 48</li>
			<li>Pretty row 49</li>
			<li>Pretty row 50</li>
		</ul>
	</div>
</div>

        <!-- <slot></slot> -->

</template>
<script>
import IScroll from "../../vender/iscroll-probe.js";
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
    }
  },
  mounted: function() {
    let self = this;
    this.scroll = new IScroll("#wrapper", {
      mouseWheel: false,
      scrollbars: false,
      freeScroll: false,
      scrollX: true,
      bounce: true,
   
      deceleration: 0.009,
      probeType: 1,
      ignoreBoundaries: true,
      speedRatioY: 0.4
    });

    this.scroll.on("scroll", function() {});
  },
  updated() {
    this.scroll.refresh();
  },
  created() {},
  data() {
    return {
      errCode: 0,
      scroll: ""
    };
  },
  methods: {
    alert(val) {
      console.log(val);
    }
  },
  components: {}
};
</script>

<style lang="less">
@import "./style.less";
</style>
