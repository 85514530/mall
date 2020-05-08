<template>
  <div class="conter" ref="aaa">
    <ul>
      <button @click="itemClick">按钮</button>
      <li>内容1</li>
      <li>内容2</li>
      <li>内容3</li>
      <li>内容4</li>
      <li>内容5</li>
      <li>内容6</li>
      <li>内容7</li>
      <li>内容8</li>
      <li>内容9</li>
      <li>内容10</li>
      <li>内容11</li>
      <li>内容12</li>
      <li>内容13</li>
      <li>内容14</li>
      <li>内容15</li>
      <li>内容16</li>
      <li>内容17</li>
      <li>内容18</li>
      <li>内容19</li>
      <li>内容20</li>
      <li>内容21</li>
      <li>内容22</li>
      <li>内容23</li>
      <li>内容24</li>
      <li>内容25</li>
      <li>内容26</li>
      <li>内容27</li>
      <li>内容28</li>
      <li>内容29</li>
      <li>内容30</li>
      <li>内容31</li>
      <li>内容32</li>
      <li>内容33</li>
      <li>内容34</li>
      <li>内容35</li>
      <li>内容36</li>
      <li>内容37</li>
      <li>内容38</li>
      <li>内容39</li>
      <li>内容40</li>
      <li>内容41</li>
      <li>内容42</li>
      <li>内容43</li>
      <li>内容44</li>
      <li>内容45</li>
      <li>内容46</li>
      <li>内容47</li>
      <li>内容48</li>
      <li>内容49</li>
      <li>内容50</li>
    </ul>
  </div>
</template>

<script>

import BScroll from 'better-scroll'

export default {
  // created() {
  //   new BScroll('conter', {

  //   })
  // },
  data() {
    return {
      bscroll: null
    }
  },
  // 组件创建完后调用
  mounted() {
    this.bscroll = new BScroll(document.querySelector('.conter'), {
      probeType: 2,
      pullUpLoad: true
    })

    this.bscroll.on('scroll', (position) => {
      console.log(position)
    })
    this.bscroll.on('pullingUp', () => {
      console.log('上拉加载更多')
    })
  },
  methods: {
    itemClick() {
      console.log('---')
    }
  },
}
</script>

<style>
  .conter {
    height: 100px;
    background-color: #333;
    overflow-y: scroll;
  }
</style>