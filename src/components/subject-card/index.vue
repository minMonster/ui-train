<!-- crated：2019/3/14  author：Monster  -->
<template>
    <div class='SubjectCard'>
        <!-- 三种主题 分别是 theme-blue theme-red theme-yellow theme-black -->
        <!-- 默认 theme-black -->
        <div v-for="item in options" :key="item.id" class="flex-box theme-black" :class="item.themeClass">
            <img v-if="item.imgUrl" :src="item.imgUrl" alt="">
            <div class="info">
                <h1>{{item.title}}</h1>
                <p>{{item.dec}}</p>
            </div>
        </div>
    </div>
</template>

<script>
  export default {
    name: 'SubjectCard',
    props: {
      options: { // 数据列表
        type: Array,
        default: function () {
          return [
            // {
            //   imgUrl: '',
            //   title: '',
            //   dec: ''
            //   themeClass: ''
            // }
          ]
        }
      }
    }
  };
</script>
<style>
    .SubjectCard {
    }

    .SubjectCard .flex-box {
        width: 400px;
        display: flex;
        padding: 20px;
        background-color: #EFEFEF;
    }

    .SubjectCard .flex-box + .flex-box {
        border-top: 1px solid darkturquoise;
    }

    .SubjectCard img {
        height: 100px;
        width: 100px;
    }

    .SubjectCard .info {
        flex: 1;
        padding-left: 20px;
    }

    .SubjectCard .info h1 {
        font-size: 24px;
    }

    .SubjectCard .info p {
        font-size: 18px;
    }

    .SubjectCard .flex-box.theme-black h1,
    .SubjectCard .flex-box.theme-black p {
        color: black;
    }

    .SubjectCard .flex-box.theme-blue h1,
    .SubjectCard .flex-box.theme-blue p {
        color: blue;
    }

    .SubjectCard .flex-box.theme-red h1,
    .SubjectCard .flex-box.theme-red p {
        color: red;
    }

    .SubjectCard .flex-box.theme-yellow h1,
    .SubjectCard .flex-box.theme-yellow p {
        color: yellow;
    }
</style>
