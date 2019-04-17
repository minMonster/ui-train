<!-- crated：2019/3/14  author：Monster  -->
<template>
    <div class='InputAddres'>
        <input type="text" placeholder="请输入地址" />
        <button>修改</button>
    </div>
</template>

<script>
  export default {
    name: 'InputAddres'
  };
</script>
<style>

    .InputAddres {
        display: flex;
        width: 300px;
    }
    .InputAddres input {
        flex: 3;
    }
    .InputAddres button {
        flex: 1;
        height: 50px;
        display: block;
        background-color: cornflowerblue;
        color: #fff;
        line-height: 50px;
        text-align: center;
        padding: 0 30px;
    }
</style>
