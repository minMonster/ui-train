<template>
    <div class='index'>
        index
        <br/>
        <br/>
        <input-addres></input-addres>
        <br/>
        <subject-card :options="cards"></subject-card>
        <button @click="subjectCardAdd">添加卡片</button>
        <penel>
            <div slot="titles">
                我是标题
            </div>
            <div slot="options">
                <span>更多</span>
            </div>
            <div slot="content">
                我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容
            </div>
        </penel>
        <penel-tab v-model="tabCurrent" :contents="tabContents" @changeCurrent="changeCurrent"></penel-tab>
    </div>
</template>

<script>
  // 引入写好的组件
  import InputAddres from './InputAddres.vue';
  import SubjectCard from '../components/subject-card/index.vue';
  import Penel from '../components/penel';
  import PenelTab from '@/components/penel-tab';

  export default {
    components: {InputAddres, SubjectCard, Penel, PenelTab},

    name: 'index',
    data: function () {
      return {
        tabCurrent: 1,
        tabContents: [
          {
            id: 1,
            title: '标题1',
            content: '我是内容1',
            options: [{
              name: '更多',
              callback: this.tabAdded
            }, {
              name: '删除',
              callback: this.tabDelete
            }
            ]
          },
          {
            id: 2,
            title: '标题2',
            content: '我是内容2',
            options: [{
              name: '更多',
              callback: this.tabAdded
            }, {
              name: '更多1',
              callback: this.tabAdded
            }
            ]
          }
        ],
        cards: [
          {
            imgUrl: require('../assets/logo.png'),
            title: '《王者荣耀》',
            dec: '花木兰、孙尚香、庄周'
          },
          {
            imgUrl: require('../assets/logo.png'),
            title: '《刺激战场》',
            dec: '落地成盒、带妹吃鸡、暴走鸡神',
            themeClass: 'theme-red'
          },
          {
            title: '《球球大作战》',
            dec: '四分秒和、打球吃小球、超神',
            themeClass: 'theme-blue'
          },
          {
            title: '《球球大作战》',
            dec: '四分秒和、打球吃小球、超神',
            themeClass: 'theme-yellow'
          }
        ]
      };
    },
    // 注册组件
    comments: {
      InputAddres
    },
    methods: {
      /*
      * @func
      * @dec 添加卡片函数
      * */
      subjectCardAdd () {
        this.cards.push(
          {
            imgUrl: require('../assets/logo.png'),
            title: '《球球大作战》',
            dec: '四分秒和、打球吃小球、超神'
          }
        );
      },
      changeCurrent (value) {
        this.tabCurrent = value;
      },
      tabAdded (item, index) {
        alert('点击了第' + index + '个的' + item.name + '按钮');
      }
    }
  };
</script>
<style scoped>
    .index {
        padding: 15px;
    }

    .index button {
        height: 50px;
        display: block;
        background-color: cornflowerblue;
        color: #fff;
        line-height: 50px;
        text-align: center;
        padding: 0 30px;
    }
</style>
