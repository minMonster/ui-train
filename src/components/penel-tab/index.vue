<!-- crated：2019/4/17  author：Monster  -->
<template>
    <div class='penel-tab'>
        <penel v-if="show">
            <div class='penel-tab-title' @click="current = index" :class="{'active': current === index}" v-for="(item, index) in contents" :key="item.id" slot="titles">
                {{item.title}}
            </div>
            <div class="penel-tab-option" @click="option.callback(option, current)" slot="options" v-for="option in contents[value].options" :key="option.name">
                {{option.name}}
            </div>
            <div slot="content">
                {{contents[value].content}}
            </div>
        </penel>
    </div>
</template>

<script>
import Penel from '@/components/penel'
  export default {
    name: 'penel-tab',
    data: function () {
      return {
        current: this.value,
        show: true
      }
    },
    watch: {
      current (val) {
        this.$emit('changeCurrent', val)
      }
    },
    props: {
      value: {
        type: Number,
        default: function () {
          return 0;
        }
      },
      contents: {
        type: Array,
        default: function () {
          return [
            {
              title: '我是标题',
              content: '我是内容',
              options: [{
                name: '更多',
                callback: this.tabAdded
              }, {
                name: '删除',
                callback: this.tabDelete
              }
              ]
            }
          ]
        }
      }
    },
    components: {
      Penel
    }
  };
</script>
<style rel="stylesheet/less" lang="less">
    .penel-tab {
        .penel-tab-title {
            margin-right: 10px;
            position: relative;
            height: 100%;
            line-height: 35px;
            &:last-child {
                margin-right: 0;
            }
        }
        .penel-tab-title.active:before {
            content: ' ';
            position: absolute;
            bottom: 0;
            width: 100%;
            height: 2px;
            background-color: red;
        }
        .penel-tab-option {
            margin-right: 8px;
            position: relative;
            &:before {
                content: ' ';
                position: absolute;
                height: 100%;
                width: 1px;
                right: -4px;
                background-color: grey;
            }
        }
        .penel-tab-option:last-child {
            &:before {
                content: none;
            }
        }
    }
</style>
